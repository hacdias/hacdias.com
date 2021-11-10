---
title: Utrecht II
date: 2021-04-30T12:01:00Z
photo:
- 2021-04-utrecht-17
- 2021-04-utrecht-03
- 2021-04-utrecht-18
- 2021-04-utrecht-20
- 2021-04-utrecht-13
- 2021-04-utrecht-25
photoClass: g21utrii mgrid
---

<style>
.g21utrii {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  grid-template-areas:
    "a a a a a a"
    "b b c c d d"
    "e e f f f f";
}

.g21utrii figure {
  height: 100%;
  margin: 0;
}

.g21utrii figure img {
  object-fit: cover;
  height: 100%;
}

.g21utrii > *:nth-child(1) { grid-area: a; }
.g21utrii > *:nth-child(2) { grid-area: b; }
.g21utrii > *:nth-child(3) { grid-area: c; }
.g21utrii > *:nth-child(4) { grid-area: d; }
.g21utrii > *:nth-child(5) { grid-area: e; }
.g21utrii > *:nth-child(6) { grid-area: f; }
</style>
