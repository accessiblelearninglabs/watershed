# Watershed: embed codes

One code per section of the overview page. Paste each into an HTML or embed block directly below that section's heading and description, which are written on the Format page itself.

Each code is self-contained: the iframe, plus a short script that lets the frame resize itself as readers open sections or view on a phone. The script runs only once, however many codes are on the page.

If the site builder removes scripts, the iframes still work at the fixed heights given; on phones their content scrolls inside the frame.

## The one problem — replaces the three figures

```html
<iframe class="watershed-frame" src="https://accessiblelearninglabs.github.io/watershed/overview/01-the-one-problem.html" title="Watershed: the one problem" width="100%" height="520" style="border:0;display:block;width:100%" loading="lazy"></iframe>
<script>
if (!window.watershedResize) {
  window.watershedResize = true;
  window.addEventListener("message", function (e) {
    var d = e.data;
    if (!d || typeof d.height !== "number" || !d.watershedFrame) return;
    document.querySelectorAll("iframe.watershed-frame").forEach(function (f) {
      if (f.contentWindow === e.source) f.style.height = d.height + "px";
    });
  });
}
</script>
```

## The map — replaces the five tributaries diagram

```html
<iframe class="watershed-frame" src="https://accessiblelearninglabs.github.io/watershed/overview/02-the-map.html" title="Watershed: the map" width="100%" height="470" style="border:0;display:block;width:100%" loading="lazy"></iframe>
<script>
if (!window.watershedResize) {
  window.watershedResize = true;
  window.addEventListener("message", function (e) {
    var d = e.data;
    if (!d || typeof d.height !== "number" || !d.watershedFrame) return;
    document.querySelectorAll("iframe.watershed-frame").forEach(function (f) {
      if (f.contentWindow === e.source) f.style.height = d.height + "px";
    });
  });
}
</script>
```

## How each case is read — replaces the three questions

```html
<iframe class="watershed-frame" src="https://accessiblelearninglabs.github.io/watershed/overview/03-three-questions.html" title="Watershed: three questions" width="100%" height="230" style="border:0;display:block;width:100%" loading="lazy"></iframe>
<script>
if (!window.watershedResize) {
  window.watershedResize = true;
  window.addEventListener("message", function (e) {
    var d = e.data;
    if (!d || typeof d.height !== "number" || !d.watershedFrame) return;
    document.querySelectorAll("iframe.watershed-frame").forEach(function (f) {
      if (f.contentWindow === e.source) f.style.height = d.height + "px";
    });
  });
}
</script>
```

## The cases — replaces the five case cards

```html
<iframe class="watershed-frame" src="https://accessiblelearninglabs.github.io/watershed/overview/04-the-cases.html" title="Watershed: the cases" width="100%" height="740" style="border:0;display:block;width:100%" loading="lazy"></iframe>
<script>
if (!window.watershedResize) {
  window.watershedResize = true;
  window.addEventListener("message", function (e) {
    var d = e.data;
    if (!d || typeof d.height !== "number" || !d.watershedFrame) return;
    document.querySelectorAll("iframe.watershed-frame").forEach(function (f) {
      if (f.contentWindow === e.source) f.style.height = d.height + "px";
    });
  });
}
</script>
```

## Theory of change — replaces the If / Then / And table

```html
<iframe class="watershed-frame" src="https://accessiblelearninglabs.github.io/watershed/overview/05-theory-of-change.html" title="Watershed: theory of change" width="100%" height="750" style="border:0;display:block;width:100%" loading="lazy"></iframe>
<script>
if (!window.watershedResize) {
  window.watershedResize = true;
  window.addEventListener("message", function (e) {
    var d = e.data;
    if (!d || typeof d.height !== "number" || !d.watershedFrame) return;
    document.querySelectorAll("iframe.watershed-frame").forEach(function (f) {
      if (f.contentWindow === e.source) f.style.height = d.height + "px";
    });
  });
}
</script>
```

## My practice — replaces the six levels and the handover test

```html
<iframe class="watershed-frame" src="https://accessiblelearninglabs.github.io/watershed/overview/06-measuring-contribution.html" title="Watershed: measuring contribution" width="100%" height="650" style="border:0;display:block;width:100%" loading="lazy"></iframe>
<script>
if (!window.watershedResize) {
  window.watershedResize = true;
  window.addEventListener("message", function (e) {
    var d = e.data;
    if (!d || typeof d.height !== "number" || !d.watershedFrame) return;
    document.querySelectorAll("iframe.watershed-frame").forEach(function (f) {
      if (f.contentWindow === e.source) f.style.height = d.height + "px";
    });
  });
}
</script>
```
