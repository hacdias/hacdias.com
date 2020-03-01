---
date: '2020-03-01T23:41:22.230Z'
mermaid: true
publishDate: '2020-02-22T10:42:26.092Z'
tags:
  - leic
title: Compilers
---

A compiler is a program that transforms a program written in the source language - taken as input - and produces a file in a different language. Usually, it's a binary file that can be executed by the machine, but it doesn't need to.

There are many types of language processors:

- **Transpilers** convert between high-level languages. For example, from JavaScript to Python.
- **Compilers** convert from a high-level language to a low-level language. For example, from C to machine language.
- **Decompiler** convert from executables to high-level languages.

## Compiler Phases

Generically, the compilation process can be divided into two major steps: **analysis** and **synthesis**. Analysis takes the source code, easily readable by a human, as input and creates an intermediate representation of that source code. Synthesis takes that representation and transforms it into the final target program.

```mermaid
graph LR
  a(Source) --> lex[Lexical<br>Analysis]
  lex --> syn[Syntactic<br>Analysis]
  syn --> sem[Semantical<br>Analysis]
  sem --> int[Intermediate<br>Code Generator]
  int --> opt[Code Optimizer]
  opt --> gen[Code Generator]
  gen --> ex(Executable)

  lex --> err[Error<br>Handling]
  syn --> err
  sem --> err
  int --> err
  opt --> err
  gen --> err
```

### Lexical Analysis

This phase scans the input file and converts it into tokens. It converts a stream of lexems into a stream of tokens. Usually, tokens can be defined as regular expressions that are understood by the lexical analyzer.

[Read more.](https://web.tecnico.ulisboa.pt/~david.matos/w/pt/index.php/Theoretical_Aspects_of_Lexical_Analysis)

### Syntactic Analysis

This phase is usually called **parsing**. It takes the tokens produced by the lexical analysis as input and generates a parse tree (a.k.a. syntax tree). In this phase, token arrangements are checked against the source code grammar. If the tokens are not in the correct format, errors must be thrown.

### Semantic Analysis

After generating the parse tree, it is important to check if every element of the tree follows the rules. For example, check if you assign the right type of literal to the right type of variable. In addition, this phase tracks identifiers, types and expressions; it knows whether identifiers are declared before used or not. The output is called an annotated syntax tree.

<!--

Intermediate Code Generation
After semantic analysis the compiler generates an intermediate code of the source code for the target machine. It represents a program for some abstract machine. It is in between the high-level language and the machine language. This intermediate code should be generated in such a way that it makes it easier to be translated into the target machine code.

Code Optimization
The next phase does code optimization of the intermediate code. Optimization can be assumed as something that removes unnecessary code lines, and arranges the sequence of statements in order to speed up the program execution without wasting resources (CPU, memory).

Code Generation
In this phase, the code generator takes the optimized representation of the intermediate code and maps it to the target machine language. The code generator translates the intermediate code into a sequence of (generally) re-locatable machine code. Sequence of instructions of machine code performs the task as the intermediate code would do.

Symbol Table
It is a data-structure maintained throughout all the phases of a compiler. All the identifier's names along with their types are stored here. The symbol table makes it easier for the compiler to quickly search the identifier record and retrieve it. The symbol table is also used for scope management.

-->

## To Check Later

- https://efxa.org/2014/05/17/techniques-for-resolving-common-grammar-conflicts-in-parsers/
- https://compiladores-novenoa.blogspot.com/2011/11/fases-de-un-compilador.html
- https://www.gnu.org/software/bison/manual/html_node/Shift_002fReduce.html