---
title: 'A Go Gotcha: Context Keys Are Typed'
date: 2026-11-27T08:47:30+01:00
categories:
  - writings
tags:
  - work
  - programming
  - go
---

Today I want to describe a small bug I uncovered a few years ago at work. I was working on a naming system, akin to DNS, which allowed you to provide a TTL when publishing or updating a name. After some attempts at making the TTL larger, it always remained at 0. The flag wasn't being honored!

<!--more-->

At this point, if you're familiar with Go and read the title, you probably already know where this is going. Let's start by saying that the CLI tool that received the option value and the library where all the naming magic happened are different packages, and this is how the CLI tool prepared the option to pass it down:

```go
type requestContextKey string

ctx = context.WithValue(ctx, requestContextKey("ipns-publish-ttl"), *options.TTL)
```

And then, this is how the library tried to read that option:

```go
var ttlContextKey contextKey = "ipns-publish-ttl"

v := ctx.Value(ttlContextKey)
d, ok := v.(time.Duration)
```

Do you see the problem? I'm almost sure this is a common Go gotcha - ah! - and that's probably why, since then, I feel like I see "context keys are typed" everywhere. `ctx.Value` compares keys like `==` compares interfaces: both the dynamic type and the value must match. While the underlying type is a string, the *dynamic* type is something else. The CLI's `requestContextKey` is not the same type as the library's `contextKey` type.

The thing is: nothing fails in a loud manner here. The lookup returns `nil`, the comma-ok assertion returns `ok == false` and the code just assumes no TTL had been set. The irony of this all is that the Go docs actually recommend unexported context key types to avoid other packages colliding with your keys. It did work as designed by the language.

Maybe even more ironic was that the naming library exported a `ContextWithTTL` helper which could've been used to avoid this issue, and yet the CLI decided to set the key itself, and probably for a good reason: the exported `ContextWithTTL` just created a new context from `context.Background()` instead of taking the existing context, so any deadline, cancellation or other values would be dropped too.

The reason this went under the radar for so long was that the naming library tests all used `ContextWithTTL`, which worked appropriately. The bug only ever existed at the boundary of these two packages, and there weren't tests exercising that boundary... [until then](https://github.com/ipfs/kubo/pull/9471).

> Use context Values only for request-scoped data that transits processes and APIs, not for passing optional parameters to functions.
> 
> -- [`context.WithValue` documentation](https://pkg.go.dev/context#WithValue)

The fix was straightforward: fully removing the option from the context and passing it down as a typed option. Context isn't meant to pass options or information in this way, especially not across different packages. It took changes to a few repositories in order to make it work but, in the end, we got a better interface and options were honored.

This was just one of those small things that you fix and never forget!

---

This is more of an aside, but I think that, in the era of AI, making sure that information actually sticks is important. For me, writing does that job. That's why I've been writing more technical posts recently. Some aren't about new things -- like this one! -- since I've handpicked a few old topics to write about, and it's comforting to see how the lessons stuck!
