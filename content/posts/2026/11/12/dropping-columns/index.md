---
title: 'TIL: Drop Columns a Release Later'
date: 2026-11-12T09:00:00+01:00
categories:
  - writings
tags:
  - work
  - programming
  - databases
  - infrastructure
---

Recently, I worked on a database migration at work where I had to plan a database migration rollout across releases to avoid downtime. For this, I applied the expand and contract pattern, even though, at the time, I didn't know there was a name for it. I now realize, though, that the contract phase should've gone out in two phases.

<!--more-->

This post is more of a "today I learned" sort of thing. Many of you will probably know what expand and contract is. If I had to describe it in a single line, I'd say: you first add the new things, then migrate, then remove the old things, in different deploys. Simple as that.

What happened is that we experienced a few seconds of downtime during the contract phase. We had agreed that this could happen. After all, `DROP`ping a `COLUMN` requires exclusive access to the table, blocking any other operations on that table.

What I hadn't really thought about was the way Postgres gets the lock. Before it can take it, the migration has to first wait for every query already running on the table to finish. And while it waits, every new query on that table queues behind it, even `SELECT`s. So even if dropping the column itself is fast, the waiting can stall everything that is touching the table.

But that was not the only issue: we also shipped the code that stopped using the old columns with that release. That meant that the code update was also dependent on the database migration, and that the old code wouldn't work after the migration.

The TIL part here: migrate, then stop using the old columns (you can even set `@ignore` in Prisma if you're using it), then drop the columns in a later release. And, when dropping the columns, also put a `lock_timeout` on it to avoid it blocking everyone while it's waiting. If it times out, you just retry.

This works for a SaaS, where you control the release and update cadence. But if you're releasing software that others run themselves (e.g. on-premise), you can't. In that case, you need to communicate that people should only update from version X, Y, or Z. If you go from the release where you add the new columns to the one after dropping the columns, the data migration jobs that would need to run in between can't run anymore, and you lose data. But [people don't read docs](/2026/11/10/people-dont-read-docs/). A possible thing to do there is to add a version check precondition to the migration, to avoid upgrading from a version you shouldn't.

I ended up reading a bit more about this, and I also learned that you can leverage `NOT VALID` when adding new constraints, which only checks new rows, so the lock is only held for a brief moment. And then you can later run `VALIDATE CONSTRAINT` to check the existing rows, which takes a lighter lock that doesn't block reads or writes. For large tables, this is also important to avoid locking the whole table during deployment.
