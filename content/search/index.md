---
title: Search
layout: eagle
noIndex: true
---

<form id='search-form' class='inline-form' style="margin: 1rem 0">
  <input aria-label="Search terms" required type='text' name='query' placeholder="Search…" id="eagle-search-input" />
  <button/>Go</button>
</form>

<eagle-no-search-results class='dn'>
  <div class='box'>
    🤔 Searched and searched, but nothing could be found!
  </div>
</eagle-no-search-results>

<eagle-search-results>
  <div class='box'>
    ℹ️ You haven't searched for anything yet!
  </div>
  <eagle-search-result class='dn'>
    <div class='card'>
      <header><a href='' class='nl entry-link'><h3><entry-title></entry-title></h3></a></header>
      <div class='copy'><p><entry-content></entry-content></p></div>
      <a href='' class='entry-link more'>Read More →</a>
    </div>
  </eagle-search-result>
  <eagle-search-pagination class='dn'>
    <nav class="pagination">
      <a aria-label="Previous" href="<eagle>" class="page-link eagle-prev" role="button">
        <span aria-hidden="true">&laquo; Previous</span>
      </a>
      <a aria-label="Next" href="<eagle>" class="page-link eagle-next" role="button">
        <span aria-hidden="true">Next &raquo;</span>
      </a>
    </nav>
  </eagle-search-pagination>
</eagle-search-results>
