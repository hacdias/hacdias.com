---
date: '2020-03-01T23:23:38.098Z'
mermaid: true
publishDate: '2020-02-22T10:42:26.092Z'
tags:
  - leic
title: Compilers
---

A compiler is a program that transforms a program written in the source language - taken as input - and produces a file in a different language. Usually, it's a binary file that can be executed by the machine, but it doesn't need to.

There are many types of compilers:

- **Transpilers** convert between high-level languages. For example, from JavaScript to Python.
- **Compilers**

There are various types of language processors: translators (between two high-level languages), compilers (from a high-level language to a low-level language), decompilers (from low- to high-level languages), rewriters (within the same language).


A compiler is generically divided into 

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

**Lexical Analysis** is TODO

**Syntactic Analysis** is TODO

**Semantical Analysis** is TODO

## References

- https://www.tutorialspoint.com/compiler_design/compiler_design_phases_of_compiler.htm
- https://www.geeksforgeeks.org/phases-of-a-compiler/
- https://efxa.org/2014/05/17/techniques-for-resolving-common-grammar-conflicts-in-parsers/
- https://compiladores-novenoa.blogspot.com/2011/11/fases-de-un-compilador.html
- https://www.gnu.org/software/bison/manual/html_node/Shift_002fReduce.html