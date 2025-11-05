---
title: Revisiting LLMs for Code Development
date: 2025-05-29T17:09:10.288881214+02:00
location:
  latitude: 51.4459
  longitude: 5.46156
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
categories:
  - writings
syndication:
  - https://fosstodon.org/@hacdias/114591750868199511
  - https://bsky.app/profile/hacdias.com/post/3lqcyr7bytn23
tags:
  - artificial intelligence
  - machine learning
  - tools
---

Last September, I decided to finally give my shot at LLMs for code development. At that point, I had barely used any of the most known LLMs for a serious reason. It's not nine months later, and a lot has changed. With all of the news about Claude 4 and considering I have a work ChatGPT subscription, I decided to give LLMs another try.

<!--more-->

When I [last tried](/2024/09/25/trying-chatgpt-for-code/) ChatGPT for code development, I had it generate some TypeScript types based on a schema described by an XML file. Despite doing its best, the output from the LLM had quite a lot of mistakes and was not the most usable. It just wasn't good enough.

## Implementing ECDH-ES

Fast forward a few months, I decided to give it another try, especially considering that so much has changed. And maybe because I was a bit frustrated with what I was doing. I had to implement the ECDH-ES protocol in Node.js without resorting to any external libraries.

I wanted to preferably use the native Node.js APIs instead of WebCrypto since they are synchronous, but most examples I found online, especially when using JWKs, were using WebCrypto. So... I thought: let me try ChatGPT, since work is paying for it. I opened it, and commanded:

> Implement the ECDH-ES  protocol in Node.js with JWKs

ChatGPT begun immediately to spit out a lot of information. I read it, copied the code, and it didn't work. I got an error, and the error was quite generic in the sense that any of the data being given to the algorithm could be wrong to generate that error.

So I thought: maybe if I tell this thing of the error, it may be able to fix it. So I tried. It did not fix it: it just dumped me a bunch of reasons why it could've happened, but not of them really actionable. After inspecting the implementation one more time, and the specification of the protocol, I noticed there was a very important piece of data missing.

Then, I proceeded to inform ChatGPT that this piece of data was missing in its algorithm calculations. It immediately blurted out that that could be a reason for the error I was getting, and proceeded to fix it. To my surprise, it just worked. The code just worked after that.

Afterwards, I updated the code to be more generic and allow for multiple encryption algorithms and key types, but it worked. It just worked. I was surprised. That was a positive experience.

## Generating Seeds and Schemas

Another instance where I used an LLM, this time GitHub Copilot, was to do a very repetitive task: write database seed files, which just describe some schemas from a few different digital credentials in mDOC and SD-JWT formats.

The task was simple, yet extremely repetitive for me: I had a bunch of identifiers, and I just had to copy paste the same bits of code, generate a new UUID for each identifier, add a title and description in English, and translate that to multiple languages.

Feeling how tedious this task was, that I've done countless of times, automated where I could, but not possible everywhere, decided to give Copilot a try. I opened one of this seed files, opened Copilot and said something along these lines:

> Take the opened file as a template. Generate a similar file, but for the namespace *X*, with the attributes identified by: *A, B, C, D*. For all of this attributes, generate a title and description and translate to the respective locales.

To my surprise, it did what I wanted: it really just generated a new file with a seed schema describing those attributes with all identifiers, titles, translated into multiple locales. And even with new UUIDs. As long as the UUIDs are unique within this small realm of schemas, it's fine.

This was one more positive experience. It allowed me to sort of automate this extremely repetitive task, which includes just copy-pasting the same bits and replacing here and there with a different identifier. Surprised.

## Autocomplete

Another thing I've tried recently was GitHub Copilot's autocomplete functionality. Autocomplete from language servers is usually quite useful so I was very interested in what GitHub Copilot could bring to the table.

I've noticed a few things: if the suggestion is useful and it is (almost) exactly what I want, I really enjoy the magic of just pressing <kbd>Tab</kbd> and letting it do its magic.

However, if the suggestion is not useful, especially if it's a multiline suggestion, I find it horrendous. It's annoying, it's on the way, and it keeps changing at every keypress I do. It pollutes my screen, and it becomes annoying.

So here I have a mixed opinion of: I think with time, and with more tweaks, it can become better and more useful for me. For now, I'm just trying it for personal projects. I watched this video, which I do not recall, where they were talking about the usage of LLMs for code, and something they said struck:

> To be good at doing hard things, you need to be proficient at doing simple things.

It was definitely not exactly that but something along those lines. And it sort of makes sense. We all know the expression that practice makes perfection. I wonder if the usage of LLMs to perform the basic tasks will lead - or maybe not - to a slow "downgrade" of our abilities to do harder tasks.

## What now?

My opinion has changed, perhaps. I don't think I've ever had a very strong opinion about LLMs and everything that's being talked about. And this is despite having studied Machine Learning during my masters degree.

I'm not pro- or anti- the usage of LLMs. Just like any other tool, I think there are good use cases, and bad use cases. Personally, I do not plan to use LLMs to generate text or create photos (except for a few meme's to try) or videos or any other more creative task.

I think they can be good for a quick question, or if I've been researching about something, but there's this thing I can't figure out. An LLM can be extremely useful at explaining something using a different analogy, or words.

Other good examples are maybe glorified code autocomplete, assuming it works properly. That'll probably take a bit longer to be at the stage I wanted it to be. But maybe that's not something that's possible without mind reading.

And there's also points to improve: the energy consumption of AI in general, from training process to usage, is extremely large. Optimization of this models, making them smaller without losing capabilities, those are things that should be improved on. There's a lot of smart people work on it. I'm sure we'll get there.

Not pro. Not against. Just cautious.
