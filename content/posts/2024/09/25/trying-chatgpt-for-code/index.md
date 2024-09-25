---
title: Trying ChatGPT for Code
date: 2024-09-25T17:14:04+02:00
categories:
- articles
tags:
- algorithms
- machine-learning
---

Yesterday I used ChatGPT for the first time. Well, that's not true. Let's rephrase: yesterday I used ChatGPT for the first time *to actually help me complete a task*. A boring tedious task. It did help me complete the task, but I'm still not very convinced on whether it was faster than doing it manually.

<!--more-->

In general, artificial intelligence is a topic I avoid in this website. Maybe it stems from the fact that I had way too many ML and AI-related courses in my masters and I didn't find it particularly interesting. After all, it's all just mathematics, algorithms and models.

Some of my coworkers use ChatGPT to help with tasks. Not to do tasks, but to help brainstorm potential solutions, for example. The only times I had used ChatGPT before was to try to see how the hallucinations worked. It was fun, but I didn't find it to be that useful for me. But that was the free version, which has its own limitations.

Since a few days ago, we've had a team subscription for ChatGPT so I tried, for the first time, to actually get help from ChatGPT to do a very tedious task: generate TypeScript types from a schema described in an <abbr title="Extensible Markup Language">XML</abbr> file. The XML file seemed to actually follow a standard, but I could not find any tools that would do what I wanted, so I tried ChatGPT. I gave it the schema and asked:

> Generate a TypeScript interface from the schema described in the attached file.

And it did something. It spat out the types definitions in TypeScript, including enumerations, some nested interfaces, and so on. It looked reasonably fine, but it wasn't complete. So I kept asking it: "expand the interface to include all properties". I did that... 5 times until it had actually written the whole thing.

After that, I was stil not really happy about the enumerations. They were correct according to the schema described in the XML file. However, they did not correspond exactly to what I needed. So I just asked it to update it the way I wanted. And it did it.

Copied the thing. Pasted on my code. Double checked, removed elements I didn't need. There were some mistakes in some places, and I can understand why. The values of some enumerations were actually based on their name and not actually on the description of the schema.

Here's an example of one of these errors. It generated the `MandatoryStatus` enumeration as follows:

```typescript
export type MandatoryStatus = 
  | "MANDATORY"
  | "OPTIONAL";
```

While this is what I wanted:

```typescript
export type MandatoryStatus =
  | 'SUCCEEDED'
  | 'FAILED'
  | 'PENDING';
```

I can see why it did it. And after all, it sort of makes sense if we consider it is an <abbr title="Large Language Model">LLM</abbr>. It makes sense that the "mandatory status" is either "optional" or "mandatory". But that's not what was described on the schema.

My conclusion here is: it can be helpful, but I'm not yet very convinced it will save me a lot of time for this type of tasks. Especially when going double check everything takes likely as much time as just typing it out. Next time I want to try it out for something else, maybe brainstorming potential solutions and treating it like an [overconfident weird know-it-all intern](https://simonwillison.net/2024/Sep/20/using-llms-for-code/).
