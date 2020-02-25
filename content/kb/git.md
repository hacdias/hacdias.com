---
date: '2020-02-25T11:42:27.192Z'
mermaid: true
publishDate: '2020-02-25T11:23:40.793Z'
title: Git
---

Git is a distributed version control system for tracking changes in source code during software development.

```mermaid
sequenceDiagram
  participant W as Workspace
  participant S as Staging
  participant LR as Local Repository
  participant R as Remote
  W->>S: git add/mv/rm
  S->>LR: git commit
  W->>LR: git commit -a
  S->>W: git reset <file>
  LR->>R: git push
  LR->>W: git reset <commit>
  R->>LR: git fetch
  W->S: git diff
  W->LR: git diff HEAD
  R->>W: git clone/pull
```

## Stage

```bash
$

```

## Branching

More on [git branching](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging).

### Create

```bash
# Create a new branch
$ git branch <branch-name>

# Checkout the new branch
$ git checkout <branch-name>

# Create and checkout a new branch
$ git checkout -b <branch-name>
```

### Merge

More on [branch merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging).

```bash
# Checkout master
$ git checkout master

# Merge hotfix into master
$ git merge hotfix
```

### Delete

```bash
$ git branch -d <branch-name>
```