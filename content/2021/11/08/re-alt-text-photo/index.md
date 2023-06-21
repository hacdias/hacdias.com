---
description: Replied to a post on aaronparecki.com
date: 2021-11-08T17:26:54.126016441Z
noIndex: true
categories:
- notes
context:
  name: Aaron Parecki
  url: https://aaronparecki.com/2017/02/25/9/day-67-image-alt-text
  content: 'With Quill''s new image uploading UI, I was able to easily add a form
    field for specifying image alt text. This is a relatively new feature of Micropub,
    added thanks to a review by the W3C accessibility group. When specifying alt text
    for an uploaded photo, the request is then sent as JSON format which will look
    like the below: { "type": "h-entry", "properties": { "content": "Example post
    with an image", "photo": { "value": "http://example.com/photo.jpg", "alt": "a
    photo of a globe" } } } The Micropub endpoint can then store the alt text along
    with the photo, and display it in the page. Please let me know if you end up adding
    support for image alt text to your Micropub endpoint!'
  published: 2017-02-25T12:18:40-08:00
reply: https://aaronparecki.com/2017/02/25/9/day-67-image-alt-text
---

Is this not a feature anymore?
