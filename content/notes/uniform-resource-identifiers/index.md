---
title: Uniform Resource Identifiers
deleted: true
published: 2022-10-20T18:14:24.836877213+02:00
updated: 2022-10-20T18:18:05.027765815+02:00
section:
- notes
createdWith: https://hacdias.com/
noIndex: true
---

A **Uniform Resource Identifiers (URI)** is a string of characters that identifies unambiguously a resource. It is a standard in the WWW world.

<!--more-->

The syntax:

```
uri = scheme:[//authority]path[?query][#fragment]`
authority = [userinfo@]host[:port]
```
 
Examples:
  - urn:isbn:0-486-27557-4
  - https://example.com
  - mailto:example@example.com

## URL

A **Uniform Resource Location (URL)** is an URI type used to identify a resource on the Internet. It provides the 

## URN

A **Uniform Resource Name (URN)** is an URI type that identifies a given resource by name on a given namespace. For example, a book's isbn.
