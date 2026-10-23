# Watershed: case graphics

Four interactive graphics shared by the five case pages on andrearobin.com.

| File | Section on each case page | Interaction |
|---|---|---|
| `three-questions.html` | The three questions | Switch between *What is* (sourced findings) and *What could be* |
| `reading-the-figures.html` | Reading the figures | Open a figure to see what it measures and what it does not show |
| `theory-of-change.html` | Theory of change | Select a link to see what it assumes; select the weakest link for why |
| `effort.html` | Where effort counts for less, and for more | Reveal what would make each point count for more |
| `data.js` | — | All case content, generated from the case pages |
| `build-data.py` | — | Rebuilds `data.js` from `../*.md` |
| `assets/` | — | Shared styles and helpers |
| `EMBED.md` | — | Embed codes for all 20 placements |

## Choosing a case

Add `?case=01` to `?case=05` to any graphic's address. Without it, a graphic shows a short note asking for one.

## Updating content

The case pages (`../01-…md` to `../05-…md`) are the source. After editing one, run `python3 build-data.py` in this folder and upload the new `data.js`. You can also edit `data.js` by hand.

## Items still being checked

Any line marked `[verify]` on a case page is carried with `"verify": true` and is hidden in the graphics. Once a source is checked, remove the marker from the case page and rebuild, or set `"verify": false` in `data.js`. A question with every finding still being checked shows "The evidence for this question is being checked."

## Accessibility

Native buttons and disclosure controls, keyboard reachable with visible focus and 44px targets; selected and expanded states use `aria-pressed` and `aria-expanded`; changing panels are announced. Source numbers are announced as "source n". Layouts reflow to one column on phones. Colours and type match the overview graphics.
