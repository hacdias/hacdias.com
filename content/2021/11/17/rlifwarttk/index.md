---
date: 2021-11-17T08:09:37.825393702Z
expiryDate: 2023-06-21T09:01:38.570931+02:00
categories:
- notes
---

Yesterday I [mentioned](/2021/11/16/jmeqbzfusb) I was having some issues with [Quill] and [Teacup] and I hoped it was solved today, as Cloudflare is reporting [no issues](https://www.cloudflarestatus.com/). However, the same issue remains. If I try to upload a photo via Quill or Teacup, it fails saying that there's no location header. Looking at the debug logs, these are the headers:

```
HTTP/1.1 100 Continue

HTTP/1.1 201 Created
Date: Wed, 17 Nov 2021 07:55:57 GMT
Content-Length: 0
Connection: keep-alive
location: https://cdn.hacdias.com/media/1eb1c3bdf8c2ed0a7ed6e4324a49bfdb455c168d43e44372dccbc9913fd5485c.jpg
(... other headers ...)
```

The location is definitely there, and so is a wild `HTTP/1.1 100 Continue`. If I disable Cloudflare, it works. In both situations, the [Media Endpoint Proxy] works. POSTing through cURL also works flawlessly:

```
< HTTP/2 201
< date: Wed, 17 Nov 2021 08:04:25 GMT
< content-length: 0
< location: https://cdn.hacdias.com/media/e463d117e6a57c1f1e774510b166433c2de275d153dcf8cea07a61c14a493cbf.jpg
< (... other headers ...)
```

Digging a bit more, [Quill] and [Teacup] are hosted in California, USA, while the [Media Endpoint Proxy] is hosted in Germany. Even though Cloudflare doesn't indicate any issues, I wonder if the "re-routed" instances are causing this. Why is there a 100 Continue there? I could not find any information that links that header and Cloudflare, and I also don't really understand its existence at all.

[@aaronpk](https://aaronparecki.com/), I wonder if you've ever seen something similar in the past?

**Update**: I noticed cURL used HTTP 2.0, while Teacup and Quill clearly used HTTP 1.1. However, doing a cURL request with HTTP 1.1 still works and there's no wild 100 header.

[Quill]: https://quill.p3k.io/
[Teacup]: https://teacup.p3k.io/new
[Media Endpoint Proxy]: https://micropub-media-endpoint-proxy.netlify.app/
