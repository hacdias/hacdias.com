---
title: The Day I ”Hacked” My School’s Library Computers
date: 2023-03-26T14:53:29.237893399+02:00
tags:
- story-time
---

I haven't written a single article this month. However, I've thought about doing so quite a few times. Despite that, none of the articles I have in my drafts section felt exciting enough to complete. But today I was talking to a friend and I remembered this story I've told a few friends of mine. It's the story of the time I "hacked" my school's library computers. Hacked... with quotes.

<!--more-->

<style>
  :root,
  :root.dark {
    --c-h: 212;
    --c-s: 52%;
    --c-l: 48%;
  }

  @media screen and (min-width: 53.001rem) {
  body {
    background: var(--c) url(https://cdn.hacdias.com/img/2000/9f501833808d267d595424bc989eeb6227c29b467b232aefe06554c054a31ea8.jpeg);
    background-attachment: fixed;
    background-size: cover;
  }

  #navbar {
    border-radius: 0;
  }
}
</style>

This story brings us back when I still lived in an extremely small town and had to travel 40 km roundtrip every day, for eight years, just to go to school. I was probably around 13 or 14 and, for some reason, I was interested in simulating the infamous Blue Screen of Death (BSOD) from Windows. Specifically, the Windows 9x styled one.

![Modern Simulation of Windows 95 BSOD](cdn:/a16e74e3834cfd712ccf540f6009c0850d7f116723169875f2a9aaa9231f1208?class=fw+pixelated)

So I decided to open Visual Studio - not Visual Studio Code - and create a Win32 project. I started this project, I think, by just simulating the BSOD. It took me some time to figure out how to make the screen look full screen, as well as centre the letters in the middle. After some time, I definitely figured out how to do it.

Executing this program would open a full screen window where you would have a blue screen with some gibberish text saying that there has been a problem with Windows and that the computer had to be restarted. For some reason, I decided not to end there.

I kept going and decided to add two other fun features: make the computer beep 🔔 and the cursor 🐭 go wild. Now, we have an executable that, upon launching, makes the computer play some random beeps and the cursor move randomly.

```cpp
int curX, curY;
bool crazyMouse;
void CrazyMouse() {
	while (crazyMouse) {
		curX = rand() % (int)GetSystemMetrics(SM_CXSCREEN);
		curY = rand() % (int)GetSystemMetrics(SM_CYSCREEN);
		SetCursorPos(curX, curY);
	}
}
```

However, for some reason, I thought this was not enough to make it look real. To achieve that, I did one more thing: kill the `explorer.exe` process, which would make it harder for non-IT people to figure out what to do next. In addition, I also hid the cursor after it going wild.

Then, I made it such that the fake BSOD would only launch 30 minutes after the program started _and_ made it such that the the executable itself would copy itself to the startup folder of the computer. You can see where this is going.

Some days later - possibly the day after? - I executed the file in a computer in the library, then in two, then in three? We only had five computers and I know I didn't do it to all of them. What happens next is that after the computer launching, after 30 minutes, a fake BSOD would show up.

It is reasonably easy, for someone that knew a bit more about Windows, to "fix" it: just CTRL + SHIFT + ESC to open the Task Manager, kill the process and start `explorer.exe`. The computers were not broken per sea, but I was definitely the only one in the whole school who used the library computers that knew about this. 

Some time passes, and somehow no one finds it weird that I'm the only one able to use the computer that has "the virus". I think I even thought about trying to make it spread through the network, but thank - whatever entity might or not be out there - that I did not do it.

After a few weeks, or perhaps months, the IT teacher solves it. The simple way of solving it was to just delete the file from the startup folder. However, I was surprised to discover the IT teacher went to great lengths and completely formatted the computer. Maybe it was very convincing _fake_ virus - which perhaps it is depending on the definition of computer virus.

So here is the weird story of when I "hacked" the library computers of my school. Do I regret it? Yes, and no. On one hand, I know I should've not done it because it is not morally correct. On the other hand, it was still funny and I think that, as kids, we all do questionable things, and they sometimes make an arguably good story.

For some more context, the source code is available on [GitHub](https://github.com/hacdias/fake-bsod/blob/master/BSOD/main.cpp#L36). It is dated from 2016, but I think that's because I moved it from a different repository and at the time I did not know how to keep the commit history. Oopsie. Nowadays, I host a more modern, [web version](https://hacdias.com/minisites/bsod/index.html) of the BSOD. It's fun, it just doesn't take as much "control" of your computer as the other one did.
