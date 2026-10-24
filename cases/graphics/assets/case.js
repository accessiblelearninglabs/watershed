(function () {
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function cite(s) { return esc(s); }
  function getCase() {
    var m = /[?&]case=(\d{2})/.exec(location.search);
    var data = (window.WATERSHED_CASES || {})[m ? m[1] : "01"];
    return data ? { data: data } : null;
  }
  function shown() { return true; }
  function missing(root) { root.innerHTML = ""; }
  window.WS = { esc: esc, cite: cite, getCase: getCase, shown: shown, missing: missing };
})();
