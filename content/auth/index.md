---
title: Authorization
noIndex: true
layout: eagle
---

<style>
.copy ol {
  list-style: none;
  padding-left: 1rem;
}

.copy ol input {
  margin-right: 0.5rem;
}

.copy ol label {
  text-transform: capitalize;
}

#submit  {
  display: block;
  width: 100%;
  margin: 0.5rem 0;
}
</style>

<script>
function addScope() {
  const scope = window.prompt('Which scope?')
  if (!scope) return
  document.getElementById('scopes-list').innerHTML += (
    `<li><label><input type="checkbox" name="scopes" value="${scope}" checked>${scope}</label></li>`
  )
}
</script>

<form method='post' action='/auth/accept'>
  <p>You received an authorization request from the following client:</p>
  <ul>
    <li><strong>Client:</strong> <code><eagle-client-id></eagle-client-id></code></li>
    <li><strong>Redirect:</strong> <code><eagle-redirect-uri></eagle-redirect-uri></code></li>
  </ul>

  <eagle-no-pkce>
    <div class="box">
      <p><strong>⚠️ The client is not using PKCE.</strong></p>
    </div>
  </eagle-no-pkce>

  <eagle-scopes>
    <p>This app requests the following scopes. You can choose which scopes will be granted.</p>
    <ol id="scopes-list">
      <eagle-scope><li><label><input type="checkbox" name="scopes" value="<eagle-value>" checked> <eagle-scope-value></eagle-scope-value></label></li></eagle-scope>
      <li><a onclick="javascript:addScope();">Add Scope</a></li>
    </ol>
  </eagle-scopes>

  <p>How long should the authorization last?<p>
  <ol>
    <li><label><input type="radio" name="expiry" value="7" checked> 1 Week</label></li>
    <li><label><input type="radio" name="expiry" value="90"> 3 Months</label></li>
    <li><label><input type="radio" name="expiry" value="180"> 6 Months</label></li>
    <li><label><input type="radio" name="expiry" value="0"> Infinity</label></li>
  </ol>
  <input type="hidden" name="response_type" value="code">
  <input type="hidden" name="redirect_uri" value="<eagle-value>">
  <input type="hidden" name="client_id" value="<eagle-value>">
  <input type="hidden" name="state" value="<eagle-value>">
  <input type="hidden" name="code_challenge" value="<eagle-value>">
  <input type="hidden" name="code_challenge_method" value="<eagle-value>">
  <button id=submit>Accept</button>
</form>

