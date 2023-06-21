---
description: Replied to a post on hacdias.com
date: 2020-07-21T07:34:33.271Z
noIndex: true
tags:
- meta
categories:
- notes
context:
  name: Henrique Dias
  url: https://hacdias.com/2020/07/20/too-many-notes-apps
  content: 'Taking notes is a process… that’s true. Yesterday I found a post on HackerNews
    talking about how tired people are of new notes apps. I agree: there’s so many
    different note-taking apps that it becomes unbearable to find whatever fits you.
    I have a giang repository of markdown files with images and a lot of notes, all
    interconnected. And I still couldn’t find a good app for me. That’s why I’m considering
    building one simple system for myself, initially private to avoid possible noise,
    and then open source. My requirements for a system are these:Must-have:Self hosted
    and open source Notes stored in plain text files Backlinking feature Supports
    LaTeX math Supports Mermaid diagrams Clean layout and possible to easily edit
    on mobile Web editor (maybe WYSIWYG) Simple and humanly readble markup language
    (markdown or other) Search Good to have:Full-text search Mind map visualization
    Public/private stuff Do you know any application that accomplishes all of this
    cumulatively? I liked this visually and there’s also this being built but I have
    no clue about when’s it going to be available or how the storage will work.If
    I would create this, it would be just yet another note-taking app, but with a
    small difference in mind: this would be directed to be self-hosted for just one
    person. No services, for myself, as I wanted it to work.'
  published: 2020-07-20T09:25:47Z
reply: https://hacdias.com/2020/07/20/too-many-notes-apps
---

So... replying to myself. Probably what I'm going to do is quite similar to what I had before: statically generate the notes from source markdown (or something else). I first need to decide the best language. Markdown is simples, yes, but sometimes I feel I need to add HTML to make it look exactly how I want it to. For example, I can't just <mark>do this</mark> in markdown without using HTML. Some other markup languages allow for much more customization, such as Asciidoc.

Let me review the features I wrote yesterday to know if I can accomplish what I want this way. First, the must-haves:

> Self hosted and open source
> Notes stored in plain text files
> Backlinking feature
> Supports LaTeX math
> Supports Mermaid diagrams

Yes, yes, yes, yes and yes even if I have to create some script to adapt it to whatever static website generator I'm using. Unfortunately Hugo does not easily allow me to process backlinks on its own. I may try a different, more flexible, static generator for this. It's an experiment and that way I'll learn more. Maybe Gatsby or even Eleventy.

> Clean layout and possible to easily edit on mobile

Yes and kinda. Need to find a good app. There's some such as iA Writer that I know work very well. But I need to find a way to make it easily work with a Git repository.

> Web editor (maybe WYSIWYG)

GitHub editor works. Not WYSIWYG though.

> Simple and humanly readable markup language (markdown or other)

Yes.

> Search

Can be implemented, although a bit harder.

Now let's finally review the good to have features.

> Full-text search

Can be implemented too.

> Mind map visualization

Yes.

> Public/private stuff

Possible, harder, but possible.
