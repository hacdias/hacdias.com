---
title: The Test That Only Failed in the Summer
date: 2026-10-20T09:00:00+02:00
categories:
  - writings
tags:
  - programming
  - testing
  - javascript
  - time zones
  - story time
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3myc2qxaj2272
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3myc2qxaj2272
  - https://fosstodon.org/@hacdias/117471943422472730
---

In the summer, while I was working on a feature locally, I noticed a test started failing. I initially dismissed it: I assumed there was some flakiness, and CI was green, so everything must've been good, right? Until it kept failing, only locally. A test that a few days before was working as normal.

<!--more-->

It was not just a single test. Multiple tests were failing, so the immediate thought was that they must be related. The question was: why are they failing on my machine, but not on CI? The exact same code, the exact same setup -- or so I thought. After cleaning caches and dependencies, and retrying multiple times, it was definitely not flaky, nor a cache issue.

Some background: the failing tests were all about X.509 certificate validity. We create leaf certificates for mdoc, whose specification ([ISO/IEC 18013-5](https://www.iso.org/standard/69084.html)) limits their validity to 457 days. The service rejects certificates that are valid for longer than that, and the tests made sure that the limit was correctly enforced: create a certificate that is valid for exactly 457 days from now and check that it is accepted.

After some fiddling with the tests and finding nothing special, I asked Claude to help me debug it. It turns out the culprit was using `setDate`:

```ts
const start = new Date();
const end = new Date(start);
end.setDate(end.getDate() + 457);
```

`setDate` adds *calendar* days, which sounds like exactly what you would want: add 457 days and the certificate will expire in exactly 457 days. What I wasn't aware of is that it works in local time. It keeps the wall-clock time the same while moving the date. Do you see where this is going? If there is a daylight saving time (DST) change in between, it gets absorbed.

## Why Only in the Summer

The real elapsed time is not *just* 457 days. It is 457 × 24 hours, plus the difference between the UTC offset at the start and at the end of the period. In the Netherlands, summer time is UTC+2 and winter time is UTC+1. If you start in summer time and end in winter time, you get 457 days and one hour. The service measured the elapsed time, so the certificate was one hour over the limit.

457 days is a year plus about three months, so to end in winter time, the start has to be within around three months before October. In the Netherlands, in 2026, that means the test fails from 31 July to 24 October. So yes, today it would still fail locally if it hadn't been fixed. The window shifts slightly every year, since the DST change always falls on the last Sunday of October, but the problem comes back every summer.

CI runs in UTC, which has no DST, so the test would never have failed there. Running the tests locally with `TZ=UTC` also confirmed it: everything went from red to green.

## The Fix

The fix was reasonably easy. Instead of adding calendar days, we add the exact number of milliseconds, using the same constant that the service checks against:

```ts
const end = new Date(start.getTime() + MAX_VALIDITY_MS);
```

This way, the time zone doesn't matter. Another option would've been to use `setUTCDate`, since UTC days are always 24 hours long. But reusing the constant matters as much as the arithmetic: keeping a hardcoded version of the constant somewhere else is just asking for problems.

As an aside, this is also a great example of how AI has changed the way I work and write code. I'm sure I'd have gotten to the bottom of it myself, but it would've taken a lot longer, especially since, in the middle of the summer, daylight saving time was the last thing I would've thought about.

---

In the future, I'll think about whether I mean calendar days or elapsed time, whichever makes sense for the use case. In this case, I always assumed elapsed time; I just wasn't aware that `setDate` works in local time, especially since the test just worked when I first wrote it.

And also: reuse the constant. The whole point of the test was to check against that limit, so it should've been reused in the first place. Every now and then, try running your tests in a different time zone! Who knows what you might find.
