---
title: Search
noIndex: true
---

<no-eagle-page>
  <div class='box'>
    ⚠️ This page is only functional when using <a href='https://github.com/hacdias/eagle' rel='noopener noreferrer'>Eagle</a>.
  </div>
</no-eagle-page>

<eagle-page class='dn'>
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
    <eagle-search-pagination>
      <nav style="display: flex;">
        <a class="eagle-prev" href="<eagle>" style="margin-right: auto;">← Previous</a>
        <a class="eagle-next" href="<eagle>" style="margin-left: auto;">Next →</a>
      </nav>
    </eagle-search-pagination>
  </eagle-search-results>
</eagle-page>
