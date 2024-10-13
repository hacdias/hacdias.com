---
title: Reflecting on What I Want To Learn Next
date: 2024-01-09T22:17:03+01:00
categories:
  - articles
coverImage: cdn:/2024-01-summery-leaves
tags:
  - personal growth
  - reflection
  - work
---

Due to all the restructuring that has been [happening](https://protocol.ai/blog/advancing-ipfs-and-libp2p-governance/) at work, I am supposedly going to be working at a different company from next Monday on. The team will still be working on the same projects, albeit with more to choose our own direction. This has also given me time to reflect and think about what I want to learn and do next.

<!--more-->

Over the past few months, I have been feeling unchallenged. It mostly comes from all the uncertainty of the restructuring. With it, we weren't able to start any larger project that would involve deeper technical dives where I could learn much more. Nevertheless, looking at what we are planning right now, I still have doubts about the future.

Reflecting about what I want to do and what I want to learn can be quite an eye-opener, especially in these moments of uncertainty. So, what have I been thinking about lately?

![Somewhere in Summer 2022, I Think](cdn:/2024-01-summery-leaves?class=fw)

## Learning Rust

I have been eyeing Rust for quite some time. It lays down dormant in my "things to learn at some point" list. In my personal life, I also busy with learning Dutch. Work and learning Dutch at the same time, plus some other small projects, doesn't leave much time, or rather, mental capacity, for other large learning endeavors.

I have followed a few tutorials, written very small programs, but I haven't had yet the need to make something bigger. I need ideas. I think that's one of the most challenging things for me at the moment is to get ideas of something to make. For some reason my mind always discards any idea if it doesn't have a very clear or practical use-case for someone else. That shouldn't be what I'm striving for though.

## Diving Into the Lower Bits of the Internet

Quite literally, the title: I want to learn more about the lower level protocols of the Internet. During my bachelor's, I had a Networking course which I thoroughly enjoyed. Unfortunately, during my master's, there wasn't any networking-related course that I could take.

I could read about protocols, such as TCP and UDP. I do understand their fundamental differences and know vaguely how they both work. I know how HTTP connections are built on top and some other protocols too. However, I feel like that knowledge is not very well consolidated. I want to consolidate it further. For that, I need some practical application. Something to do.

Yet again, we're back at what I said when I talked about Rust: I need to feel as if I'm doing something *useful* in order to enjoy learning. But it doesn't need to be useful, at least not for others. The learning process in and on itself is already worth it. Maybe I can mix this with my will to learning Rust and combine it into some mini-project?

## Get More Comfortable With Linux Internals

I currently use macOS. Before that, I used Windows. That felt like an improvement years ago and made me dive more into the Unix-related world. However, macOS is not Linux. I feel comfortable using Linux, don't get me wrong. The goal here is to learn more about its internals.

Recently I read about [eBPF](https://ebpf.io/) and that has certainly ignited something in me. The idea that we can attach a piece of userland code that will run in the kernel when *some* events happen is quite intriguing for me. The opportunities that creates in terms of networking and observability seem to be immense.

---

I think the question here is: how to combine all three? There's three main points here: **‌(1)** Rust, **‌(2)** lower bits of the Internet, and **‌(3)** more comfortable with Linux internals. I feel like there should be some mini project that could come out of mixing and mashing all these together. I just can't figure out what. Getting something out of 1 and 2 is probably simpler than adding 3 into the mix. Nevertheless, it should be possible.

Maybe I should just choose a protocol, such as HTTP 1.1, and implement its basis in Rust using the TCP (or UDP) sockets. Then use Wireshark and [pwru](https://github.com/cilium/pwru) to trace and investigate the packets themselves. I do think I did something quite similar at university in C. So maybe not that far fetched.

Anyways, disregarding the last idea, I don't see exactly how the things I want to learn and work on - while feeling that I'm making a good and useful impact -, fit in my current work. I guess I will see. I'm giving it at least 3 months, and maximum 6, to see how I feel about work and if it's improving, unless something else more interesting shows up. I have been quite transparent about it, so that won't be a surprise.
