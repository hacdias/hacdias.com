---
date: 2021-11-08T11:25:40.779888321Z
expiryDate: 2023-06-21T09:01:15.261702+02:00
tags:
- meta
categories:
- notes
---

As I [mentioned](/2021/11/02/eagle-v2-update) a few days ago, I have to decide between MeiliSearch and an SQL option. I will most likely go towards an SQL option because I need some sort of way to retrieve all the existing tags and I cannot do that with MeiliSearch unless I retrieve all posts and filter the tags.

I'm gonna be honest: I'm a bit scared of implementing this 😂 I haven't used SQL databases in some time and I feel like something will break at some point. However, I'm trying to avoid CGO at all costs. Maybe I'll try the newer non-CGO SQLite options for Go, or maybe I'll just go with Postgres.
