---
date: '2020-03-01T23:12:20.001Z'
mermaid: true
publishDate: '2020-02-22T10:42:26.092Z'
tags:
  - leic
title: Compilers
---

```mermaid
graph LR
  a(Source) --> lex[Lexical<br>Analysis]
  lex --> syn[Syntactic<br>Analysis]
  syn --> sem[Semantical<br>Analysis]
  sem --> co[Machine Code<br>Generation]
  co --> ex(Executable)

  lex --> err[Error<br>Handling]
  syn --> err
  sem --> err
  co --> err
```

- https://efxa.org/2014/05/17/techniques-for-resolving-common-grammar-conflicts-in-parsers/
- https://compiladores-novenoa.blogspot.com/2011/11/fases-de-un-compilador.html
- https://www.gnu.org/software/bison/manual/html_node/Shift_002fReduce.html