---
title: Which Well-Known Resources?
date: 2023-08-24T16:25:03+02:00
categories:
  - writings
tags:
  - meta
  - well known
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3k5pjzaqni25c
---

Since June, I have had a "about well-knowns" note in my drafts to write an article about. Unfortunately, I haven't been writing much the last month or two. However, two days ago, Tim wrote about his own experience with [well-known](https://timharek.no/blog/i-added-well-known-urls-to-my-website) links. That prompted me to finish this article!

<!--more-->

[Well-known URIs](https://en.wikipedia.org/wiki/Well-known_URI) are a thing and they have been used for quite a while. Some are standardized and registered at the IANA, and some aren't. I guess that, in the end, if something ends up being used a lot, it will end up being standardized somehow (*hopefully*). So... which well-known resources does this website provide?

## The Webfinger

First and foremost, this website provides a [Webfinger](https://webfinger.net/). Quoting the linked website, Webfinger is "a way to attach information to an email address, or other online resource". This is probably one of the most well-known resources that this website provides and is one of the reminiscent features from when I used to have ActivityPub.

```console
$ curl https://hacdias.com/.well-known/webfinger?resource=acct:hacdias@hacdias.com

{
  "subject": "acct:hacdias@hacdias.com",
  "aliases": [
    "https://hacdias.com"
  ],
  "links": [
    {
      "href": "https://hacdias.com",
      "rel": "http://webfinger.net/rel/profile-page",
      "type": "text/html"
    }
  ]
}
```

Not the most interesting, potentially not useful at all considering I don't have ActivityPub. Maybe if I added more links and also allowed it to work with my e-mail address instead?

## The Avatar

Similarly to Tim, I was also inspired by Jim's posts about well-known resources. Maybe not by order, but at some point I implemented the [avatar resource](https://blog.jim-nielsen.com/2023/well-known-avatar/). This resource is available at [hacdias.com/.well-known/avatar](/.well-known/avatar).

Not only do I provide my profile picture, but I also provide an optional argument `?size=`. By default `size=512`, but you can choose from 256, 512, 1024 and 2048. You may wonder how useful this is. I also do. I think that if this became some sort of standard and you could use your domain as your canonical identity online everywhere, then it would have the potential to be extremely useful.

## The Links

I also have the [external links resource](https://blog.jim-nielsen.com/2022/well-known-links-resource/) available at [hacdias.com/.well-known/links](/.well-known/links). With this one, you can filter by domain using the `?domain=` query argument. Try it. I also added a somewhat hidden page that is not linked anywhere else where you can visualize the [external links](/about/external-links/) per domain.

Both the links and the avatar well-known resources are backed by static files on disk. The avatar is basically a rewrite, while the links I automatically regenerate every night using [this code](https://github.com/hacdias/eagle/blob/47bb9a2201f08c729d26ca3e7cb6d05bcbb8f418/core/links.go).

---

Well, that was it. As of now, this is just something "fun to have" and not necessarily very useful, except perhaps for the avatar. Sometimes I find myself trying to find my profile picture for some service and it's very nice to have a very easy way to access it in multiple sizes.

Now, I recommend you go read Jim's multiple posts on well-known resources, as well as Tim's!
