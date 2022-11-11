---
description: 'NAME by AUTHOR (ISBN: ISBN)'
published: {{ .Now.Format "2006-01-02T15:04:05Z07:00" }}
section:
- books
properties:
  read-of:
    properties:
      author: AUTHOR
      name: NAME
      pages: PAGES
      publisher: PUBLISHER
      uid: isbn:ISBN
    type: h-cite
  read-status:
  - date: {{ .Now.Format "2006-01-02T15:04:05Z07:00" }}
    status: to-read
---

