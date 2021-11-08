---
dataId: 6960692f16d09c8d2b92713e455db7eca52162e48d3b258ab62be1ea990bde34
date: 2021-11-08T17:26:54.126016441Z
replyTo:
  url: https://aaronparecki.com/2017/02/25/9/day-67-image-alt-text
  name: 'Day 67: Adding Image Alt Text in Quill #100DaysOfIndieWeb'
  content: 'With Quill''s new image uploading UI, I was able to easily add a form
    field for specifying image alt text. This is a relatively new feature of Micropub,
    added thanks to a review by the W3C accessibility group. When specifying alt text
    for an uploaded photo, the request is then sent as JSON format which will look
    like the below: { "type": "h-entry", "properties": { "content": "Example post
    with an image", "photo": { "value": "http://example.com/photo.jpg", "alt": "a
    photo of a globe" } } } The Micropub endpoint can then store the alt text along
    with the photo, and display it in the page. Please let me know if you end up adding
    support for image alt text to your Micropub endpoint!'
  date: 2017-02-25T12:18:40-08:00
  author:
    name: Aaron Parecki
    url: https://aaronparecki.com/
    photo: https://aaronparecki.com/images/profile.jpg
---

Is this not a feature anymore?
