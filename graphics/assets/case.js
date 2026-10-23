/* Shared helpers for the Watershed case graphics.
   Each graphic is opened with ?case=01 … ?case=05 and reads its content from data.js. */
(function () {
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  /* "text{6,7}" → text with superscript source numbers, announced as "source 6, 7". */
  function cite(s) {
    return esc(s).replace(/\{([\d,]+)\}/g, function (_, nums) {
      var list = nums.split(",").join(", ");
      return '<sup class="cite"><span class="sr-only">source </span>' + list + "</sup>";
    });
  }
  function getCase() {
    var m = /[?&]case=(\d{2})/.exec(location.search);
    var key = m ? m[1] : "01";
    var data = (window.WATERSHED_CASES || {})[key];
    return data ? { key: key, data: data } : null;
  }
  function shown(item) { return !item.verify; }
  function missing(root) {
    root.innerHTML = '<p class="cite-note">Add <code>?case=01</code> to <code>?case=05</code> to the address to choose a case.</p>';
  }
  window.WS = { esc: esc, cite: cite, getCase: getCase, shown: shown, missing: missing };
})();
