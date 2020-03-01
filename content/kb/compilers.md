---
date: '2020-03-01T23:08:34.303Z'
mermaid: true
publishDate: '2020-02-22T10:42:26.092Z'
tags:
  - leic
title: Compilers
---

```mermaid
graph TB
  a((Source)) --> lex[Lexical Analysis]
  lex --> syn[Syntactic Analysis]
  syn --> sem[Semantical Analysis]
  sem --> co[Machine Code Generation]
  


```

- https://efxa.org/2014/05/17/techniques-for-resolving-common-grammar-conflicts-in-parsers/
- https://compiladores-novenoa.blogspot.com/2011/11/fases-de-un-compilador.html
- https://www.gnu.org/software/bison/manual/html_node/Shift_002fReduce.html