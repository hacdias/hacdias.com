---
title: From Cinema Ticket to Website with MCP
date: 2026-10-17T08:30:00+02:00
categories:
  - writings
tags:
  - personal website
  - indieweb
  - artificial intelligence
  - go
  - tracking
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3my2hokamk2wz
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3my2hokamk2wz
  - https://fosstodon.org/@hacdias/117454838488695692
thumbnail: image:2026-10-17-mcp-1
---

Yesterday I added an MCP server to Eagle, my website's Go backend. Now I can manage the [logs](/more/) on my website much more easily: I can just snap a picture of a cinema ticket and ask Claude to add it to my website.

<!--more-->

![Logging Film From Ticket](image:2026-10-17-mcp-2)
{width="1326" height="2742" class="right"}

The main driver was me wanting to try out how <abbr title="Model Context Protocol">MCP</abbr> servers worked and get some hands-on experience with AI agents and how they interact with APIs. My usual problem with these sorts of challenges is finding something that is actually useful. I like learning while doing something useful, it helps with retention.

Until yesterday, when I wanted to log a movie, series, live performance, or book reading, I would usually go to the web editor I have for my website and update the file there. It's just a `<textarea>` with absolutely no syntax highlighting. I usually use it for quick edits on the go. At home, I'd probably just update it locally and push it.

The idea of managing the logs with an AI chat actually seemed interesting: just snap a photo of a ticket or book, type down the rating, and let it do its job. Definitely easier and more frictionless than editing a data file on the go without any syntax highlighting.

To achieve this, I had to implement a few actions: get, add, and edit log entries. Other things like trips and the coffee page I decided to keep out for now, since they work differently and synchronize with other services. It seemed reasonably straightforward, so I started it!

## Starting It Out

When I had the use case in hand, I quickly looked up online which library to use, and immediately found the official [Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk), which was reasonably easy to use. I first quickly looked through a few documentation pages to see how it worked and how to plug it into an HTTP server, *et voilà*.

I started by implementing a quick *search entries* endpoint just to see if it all worked well, still unauthenticated. I used the [MCP Inspector](https://modelcontextprotocol.io/docs/2026-07-28/tools/inspector) to try it out initially, and have a better feeling of how the JSON Schema played out with the interface and everything.

## Authenticating the Endpoint

MCP authorization is OAuth 2.1 with PKCE, which is perfect for me. Eagle already implements IndieAuth, which is based on OAuth 2.0, also with PKCE, so most of the pieces were already in place. I just had to fully implement the specifics about OAuth 2.1 and other small things that were necessary for the MCP.

The first one was adding a new dedicated scope, because I wanted to be able to see which tokens have been issued, and what they can do.

The second thing was the discovery mechanism. Eagle didn't serve [protected resource metadata](https://www.rfc-editor.org/rfc/rfc9728) until now, so this is something I had to add. This was also straightforward, since it just means serving a JSON with three fields and the SDK already generates this for you.

While I was implementing authentication, it wasn't very clear to me which mechanism was the right one. The default on the MCP Inspector was [Dynamic Client Registration](https://www.rfc-editor.org/rfc/rfc7591) (DCR), which I did not support. And I had already implemented stateless DCR when I read that CIMD is actually the recommended way to go since the last MCP spec revision.

[Client ID Metadata Documents](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/) (CIMD) are basically IndieAuth: the client ID is a URL that hosts its own metadata. It was quite a full-circle moment, so I reverted the DCR changes. Anyways, Claude was still not detecting CIMD, and after fiddling a bit with the configuration I realized I had to add `token_endpoint_auth_methods_supported: ["none"]` to the metadata. If you leave it out, it implies the server only supports `client_secret_basic`.

The largest piece of work was actually updating my IndieAuth library to include full redirect URI discovery, which CIMD needs. Up until now I hadn't found a reason to fully implement this since I hadn't come across a use case where I needed this for myself, but there was indeed a `TODO` on the code that I had left there at the time. With this, `indielib@0.6.0` has [been released](https://github.com/hacdias/indielib/releases/tag/v0.6.0)!

After implementing and massaging all the rough edges, it started working. It only started working in Claude after a few minutes, so I assume they cache the authorization server’s metadata because it started automagically working.

## Designing the Tools

I went for a strict version of the tools. If the model is reading a ticket photo, I want it to fail if something isn't clear or some piece of information is missing.

When I started adding some tools, the MCP Inspector started warning about a few "issues" with the JSON Schema of the input and output. The JSON Schema was, in itself, valid. The catch was the arrays. In Go, an array -- pardon my French, slice --, can be `nil`. When you convert this to JSON, it becomes `null` unless you tell it to omit empty values, so the library that is used to generate the JSON Schema made this a `null` or `array`, which apparently some clients don't like.

To solve this, I started tweaking the generated schemas in code instead of relying only on the struct tags. Removing the `null` case from the slices is still on my list, but the same approach ended up being useful anyway, because I also wanted to add some constraints to some fields, such as the rating being an integer between 1 and 10.

I also use the field descriptions as instructions for places where the format can't be as easily expressed in JSON Schema, such as the location of performances being in the shape of `Venue, City, CC`.

## Things That Could Be Improved

Editing existing logs isn't the main use case, and I don't expect to use it often, but I wanted to have it available. These logs, as they stand, are just backed by an array in a JSON file:

```json
[
  {
    "author": "S10",
    "rating": 7,
    "date": "2026-08-29T00:00:00Z",
    "location": "Ketelhuisplein, Eindhoven, NL",
    "category": "concert"
  },
  {
    "name": "Soldaat van Oranje",
    "rating": 8,
    "date": "2026-06-13T19:30:00+02:00",
    "location": "Theater Hangaar, Katwijk, NL",
    "category": "musical"
  },
  {
    "name": "FKA Twigs",
    "rating": 7,
    "date": "2026-06-06T20:00:00+02:00",
    "location": "Ziggo Dome, Amsterdam, NL",
    "category": "concert"
  },
  // ...
```

That means that there isn't a great way to identify a single entry. There isn't a unique identifier. I decided that, for now, an entry will be identified by its current values. This depends a bit on the type of logs. For the movies it's the name and the date, while for the TV shows, the season also plays a role.

I'm not fully happy with it, but the alternatives seemed worse. Using the index of the element in the array was a no-go. Potential edits mid-flight could cause changes in the ordering, and I didn't want to get in that situation. And adding IDs would just add a lot of bloat to what's a simple file.

Since I don't plan on using the edit function that often, I don't mind. This also means that some old entries can't be edited, since they don't have a date attached to them, for example. But that's fine: the main use case is still just adding new data, not changing existing data.

Something else that could be improved are the log getters, since I'm always returning everything. That means that a lot of tokens can be easily consumed if I'm not careful. But, for now, just like editing, I don't expect this to be necessary very often. In the future, I may add date filters. This adds a little CPU cost on the Eagle processing side while reducing the cost at the model side.

![Eagle's MCP Server Tools List in Claude](image:2026-10-17-mcp-1)
{width="1736" height="1554"}

All in all, it was quite straightforward - how often did I type this in this post? - to implement this MCP server. It's just an API with some bells and whistles. Almost everything is standard: OAuth authentication, JSON schemas, HTTP. No surprises there.

The main thing that I learned is that the JSON Schema and that the descriptions of the fields need are clear enough for the model to make the right decisions. I was quite surprised and happy on how CIMD really matched what I had already implemented for IndieAuth. It's always fun when two different worlds collide!
