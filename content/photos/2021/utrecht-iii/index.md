---
title: Utrecht III
date: 2021-04-30T12:02:00Z
photo:
- 2021-04-utrecht-11
- 2021-04-utrecht-01
- 2021-04-utrecht-21
- 2021-04-utrecht-24
- 2021-04-utrecht-26
photoClass: g21utriii mgrid
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

