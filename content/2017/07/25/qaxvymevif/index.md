---
description: Replied to a post on www.reddit.com
published: 2017-07-25T07:04:02Z
section:
- replies
properties:
  in-reply-to: https://www.reddit.com/r/golang/comments/6pa5wg/file_manager_app_that_can_be_used_as_a_standalone/dkod0b5/
  syndication:
  - https://www.reddit.com/r/golang/comments/6pa5wg/file_manager_app_that_can_be_used_as_a_standalone/dkophej/
---

Hello epiris! Thanks for your reply :)

1. So, the function 'randomString' is used to create the variable [key](https://github.com/hacdias/filemanager/blob/master/filemanager.go#L30) which is used to sign JWT tokens. It is generated only in the first time when there is no database file. 
2. The user is allowed by default to access every directory, so it is correct. That function first checks the rules and then returns true if no rule matched.
3. User.FileSystem is of type webdav.Dir which, I think, does that check in its own [code](https://github.com/golang/net/blob/master/webdav/file.go#L58) so I won't need to repeat it. I have tested doing requests for those kind of paths (../../) and it didn't work.

Correct me if I'm mistaken :) And tell me if you think I should improve something, either about the security or something else. I still have to do tests: I haven't seem much how to test this kind of functions and http handlers but I know it's possible. I have to do that.
