# Watershed: overview graphics

Six interactive graphics for the Watershed overview page on andrearobin.com. Each file stands alone and shares one stylesheet.

| File | Section | Interaction |
|---|---|---|
| `01-the-one-problem.html` | The one problem | Each figure expands to show what it measures and what it does not |
| `02-the-map.html` | The map | Select a stage to see its place in the flow |
| `03-three-questions.html` | How each case is read | Switch between *What is* and *What could be* |
| `04-the-cases.html` | The cases | Open a case to see its ceiling and link |
| `05-theory-of-change.html` | Theory of change | Select a condition to see what it assumes |
| `06-measuring-contribution.html` | Measuring contribution | Expand each level; try the handover test |
| `index.html` | — | Links to all six |
| `EMBED.md` | — | Embed codes for the overview page |
| `assets/watershed.css` | — | Shared palette and type |

## Embedding

`EMBED.md` holds a ready-to-paste code for each graphic. Each frame resizes itself to its content as readers open sections or change screen width; if scripts are removed, the fixed heights in the codes apply.

The case links in `04-the-cases.html` open the case pages on andrearobin.com in the full window.

## Palette

Drawn from the range map on andrearobin.com.

| Token | Hex | Use | Contrast on white |
|---|---|---|---|
| `--navy` | `#436486` | Primary, links, small text | 6.17:1 |
| `--navy-deep` | `#2c3f55` | Headings, dark panels | 10.77:1 |
| `--blue` | `#5685b3` | Large numerals and fills only | 3.89:1 |
| `--slate` | `#728399` | Large numerals and fills only | 3.87:1 |
| `--ink` | `#26333f` | Body text | 12.9:1 |
| `--muted` | `#4e5f74` | Secondary text | 6.54:1 |

Blue and slate appear only at large-text sizes (WCAG 2.2 AA requires 3:1 there). All small text meets 4.5:1.

## Accessibility

- All controls are native buttons, checkboxes or links, reachable by keyboard, with visible focus and 44px targets.
- Selected states use `aria-pressed` or `aria-expanded`. Changing panels are announced with `aria-live`.
- Layouts reflow to a single column at phone width. Motion is removed when the reader prefers reduced motion.
- Font: Asap, from Google Fonts, with system fallbacks.

## Sources

Cited in `01-the-one-problem.html`:

1. McGlynn, E. A., et al. (2003). The quality of health care delivered to adults in the United States. *New England Journal of Medicine, 348*(26), 2635–2645. https://doi.org/10.1056/NEJMsa022615
2. Thornicroft, G., et al. (2017). Undertreatment of people with major depressive disorder in 21 countries. *British Journal of Psychiatry, 210*(2), 119–124. https://doi.org/10.1192/bjp.bp.116.188078
3. Morris, Z. S., Wooding, S., & Grant, J. (2011). The answer is 17 years, what is the question: Understanding time lags in translational research. *Journal of the Royal Society of Medicine, 104*(12), 510–520. https://doi.org/10.1258/jrsm.2011.110180

The other graphics describe the page's framework and method and make no factual claims requiring a source.
