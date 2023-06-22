---
title: Change to Custom Directory Alias With Completions in Zsh
date: 2021-05-30T10:23:57.3713559Z
tags:
- terminal
- tip
- software
---

For quite some time, I've had a helper function on my Zsh config to quickly be able to `cd` to specific directories. 

<!--more-->

It looked something like this:


```zsh
function cdc() {
  cd "$HOME/Code/$1"
}
```

So simply typing `cdc` or even `cdc hacdias/hacdias.com` would work perfectly. But there was a problem: I was seeing myself just typing `cdc`, pressing enter, and then "cding" to the right directory. This mostly happened because there was no autocomplete with this function.

Yesterday I decided to investigate how to enable autocomplete for this function and it's actually pretty straightforward. To do so, you need to implement a definition function. It is standard to call it `_{name of alias}`. Hence, in our case, it would be `_cdc`.

```zsh
function cdc() {
  cd "$HOME/Code/$1"
}

function _cdc() {
  ((CURRENT == 2)) &&
  _files -/ -W "$HOME/Code"
}

compdef _cdc cdc
```

On the completion definition function `_cdc` we use `((CURRENT == 2))` to make sure we only give definitions for the directory part of the command. `_files` is a builtin for auto completing paths.

Now, if you restart your shell, you can just type `cdc` and then press tab. You'll now see the completion suggestions!

## Bonus code

If you have more than one `cd` subdirectory alias like me, instead of manually defining the functions and their completions for all aliases, you can create an associative array and a simple for loop:

```zsh
typeset -A cd_aliases
cd_aliases=(
  [cdc]="$HOME/Code"
  [cdd]="$HOME/Documents"
)

for k in "${(@k)cd_aliases}"; do
  function $k() {
    cd "$cd_aliases[$0]/$1"
  }

  function _$k() {
    ((CURRENT == 2)) && _files -/ -W $cd_aliases[${0:1}]
  }

  compdef _$k $k
done
```

I hope this can be as useful for you as it was for me!
