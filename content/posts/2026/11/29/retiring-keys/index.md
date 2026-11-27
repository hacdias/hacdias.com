---
title: "Retiring a Key Isn't Destroying It"
date: 2026-11-29T09:00:00+01:00
categories:
  - writings
tags:
  - work
  - security
  - programming
  - infrastructure
---

Recently, I added support for keys stored in an <abbr title="Hardware Security Module">HSM</abbr> or a vault at work. Before that, we only had software keys, encrypted at rest in our database. With an HSM, costs are higher, which means that properly retiring and destroying a key when it is no longer necessary becomes much more important.

<!--more-->

There are many advantages to using an HSM or a vault. Firstly, the key never leaves the backend: we only send the data to sign, it signs the data, and we get the signed version. Secondly, customers issuing official credentials need an HSM to meet higher security standards, and on-premise customers want their keys in their own HSM or vault. Signing is easy: you just integrate with the backend's API and you get the data. The interesting part is managing the end of a key's life.

And the end of a key's life is not one step, but two: retiring the key, which happens immediately and can be undone, and destroying it, which happens later and is permanent.

## When Can You Retire a Key?

This brings an interesting question: when is it safe to retire a key? The safe answer is once every certificate it backs is either revoked or expired. In that case, anything that certificate has ever signed is also either revoked or expired by default. Note that the certificate never signs credentials that have a longer validity than the certificate itself, so that edge case doesn't happen.

There is still an edge case though: certificates you can't revoke yourself. An imported certificate (via a <abbr title="Certificate Signing Request">CSR</abbr>) can only be revoked by its issuer, while the key backing the certificate's request is ours. In that case, we provide an explicit early release, which marks the key as no longer needed even though the certificate may still be valid. Otherwise, the key would be held -- and billed -- forever.

## Retiring Is Not Destroying

Now we get into the moment where you retire -- not destroy -- the key. A retired key stops signing immediately and any other action that it was scheduled to do expires immediately. The material of the key, however, is only destroyed after a grace period (e.g. 30 days), so that it can be undone, since mistakes happen.

That's the reason to keep them apart: deciding that a key is no longer needed is something you can get wrong, but destroying it is the one step you can't take back.

## Enforcing the Grace Period

The grace period only protects the key if something other than our own code enforces it. Initially, I had configured Google Cloud KMS keys to use Google's 24-hour minimum destroy window. With that window, a stray destroy call on day 1 would remove the key on day 2. So for 29 of 30 days, only our check stopped a retired key from being destroyed.

Later, talking to coworkers, we decided to let the backend enforce the grace period as long as possible. Keys are now created with a destroy window equal to the grace period when the backend supports it. OpenBao, for example, has no backend-enforced limit, so, in that case, our check is the only protection in place.

Having the backend enforce the grace period as long as possible is defense in depth against application bugs, and someone changing things in the backend's own dashboard. The code was right, but the code was the only thing protecting the key. Now the backend adds a second protection.

## The Race: Cancelling and Destroying

The last step is when a key goes from retired to destroyed, and that step must be one-way. There is a small race here: someone may cancel the destruction at the same moment the key is being destroyed. If we don't handle it with care, the cancel could end up succeeding in our database while the destroy request is already on its way to the backend. That'd leave a key that our database thinks exists, but that is actually gone.

To prevent this, we "claim" the key before destroying, and a cancel is refused once it is claimed. Either the cancel wins and the key is never destroyed, or the destroy wins and the cancel fails. The claim is taken before the request because some backends, like OpenBao, destroy on request, so there's no window to undo it afterwards.

---

The general lesson is that deleting a key is where the most risk is, so make it slow and undoable, and have multiple layers that can protect against errors.
