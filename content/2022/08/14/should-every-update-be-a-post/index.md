---
title: Should Every Update Be a Post?
date: 2022-08-14T19:34:06.473046888+02:00
tags:
- meta
- indieweb
categories:
- articles
---

Today I had a bit too much time that I decided to work on my website. In the morning, I made a few tweaks to the home page in order to make it more useful: added some contact and social media links, as well as links for some pages on my website that are not included in the navigation bar. I think I achieved a neat result.

<!--more-->

After that, I looked back at some posts, specifically the one that [discusses](/2022/06/09/igackzpsqy) about how to categorize the content. Not only how to categorize the content is a question on it itself, but also _should every update or bit of information be its own post?_ In this long-form article, I will discuss how the content is categorized in this website right now, and what might be improved.

### 🪁 The Categories {#categories}

As of this moment, most of the categories resemble exactly their post type, except for photos. The photos page includes all posts that have at least one photo with them, which can be a problem. I will discuss this later on. Categorizing by post type is definitely not the best idea: there is a lot of connected content, but it's split across different "views".

### 💬 Microblogging {#microblogging}

On Microblogging, the Wikipedia [says](https://en.wikipedia.org/wiki/Microblogging) the following:

> Microblogging is an online broadcast medium that exists as a specific form of blogging. A micro-blog differs from a traditional blog in that its content is typically smaller in both actual and aggregated file size. Micro-blogs "allow users to exchange small elements of content such as short sentences, individual images, or video links", which may be the major reason for their popularity. These small messages are sometimes called micro posts.

On this spectrum, we can include notes, replies, likes, reposts, and even RSVPs. As of this moment, I rarely use the likes, reposts and RSVP functionalities. I think that I used to use it more before, but the friction of doing these interactions through my website on my phone is slightly higher than on the original platforms, so I end up not doing it! Besides, liking and reposting does not really add much value to my website. I am planning on merging notes, replies, reposts and RSVPs under the same section. This creates a good ☂️ umbrella around the microblogging sphere, as well as its interactions.

### 📺 Listens and Watches {#listens-watches}

Listens and watches probably constitute a large part of the posts of this website. Are they useful however? Do they bring anything to you, or to me? Honestly, I don't think so. However, I enjoy seeing the summary about what I have watched and my listening habits.

I'm thinking of replacing this sections and storing the content in a different format, such as CSV files per month and year. Then, I could still use that data to show dynamic analyzes of my listening habits, as well as a summary of what I have watched without requiring a post for each one of them. This is kind of a regression because I had something similar to that in the past, which I then changed in favor of single posts.

What do you think: is it worth having a post for every movie and episode I watch, as well as a daily recap of what I listened? Or is it just better to store the information in a easily parsable format that can be used to dynamically present a summary of what I listened and watched?

### 🔖 Bookmarks {#bookmarks}

The bookmarks are probably one of my favorite and useful features of the website, at least for me. However, it is not that usable. I am planning on merging the bookmarks page with the blogroll under an umbrella "Links", as I had before. Moreover, I will improve the search such that I can search only under a specific section of posts, so I can have searchable bookmarks.

Bookmarks are different from listens and watches in the sense that it is much more likely that I want to add any text on it, or tags. Therefore, it makes sense to keep them as individual posts.

### 📸 Photos and 🥗 Food {#photos-food}

I love taking photos and my photos page shows that well. However, it also shows every single picture that was included in posts that I'm not really interested in showing next to the best pictures. For example: I don't want a picture of a breathtaking landscape right next to the violet spritz I had the day before. Therefore, I'm planning on separating the photos into two gallery sections: one for food - does "foodgram" sound like a good idea? -, and one for nice photos - which I might call "darkroom". This will definitely not include the pictures on my website, but it doesn't have to.

### 📍Checkins and 🗺 Itineraries {#checkins-itineraries}

Both of this represent similar things: I was in a place, or I moved from a place to another. I like the flexibility of having both types of contents and in the future I would love to have an interactive map, like [@jlelse's](https://jlelse.blog/map), where I could dynamically set a period of time and see which trips and places I've been to. For now, I'm planning on merging both under "places".

### 📚 Reads {#reads}

Reading is important, but having too many reading posts might not be as great. Right now I think I do a great job at showing all the information regarding the same book on the same place. However, it is still an aggregation of smaller posts that simply indicate that I read a few pages. To simplify this, I might simply merge everything that relates to a book into a single post. This post can show my progress during reading and the notes I took.

### ✏️ Articles {#articles}

Articles are... well... articles, long-form posts. I don't have a better name for them, except, perhaps, just call it "blog" - but isn't that the whole website? For now it's unlikely that I will touch this page. However, I hope that I will start writing more interesting posts about more diverse topics.

---

So no, I don't think every update should be a post. It doesn't make sense, at least for me, to keep an individual post saying I watched a movie, or that I listened to certain songs on a certain day. There are more efficient ways to store and visualize that information that brings more value for me.

I've realized that trying to strictly follow what is on the IndieWeb wiki won't work well for me. Thus, I have to invent and change some things to make it work better. In addition, I have implemented many features in Eagle that are very unlikely I will use, such as private posts. For that, I can just add an actual private website feature and deploy an instance in a network only I can access.
