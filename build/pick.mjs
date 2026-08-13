/* Regenerates build/pick.html, the review contact sheet. */
import fs from 'node:fs';
import { MARKS } from './designs.mjs';
import { tplObsidian, tplCrest, tplRibbon, tplSplit } from './signatures.mjs';

/* ── render the contact sheet ───────────────────────────────────────── */
const D = {
  name:'Anirban Bhattacharya', role:'Chief Operating Officer',
  email:'anirban@insightstap.com', phone:'+91 98765 43210',
  web:{href:'https://insightstap.com', label:'insightstap.com'}, li:null,
  tagline:'GTM Engineering / Marketing Automation',
  logo: MARKS.round, markWhite: MARKS.white
};

const OPTS = [
  ['A', 'Obsidian', tplObsidian, 'Dark card. Your teal finally works as text here (9.14:1, vs 1.94:1 on white).'],
  ['B', 'Crest',    tplCrest,    'Teal masthead band over a bordered white body. Reads like letterhead.'],
  ['C', 'Ribbon',   tplRibbon,   'Name leads big; a solid teal bar closes it off underneath.'],
  ['D', 'Split',    tplSplit,    'White content against a full-height teal panel. Business-card proportions.'],
];

const cards = OPTS.map(([k,name,fn,why]) => `
  <section>
    <h2><span class="k">${k}</span> ${name}</h2>
    <p>${why}</p>
    <div class="stage">${fn(D)}</div>
  </section>`).join('');

fs.writeFileSync('build/pick.html', `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>InsightsTap — signature 01 options</title>
<style>
  body{margin:0;padding:44px 32px 80px;background:#F7F9FA;
       font-family:'Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif;color:#101A1D}
  .wrap{max-width:760px;margin:0 auto}
  h1{margin:0 0 6px;font-size:23px;letter-spacing:-.4px}
  .sub{margin:0 0 40px;color:#5A6A72;font-size:14.5px;line-height:1.6}
  section{margin-bottom:38px}
  h2{margin:0 0 4px;font-size:15px;letter-spacing:.2px}
  .k{display:inline-block;min-width:22px;margin-right:6px;padding:1px 6px;border-radius:3px;
     background:#0F1A1D;color:#0DCFCF;font-size:12px;text-align:center}
  section p{margin:0 0 13px;color:#5A6A72;font-size:13px;line-height:1.55}
  .stage{background:#fff;border:1px solid #E1E8EA;border-radius:5px;padding:30px 26px;overflow-x:auto}
</style></head>
<body><div class="wrap">
  <h1>Signature 01 &mdash; four options</h1>
  <p class="sub">These commit to colour and weight, unlike the three light layouts you turned down.
     Tell me a letter and I&rsquo;ll build it out as <code>templates/01-*.html</code>.
     Mixing is fine too &mdash; e.g. &ldquo;A but on white&rdquo;, or &ldquo;D with a bigger name&rdquo;.</p>
  ${cards}
</div></body></html>
`);
console.log('build/pick.html written');
