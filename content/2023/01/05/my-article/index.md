---
title: Debuging YubiKey signing slowness?
deleted: true
section:
- articles
- home
createdWith: https://hacdias.com/
taxonomies:
  tags:
  - example
location:
  latitude: 51.44585
  longitude: 5.46168
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
---

export GIT_TRACE=true

git commit --verbose --allow-empty -m "test"
22:21:20.500259 git.c:460               trace: built-in: git commit --verbose --allow-empty -m test
22:21:20.503662 run-command.c:655       trace: run_command: ssh-keygen -Y sign -n git -f /Users/hacdias/.ssh/my_key /var/folders/m0/nmy7cymd1qndzj6bjt3zdd5c0000gn/T//.git_signing_buffer_tmp1OZzDF
22:21:27.382124 run-command.c:655       trace: run_command: git maintenance run --auto --no-quiet
22:21:27.395921 git.c:460               trace: built-in: git maintenance run --auto --no-quiet
[main 3f74da4] test


ssh-keygen -Y sign -n git -f /Users/hacdias/.ssh/my_key ./hello.txt
