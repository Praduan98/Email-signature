/* Renders the three approved signatures into templates/.
   Single source of truth: build/signatures.mjs */
import fs from 'node:fs';
import { MARKS } from './designs.mjs';
import { tplCrest, tplRibbon, tplSplit, tplQuiet } from './signatures.mjs';

const PLACEHOLDER = {
  name:  'Your Full Name',
  role:  'Your Designation',
  email: 'you@insightstap.com',
  phone: '+91 00000 00000',
  web:   { href: 'https://insightstap.com', label: 'insightstap.com' },
  li:    null,
  tagline: 'GTM Engineering / Marketing Automation'
};

/* `asset` is the PNG that matches the mark this layout embeds — it differs
   per design, and naming the wrong one breaks the Outlook/Windows swap. */
const FILES = [
  ['01-crest.html', 'Crest', tplCrest, 'insightstap-mark-white.png',
   'Solid teal masthead with the wordmark knocked out in white, over a bordered white body. Reads like letterhead.'],
  ['02-ribbon.html', 'Ribbon', tplRibbon, 'insightstap-mark-round.png',
   'The name leads large; a solid teal bar seals the bottom edge.'],
  ['03-split.html', 'Split', tplSplit, 'insightstap-mark-white.png',
   'White content set against a full-height teal panel. Business-card proportions.'],
  ['04-quiet.html', 'Quiet', tplQuiet, 'insightstap-mark-round.png',
   'The restrained one: name, role, one hairline, one line of contacts. No card, no colour block, no tagline.'],
];

for (const [file, name, fn, asset, desc] of FILES) {
  const sig = fn({ ...PLACEHOLDER, logo: MARKS.round, markWhite: MARKS.white })
                .replace(/\n\s*\n/g, '\n').trim();

  const doc = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>InsightsTap signature — ${name}</title>
</head>
<!--
  ═══════════════════════════════════════════════════════════════════════════
  INSIGHTSTAP EMAIL SIGNATURE — ${name.toUpperCase()}
  ${desc}

  ── HOW TO USE ─────────────────────────────────────────────────────────────
  1. Open this file in a text editor and replace the four values listed
     below, then save.
  2. Open the file in a web browser (double-click it).
  3. Select the signature and copy it.
  4. Paste into your mail client's signature box.

  ── WHAT TO REPLACE ────────────────────────────────────────────────────────
  Your Full Name     appears ONCE.  Replace with the person's name.
  Your Designation   appears ONCE.  Replace with the job title.

  The email appears TWICE and BOTH must change:
        href="mailto:you@insightstap.com"      ← the clickable link
                    >you@insightstap.com<      ← the text people see

  The phone also appears twice, but in TWO DIFFERENT FORMATS:
        href="tel:+910000000000"               ← digits only, NO spaces
                 >+91 00000 00000<             ← spaced, the text people see
  A find-and-replace on the spaced version will MISS the link and leave it
  dialling the wrong number. Edit both, and keep the link free of spaces.
  To drop the phone line entirely, delete its whole <tr> ... </tr> row.

  Leave the colours, fonts and sizes alone so everyone's signature matches.

  ── WHERE TO PASTE ─────────────────────────────────────────────────────────
  Gmail        Settings → See all settings → General → Signature → Create new.
               Set it for New emails AND Reply/forward. Save Changes.
  Outlook web  Settings → Mail → Compose and reply → New signature.
  Outlook Win  File → Options → Mail → Signatures → New.   (see LOGO note)
  Apple Mail   Mail → Settings → Signatures → "+", then UNTICK
               "Always match my default message font".

  ── LOGO ───────────────────────────────────────────────────────────────────
  The logo is embedded as a base64 data URI, so this file works offline and
  needs no server. Outlook classic on Windows strips embedded images — for
  those users, replace the whole src="data:image/png;base64,..." value with a
  hosted PNG address, e.g. src="https://insightstap.com/email/mark.png"

  THIS layout uses  assets/${asset}
  — upload that exact file; the other marks are the wrong colour for it.

  It must be a PNG. The company site currently serves the mark only as .webp,
  which Outlook cannot display, so do not link to that file.
  ═══════════════════════════════════════════════════════════════════════════
-->
<body style="margin:0; padding:32px; background:#ffffff;">

<!-- ══════ SIGNATURE BEGIN — copy from here ══════ -->
${sig}
<!-- ══════ SIGNATURE END — copy to here ══════ -->

</body>
</html>
`;
  fs.writeFileSync(`templates/${file}`, doc);
  console.log(`templates/${file}  ${(Buffer.byteLength(doc) / 1024).toFixed(1)} KB  (${asset})`);
}
