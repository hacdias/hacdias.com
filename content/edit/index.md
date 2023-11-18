---
title: Edit
noIndex: true
layout: eagle
---

<form class='block-form'>
  <input type='text' name='id' disabled value='<eagle-value>' />
</form>

<details class='box'>
  <summary>Rename</summary>
  <p><small>Please write the new slug of the post.</small></p>
  <form method='post'>
    <input type='text' name='rename' placeholder='New ID' value='<eagle-value>' required />
    <button>Rename</button>
  </form>
</details>

<form method='post' class='block-form eagle-editor'>
  <textarea required name='content'>eagle-value</textarea>
  <div class='eagle-options'>
    <label><input type='checkbox' name='lastmod'/> Update Modification Date</label>
    <label><input type='checkbox' name='expire'/> Add Expiration Date</label>
  </div>
  <button>Update</button>
</form>
