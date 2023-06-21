---
title: Dashboard
noIndex: true
layout: eagle
---

<h2>Actions</h2>

<eagle-actions class='eagle-actions'>
  <eagle-action>
    <form method=POST>
      <input type='hidden' name='action' value='' />
      <button style='width: 100%'><action-name></action-name></button>
    </form>
  </eagle-action>
</eagle-actions>

<eagle-action-success>
  <div class='box'>✅ Success!</div>
</eagle-action-success>

<h2>Upload File</h2>

<form id='upload' method='post' class='block-form' enctype='multipart/form-data'>
  <input type='file' name='file' />
  <div class='eagle-options'>
    <label><input type='checkbox' name='preserve-filename' /> Preserve Filename</label>
  </div>
  <button>Upload</button>
</form>

<eagle-media-location>
  <pre class='eagle-pre'><eagle-media-location-value></eagle-media-location-value></pre>
</eagle-media-location>

<h2>Token</h2>

<form id='token' method='post' class='block-form'>
  <input type='hidden' name='token' value='true' />
  <input required type='url' name='client_id' placeholder='Client ID'>
  <input required type='text' name='scope' placeholder='Scope'>
  <select name='expiry'>
    <option value='' disabled selected hidden>Expiry</option>
    <option value='7'>1 Week</option>
    <option value='90'>3 Months</option>
    <option value='180'>6 Months</option>
    <option value='0'>Infinity</option>
  </select>
  <button>Submit</button>
</form>

<eagle-token>
  <pre class='eagle-pre'><eagle-token-value></eagle-token-value></pre>
</eagle-token>

<h2>Guestbook</h2>

<div class="box">🚧 The guestbook administration will be moved here.</div>
