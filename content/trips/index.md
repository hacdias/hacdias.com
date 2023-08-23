---
title: Places That I Have Visited
description: A list of the trips I took in the past.
---

This is where I list the trips 🚅 I have done in the past. I like keeping a record,
albeit small of where I have been in the past, and what for. I also record some
traveling goals in my [impossible list](/impossible-list) page. In addition, I
might also list a future trip if it involves certain types of events, such as conferences.

<!--more-->

<style>
.trips details > summary::marker, /* Latest Chrome, Edge, Firefox */
.trips details > summary::-webkit-details-marker /* Safari */ {
  display: none;
}

.trips summary.e {
  grid-template-columns: auto 18rem 7rem;
}

.trips details[open] summary.e,
.trips details:not(:last-of-type) summary.e {
  border-bottom: var(--border) solid var(--fg);
}

.trips details[open] .e {
  background: var(--mg);
}

.trips summary.e > div:last-of-type {
  display: grid;
  grid-template-columns: 3rem 1rem 3rem;
}

.legs > div {
  font-size: var(--f5);
  border-bottom: var(--border) solid var(--fg);
  padding: var(--hms) 0;
  background: var(--mg);
}
</style>

{{< trips >}}
