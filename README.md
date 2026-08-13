# InsightsTap — Email Signatures

Four approved email signature designs, plus a browser tool that lets anyone
build their own without touching HTML.

## For employees

Open **`signature-maker.html`** — double-click it, or use the hosted link if
one has been set up. It runs entirely in the browser; nothing to install and
no internet needed.

1. Type your name, designation and email
2. Pick one of the four designs — all are approved, any is fine
3. Click **Copy signature**, then paste into your email settings

Paste instructions for Gmail, Outlook and Apple Mail are printed on the page.
Phone, website and LinkedIn are optional — leave them blank and those lines
disappear.

Please don't change the colours, fonts or sizes, so everyone's match.

## The four designs

| | Design | Size | Best for |
|---|---|---|---|
| 01 | **Crest** | 320 × 176 | Teal masthead over a bordered body. Letterhead feel. |
| 02 | **Ribbon** | 320 × 139 | Name leads; a solid teal bar seals the bottom. |
| 03 | **Split** | 342 × 134 | White content against a full-height teal panel. |
| 04 | **Quiet** | 310 × 96 | Minimal — no card, no colour block, no tagline. |

## Folder structure

```
signature-maker.html     the tool — self-contained, all designs + logos embedded
templates/               raw email HTML, one file per design, hand-editable
assets/                  logo marks as PNG (only needed for hosted-logo mode)
logo/                    original source artwork
build/                   generation scripts — see below
```

## Notes for whoever maintains this

**Everything regenerates from `build/signatures.mjs`.** That file holds the
four designs and a `Z` scale block containing every type size and table width,
so proportions stay consistent across all four.

```bash
node build/render-templates.mjs   # rebuild templates/
node build/pick.mjs               # rebuild the design review sheet
```

After changing a design, `signature-maker.html` must also be rebuilt — it
inlines the same code so it can run offline.

**Constraints these designs work under**, all deliberate:

- Nested tables with inline styles only. No `<style>` blocks, no flexbox, no
  grid, no `border-radius`. Outlook renders email through Word and breaks on
  all of them.
- Brand teal `#0DCFCF` is **graphics only** — it scores 1.94:1 on white, well
  under the 4.5:1 accessibility floor. Text teal is `#087A7D` (5.13:1).
- Separators use `&bull;`, never `&#9830;` — the card-suit diamond has an
  emoji form and renders as a red glyph on macOS and iOS, ignoring CSS colour.
- Contact values carry `white-space:nowrap` and separators sit glued to the
  item before them, so a wrapped line never splits a phone number or begins
  with an orphaned bullet.

**Outlook classic on Windows** strips embedded images. Those users need the
logo swapped for a hosted PNG — and the correct file differs per design
(Crest and Split use the white knockout mark, Ribbon and Quiet the round one).
Each file in `templates/` names its own asset in a comment at the top.

## Hosting the tool

Enabling **GitHub Pages** on this repo publishes the tool at a URL, which is
easier to share than a file and makes the copy button use the modern clipboard
API rather than the fallback browsers force on local files.

Settings → Pages → Source: `main` branch, root folder. The tool is then at
`https://praduan98.github.io/Email-signature/signature-maker.html`
