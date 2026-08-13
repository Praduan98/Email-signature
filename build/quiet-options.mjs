/* Three ways to fix Quiet's floating mark. Each gives every element a
   shared edge to align to, which is what the current version lacks.
   Renders build/quiet.html for review. */
import fs from 'node:fs';
import { MARKS, C, esc, telHref, a, hruleInner, OPEN, CLOSE } from './designs.mjs';
import { S, Z, chain } from './signatures.mjs';

const W = 392;                       // measured: last width where 4 contacts fit one line
const RULE = c => `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse; width:100%;"><tr><td height="1" bgcolor="${c}" style="height:1px; line-height:1px; font-size:1px; background-color:${c};">&nbsp;</td></tr></table>`;

function contacts(d){
  const bits = [a('mailto:'+d.email, d.email, C.ink, 'font-weight:600; white-space:nowrap;')];
  if(d.phone) bits.push(a(telHref(d.phone), d.phone, C.muted, 'white-space:nowrap;'));
  if(d.web)   bits.push(a(d.web.href, d.web.label, C.muted, 'white-space:nowrap;'));
  if(d.li)    bits.push(a(d.li.href, d.li.label, C.muted, 'white-space:nowrap;'));
  return chain(bits, C.bright);
}
/* company set in brand teal so the accent lives in the type, not only the mark */
const roleLine = d => `${esc(d.role)}<span style="color:#C8D4D7;">&nbsp;&nbsp;&#183;&nbsp;&nbsp;</span><span style="color:${C.teal}; font-weight:600;">InsightsTap</span>`;

const NAME = `font-family:${S}; font-size:${Z.name}px; line-height:${Z.nameLh}px; mso-line-height-rule:exactly; font-weight:bold; color:${C.ink}; letter-spacing:-.25px;`;
const ROLE = `font-family:${S}; font-size:${Z.roleP}px; line-height:${Z.rolePLh}px; mso-line-height-rule:exactly; color:${C.muted};`;
const META = `font-family:${S}; font-size:${Z.meta}px; line-height:${Z.metaLh}px; mso-line-height-rule:exactly; color:${C.muted};`;

/* ══ A · HANG ═════════════════════════════════════════════════════════
   Mark holds its own column at the left margin. The rule and contacts
   run the full width beneath it, so the mark and the contact line share
   a left edge and the name hangs indented off it.                      */
export function quietHang(d){
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${W}" style="border-collapse:collapse; width:${W}px; mso-table-lspace:0pt; mso-table-rspace:0pt;">
    <tr>
      <td valign="middle" width="34" style="width:34px; padding:0 14px 0 0;">
        <img src="${esc(d.logo)}" width="34" height="34" alt="InsightsTap" style="display:block; width:34px; height:34px; border:0; outline:none;">
      </td>
      <td valign="middle">
        ${OPEN}
          <tr><td style="padding:0 0 2px 0; ${NAME}">${esc(d.name)}</td></tr>
          <tr><td style="${ROLE} white-space:nowrap;">${roleLine(d)}</td></tr>
        ${CLOSE}
      </td>
    </tr>
    <tr><td colspan="2" style="padding:12px 0 10px 0;">${RULE(C.line)}</td></tr>
    <tr><td colspan="2" style="${META}">${contacts(d)}</td></tr>
  ${CLOSE}`;
}

/* ══ B · COLUMN ═══════════════════════════════════════════════════════
   One left edge, no columns at all. The mark sits above the name like a
   masthead. Nothing can float because nothing is beside anything.      */
export function quietColumn(d){
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${W}" style="border-collapse:collapse; width:${W}px; mso-table-lspace:0pt; mso-table-rspace:0pt;">
    <tr><td style="padding:0 0 11px 0;">
      <img src="${esc(d.logo)}" width="30" height="30" alt="InsightsTap" style="display:block; width:30px; height:30px; border:0; outline:none;">
    </td></tr>
    <tr><td style="padding:0 0 2px 0; ${NAME}">${esc(d.name)}</td></tr>
    <tr><td style="${ROLE}">${roleLine(d)}</td></tr>
    <tr><td style="padding:12px 0 10px 0;">${RULE(C.line)}</td></tr>
    <tr><td style="${META}">${contacts(d)}</td></tr>
  ${CLOSE}`;
}

/* ══ C · KEYLINE ══════════════════════════════════════════════════════
   No image at all. A short teal keyline is the only graphic, and the
   wordmark is set in type. The most minimal reading of the brief —
   nothing to float because there is nothing to place.                  */
export function quietKeyline(d){
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${W}" style="border-collapse:collapse; width:${W}px; mso-table-lspace:0pt; mso-table-rspace:0pt;">
    <tr><td style="padding:0 0 12px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="26" style="border-collapse:collapse; width:26px;">
        <tr><td height="2" bgcolor="${C.bright}" style="height:2px; line-height:2px; font-size:1px; background-color:${C.bright};">&nbsp;</td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:0 0 2px 0; ${NAME}">${esc(d.name)}</td></tr>
    <tr><td style="padding:0 0 12px 0; ${ROLE}">${roleLine(d)}</td></tr>
    <tr><td style="${META}">${contacts(d)}</td></tr>
  ${CLOSE}`;
}

/* ── review sheet ─────────────────────────────────────────────────── */
const D = {
  name:'Praduan Saha', role:'Graphic Designer', email:'praduan@insightstap.com',
  phone:'+91 8918952829', web:{href:'https://insightstap.com', label:'insightstap.com'},
  li:{href:'https://linkedin.com/in/praduan', label:'LinkedIn'}, logo: MARKS.round
};
const OPTS = [
  ['A','Hang','Mark takes the left margin; the rule and contacts run full width beneath it. The mark and the contact line share a left edge.'],
  ['B','Column','One left edge for everything. The mark sits above the name like a masthead — nothing is beside anything, so nothing can float.'],
  ['C','Keyline','No image at all. A short teal keyline is the only graphic and the wordmark is set in type. The most minimal reading.'],
];
const FNS = { A: quietHang, B: quietColumn, C: quietKeyline };

fs.writeFileSync('build/quiet.html', `<!doctype html><html><head><meta charset="utf-8">
<title>Quiet — redesign options</title><style>
 body{margin:0;padding:40px 30px 70px;background:#F7F9FA;font-family:'Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif;color:#101A1D}
 .w{max-width:640px;margin:0 auto}
 h1{margin:0 0 6px;font-size:21px;letter-spacing:-.3px}
 .s{margin:0 0 36px;color:#5A6A72;font-size:14px;line-height:1.6}
 section{margin-bottom:34px}
 h2{margin:0 0 4px;font-size:14.5px}
 .k{display:inline-block;min-width:20px;margin-right:6px;padding:1px 6px;border-radius:3px;background:#0F1A1D;color:#0DCFCF;font-size:11.5px;text-align:center}
 section p{margin:0 0 12px;color:#5A6A72;font-size:12.5px;line-height:1.55}
 .st{background:#fff;border:1px solid #E1E8EA;border-radius:5px;padding:28px 24px;overflow-x:auto}
</style></head><body><div class="w">
<h1>Quiet &mdash; three fixes</h1>
<p class="s">The mark currently aligns to nothing &mdash; it is pinned to the ragged end of the role line. Each option below gives every element a shared edge instead. Tell me a letter.</p>
${OPTS.map(([k,n,why])=>`<section><h2><span class="k">${k}</span>${n}</h2><p>${why}</p><div class="st">${FNS[k](D)}</div></section>`).join('')}
</div></body></html>`);
console.log('build/quiet.html written');
