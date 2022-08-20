---
title: Restic
published: 2022-08-20T11:32:35.169816696+02:00
section:
- notes
createdWith: https://hacdias.com/
---

First, set the required environment variables. Some additional ones might be needed for authentication for specific services.

```
export RESTIC_PASSWORD=
export RESTIC_REPOSITORY=
```

Check if repository is okay:

```
restic check
```

List the snapshots:

```
restic snapshots
```

Restore an entire snapshot:

```
restic restore [snapshot] --target [dir]
```

