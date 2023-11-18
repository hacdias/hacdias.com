---
title: New
noIndex: true
layout: eagle
---

<p>
  <strong>Archetypes:</strong>
  <eagle-archetype></eagle-archetype>
</p>

<form method='POST' class='block-form eagle-editor'>
  <input type='text' name='id' placeholder='Entry ID, e.g.: /2022/10/24/17h06m46s93' value='' />
  <textarea required name='content'></textarea>
  <div class='eagle-options'>
    <label><input type='checkbox' name='published' checked /> With Published Date</label>
  </div>
  <p><strong>Location:</strong></p>
  <input type='text' name='location' placeholder='Geo URI, or Check-in ID' />
  <button>Create</button>
</form>
