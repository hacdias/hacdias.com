---
title: Linking Reading Progress Together
date: 2022-01-25T16:13:26.918597757Z
categories:
  - writings
tags:
  - meta
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3medsnnswtg26
---

Lately, I have been [reading](/readings/) a bit more. Therefore, I wanted to be able to post more about it and track the progress. This is something I used to do before with Goodreads, but I have since stopped using it. The logical solution? Implement more features on my website. Why not?

<!--more-->

First, I was already publishing status updates on the format of "want to read", "currently reading" and "finished reading" using [indiebookclub](https://indiebookclub.biz/). However, that tool does not provide a way to track the amount of pages read or even how many pages the book has in total. Additionally, I also wanted to be able to add notes to the post.

Another problem is that every post that refereed to a book uses the `read-of` property. This property was duplicating information regarding the book author, name and ISBN across many posts.

After a long conversation with [Sebastiaan](https://seblog.nl/) and after seeing his [library](https://seblog.nl/bieb), I came up with a similar solution.

From now on, I will have a canonical page for a certain book at `/reads/isbn/{isbn}`. It can easily be expanded to other formats, such as `/reads/{doi|isbn|issn}/{id}`. This way, I can have a canonical version of a specific book edition that holds its information. Then, on the `read-of` field, I simply write `/reads/{doi|isbn|issn}/{id}` and my blog system directly fetches the information.

For example, if you access [`/reads/isbn/9789720048820`](/2022/01/17/o-ano-da-morte-de-ricardo-reis), you will see information about the book (*The year of death of Ricardo Reis*) and then all posts regarding that same book.

At the same time, the website still supports the old format where the reading post itself accepts an object with the information about the book. This is useful for books I want to read, but that I do not own yet. Therefore, I don't know which edition and details to add about the book.

One more update I did was to add a rating! To do so, I added a numerical property `rating` and then just print the right number of stars. I will use this more and more as I hope to give a small, yet nice, review of books I read. Unfortunately, I lost the ratings I've given to other books via Goodreads in the past.

Finally, I'm now supporting read updates with page numbers and notes, as you can see on ~~this post~~. It is all relatively simple.

To add all this posts, I have a few templates on my 'new post' page. Maybe in the future I will create a simple tool that will submit this via Micropub. That would definitely allow me to remove a bunch of posts. In addition, I could also simply have a shortcut on my smartphone to update the reading status for a certain book.

This was quite an exciting update! Hope you enjoyed this reading!
