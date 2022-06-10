---
title: Utrecht III
published: 2021-04-30T12:02:00Z
section:
- photos
- home
photoClass: g21utriii mgrid
properties:
  photo:
  - cdn:/2021-04-utrecht-11
  - cdn:/2021-04-utrecht-01
  - cdn:/2021-04-utrecht-21
  - cdn:/2021-04-utrecht-24
  - cdn:/2021-04-utrecht-26
---

<style>
.g21utriii {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  grid-template-areas:
    "a a a"
    "b c d"
    "e e e";
}

.g21utriii figure {
  height: 100%;
  margin: 0;
}

.g21utriii figure img {
  object-fit: cover;
  height: 100%;
}

.g21utriii > *:nth-child(1) { grid-area: a; }
.g21utriii > *:nth-child(2) { grid-area: b; }
.g21utriii > *:nth-child(3) { grid-area: c; }
.g21utriii > *:nth-child(4) { grid-area: d; }
.g21utriii > *:nth-child(5) { grid-area: e; }
</style>
