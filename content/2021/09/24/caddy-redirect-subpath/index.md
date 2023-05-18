---
date: 2021-09-24T06:14:37.821138594Z
lastmod: 2021-09-24T06:16:56.174556428Z
tags:
- meta
categories:
- notes
---

I just wanted to redirect everything from `/all*` to `/stream*` - finally decided to do so -, but somehow I managed not to figure out how to do that with Caddy webserver. I ended up manually redirecting the 3 main URLs:

```
redir /all /stream permanent
redir /all/feed.xml /stream/feed.xml permanent
redir /all/feed.json /stream/feed.json permanent
```

I tried many `redir` combinations and none worked. I can make the wildcard matching work with `/all*` but then... what do I redirect it to? I tried different thing and none worked. If you use Caddy, and have some minutes to spare, how would you configure this redirection?
