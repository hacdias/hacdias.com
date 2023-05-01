---
title: Guestbook Admin
noIndex: true
layout: eagle
---

<style>
.guestbook-actions {
  display: flex;
  justify-content: flex-end;
}

.guestbook-actions > form:first-of-type {
  margin-right: 1rem;
}

.guestbook-actions > form:first-of-type button {
  background: red;
  border-color: red;
}
</style>

<eagle-guestbook-entries>
  <eagle-guestbook-entry>
    <div class='box'>
      <p>
        <strong>Name:</strong> <eagle-guestbook-name></eagle-guestbook-name><br>
        <strong>Website:</strong> <eagle-guestbook-website></eagle-guestbook-website><br>
        <strong>Date:</strong> <eagle-guestbook-date></eagle-guestbook-date><br>
        <strong>Content:</strong> <eagle-guestbook-content></eagle-guestbook-content>
      </p>
      <div class='guestbook-actions'>
        <form method=POST>
          <input type='hidden' name='id' value='' />
          <input type='hidden' name='action' value='delete' />
          <button style='width: 100%'>Delete</button>
        </form>
        <form method=POST>
          <input type='hidden' name='id' value='' />
          <input type='hidden' name='action' value='approve' />
          <button style='width: 100%'>Approve</button>
        </form>
      </div>
    </div>
  </eagle-guestbook-entry>
</eagle-guestbook-entries>
