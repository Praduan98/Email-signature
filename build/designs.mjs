import fs from 'node:fs';
export const MARKS = JSON.parse(fs.readFileSync(new URL('./marks.json', import.meta.url)));

/* ── palette ────────────────────────────────────────────
   #0DCFCF is only 1.94:1 on white — accents/graphics only.
   Text teal is #087A7D (5.13:1, WCAG AA).                */
const C = {
  ink:    '#101A1D',
  teal:   '#087A7D',
  bright: '#0DCFCF',
  muted:  '#5A6A72',
  line:   '#E1E8EA',
  wash:   '#F4FAFA'
};
const SANS  = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const SERIF = "Georgia, 'Times New Roman', Times, serif";

/* ── helpers ─────────────────────────────────────────── */
const esc = s => String(s ?? '')
  .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

const telHref = p => 'tel:' + String(p).replace(/[^\d+]/g,'');

function webParts(v){
  if(!v) return null;
  let clean = String(v).trim().replace(/^https?:\/\//i,'').replace(/\/+$/,'');
  if(!clean) return null;
  return { href:'https://'+clean, label:clean.replace(/^www\./i,'') };
}
function liParts(v){
  if(!v) return null;
  let clean = String(v).trim().replace(/^https?:\/\//i,'').replace(/\/+$/,'');
  if(!clean) return null;
  return { href:'https://'+clean, label:'LinkedIn' };
}
/* tagline "a / b / c" -> spans joined by a teal diamond */
function taglineHTML(t, size, color){
  const parts = String(t||'').split('/').map(s=>s.trim()).filter(Boolean);
  if(!parts.length) return '';
  const sep = `<span style="color:${C.bright}; font-size:${size-1}px;">&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>`;
  return parts.map(p=>`<span style="color:${color};">${esc(p)}</span>`).join(sep);
}
const a = (href,text,color,extra='') =>
  `<a href="${esc(href)}" style="color:${color}; text-decoration:none; ${extra}">${esc(text)}</a>`;

/* a 1px horizontal rule that survives Outlook */
const hrule = (color, padTop, padBot, width='100%') => `
      <tr><td style="padding:${padTop}px 0 ${padBot}px 0;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${width}" style="border-collapse:collapse; width:${width==='100%'?'100%':width+'px'};">
          <tr><td height="1" bgcolor="${color}" style="height:1px; line-height:1px; font-size:1px; background-color:${color};">&nbsp;</td></tr>
        </table>
      </td></tr>`;

/* same rule, but returns only the inner table so it can sit inside an
   existing <td> (hrule emits its own <tr><td> wrapper). Spacing is applied
   as padding on the host cell — Outlook drops margins on tables. */
const hruleInner = color =>
  `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse; width:100%;">
    <tr><td height="1" bgcolor="${color}" style="height:1px; line-height:1px; font-size:1px; background-color:${color};">&nbsp;</td></tr>
  </table>`;

const OPEN  = `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">`;
const CLOSE = `</table>`;

/* ══ TEMPLATE 01 — LEDGER ═════════════════════════════
   Mark sits top-RIGHT, name leads at full width, and the
   contact block is a labelled grid rather than prose.
   Deliberately shares no structure with the old signature:
   no left logo column, no vertical rule.                 */
function tplLedger(d){
  const rows = [];

  /* identity band — name + role left, mark right */
  rows.push(`<tr>
    <td valign="top" style="padding:0 16px 0 0;">
      ${OPEN}
        <tr><td style="padding:0 0 4px 0; font-family:${SERIF}; font-size:19px; line-height:24px; mso-line-height-rule:exactly; font-weight:bold; color:${C.ink}; letter-spacing:-.2px;">${esc(d.name)}</td></tr>
        <tr><td style="font-family:${SANS}; font-size:12.5px; line-height:17px; mso-line-height-rule:exactly; color:${C.muted};">${esc(d.role)}<span style="color:${C.line};">&nbsp;&nbsp;&#183;&nbsp;&nbsp;</span><span style="color:${C.ink}; font-weight:600;">InsightsTap</span></td></tr>
      ${CLOSE}
    </td>
    <td valign="top" align="right" width="46" style="width:46px;">
      <img src="${esc(d.logo)}" width="46" height="46" alt="InsightsTap" style="display:block; width:46px; height:46px; border:0; outline:none;">
    </td>
  </tr>`);

  rows.push(`<tr><td colspan="2" style="padding:14px 0 13px 0;">${hruleInner(C.line)}</td></tr>`);

  /* labelled contact grid — the label column carries the teal */
  const entries = [];
  entries.push(['Email', a('mailto:'+d.email, d.email, C.ink, 'font-weight:600;')]);
  if(d.phone) entries.push(['Phone', a(telHref(d.phone), d.phone, C.ink)]);
  if(d.web)   entries.push(['Web',   a(d.web.href, d.web.label, C.ink)]);
  if(d.li)    entries.push(['LinkedIn', a(d.li.href, d.li.label, C.ink)]);

  const grid = entries.map(([label, val], i) => {
    const pad = i === entries.length - 1 ? 0 : 6;
    return `<tr>
      <td valign="top" width="68" style="width:68px; padding:0 0 ${pad}px 0; font-family:${SANS}; font-size:9px; line-height:18px; mso-line-height-rule:exactly; font-weight:bold; letter-spacing:1.3px; text-transform:uppercase; color:${C.teal};">${label}</td>
      <td valign="top" style="padding:0 0 ${pad}px 0; font-family:${SANS}; font-size:13px; line-height:18px; mso-line-height-rule:exactly; color:${C.ink};">${val}</td>
    </tr>`;
  }).join('');
  rows.push(`<tr><td colspan="2">${OPEN}${grid}${CLOSE}</td></tr>`);

  const tag = taglineHTML(d.tagline, 10, C.muted);
  if(tag){
    rows.push(`<tr><td colspan="2" style="padding:14px 0 11px 0;">${hruleInner(C.line)}</td></tr>`);
    rows.push(`<tr><td colspan="2" style="font-family:${SANS}; font-size:10px; line-height:15px; mso-line-height-rule:exactly; font-weight:bold; letter-spacing:1.5px; text-transform:uppercase;">${tag}</td></tr>`);
  }

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="460" style="border-collapse:collapse; width:460px; mso-table-lspace:0pt; mso-table-rspace:0pt;">
    ${rows.join('')}
  ${CLOSE}`;
}

/* ══ TEMPLATE 02 — STACK ══════════════════════════════
   Narrow vertical lockup, all sans, short teal rule.    */
function tplStack(d){
  const rows = [];

  rows.push(`<tr><td style="padding:0 0 11px 0;">
    ${OPEN}<tr>
      <td valign="middle" style="padding:0 10px 0 0;">
        <img src="${esc(d.logo)}" width="30" height="30" alt="InsightsTap" style="display:block; width:30px; height:30px; border:0; outline:none;">
      </td>
      <td valign="middle" style="font-family:${SANS}; font-size:15px; line-height:20px; mso-line-height-rule:exactly; font-weight:bold; letter-spacing:-.1px; color:${C.ink};">Insights<span style="color:${C.teal};">Tap</span></td>
    </tr>${CLOSE}
  </td></tr>`);

  rows.push(`<tr><td style="padding:0 0 12px 0;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="30" style="border-collapse:collapse; width:30px;">
      <tr><td height="2" bgcolor="${C.bright}" style="height:2px; line-height:2px; font-size:2px; background-color:${C.bright};">&nbsp;</td></tr>
    </table>
  </td></tr>`);

  rows.push(`<tr><td style="padding:0 0 1px 0; font-family:${SANS}; font-size:16px; line-height:21px; mso-line-height-rule:exactly; font-weight:bold; color:${C.ink}; letter-spacing:-.2px;">${esc(d.name)}</td></tr>`);
  rows.push(`<tr><td style="padding:0 0 11px 0; font-family:${SANS}; font-size:12.5px; line-height:17px; mso-line-height-rule:exactly; color:${C.teal}; font-weight:600;">${esc(d.role)}</td></tr>`);

  const bits = [];
  bits.push(a('mailto:'+d.email, d.email, C.ink, 'font-weight:600;'));
  if(d.phone) bits.push(a(telHref(d.phone), d.phone, C.muted));
  if(d.web)   bits.push(a(d.web.href, d.web.label, C.muted));
  if(d.li)    bits.push(a(d.li.href, d.li.label, C.muted));
  bits.forEach((b,i)=>{
    rows.push(`<tr><td style="padding:0 0 ${i===bits.length-1?0:3}px 0; font-family:${SANS}; font-size:12.5px; line-height:18px; mso-line-height-rule:exactly; color:${C.muted};">${b}</td></tr>`);
  });

  const tag = taglineHTML(d.tagline, 9.5, C.muted);
  if(tag){
    rows.push(hrule(C.line, 12, 10, '100%'));
    rows.push(`<tr><td style="font-family:${SANS}; font-size:9.5px; line-height:14px; mso-line-height-rule:exactly; font-weight:bold; letter-spacing:1.2px; text-transform:uppercase;">${tag}</td></tr>`);
  }

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="290" style="border-collapse:collapse; width:290px; mso-table-lspace:0pt; mso-table-rspace:0pt;">
    ${rows.join('')}
  ${CLOSE}`;
}

/* ══ TEMPLATE 03 — KEYSTONE ═══════════════════════════
   Banded card, hairline border, tagline footer strip.   */
function tplKeystone(d){
  const body = [];

  body.push(`<tr>
    <td valign="middle" style="padding:0 15px 0 0;">
      <img src="${esc(d.logo)}" width="46" height="46" alt="InsightsTap" style="display:block; width:46px; height:46px; border:0; outline:none;">
    </td>
    <td valign="middle">
      ${OPEN}
        <tr><td style="padding:0 0 3px 0; font-family:${SANS}; font-size:17px; line-height:22px; mso-line-height-rule:exactly; font-weight:bold; color:${C.ink}; letter-spacing:-.2px;">${esc(d.name)}</td></tr>
        <tr><td style="font-family:${SANS}; font-size:11px; line-height:15px; mso-line-height-rule:exactly; font-weight:bold; color:${C.teal}; letter-spacing:1.1px; text-transform:uppercase;">${esc(d.role)}</td></tr>
      ${CLOSE}
    </td>
  </tr>`);

  const rowsC = [];
  rowsC.push(`<tr><td style="padding:0 0 4px 0; font-family:${SANS}; font-size:13px; line-height:19px; mso-line-height-rule:exactly;">${a('mailto:'+d.email, d.email, C.ink, 'font-weight:600;')}</td></tr>`);
  const l2 = [];
  if(d.phone) l2.push(a(telHref(d.phone), d.phone, C.muted));
  if(d.web)   l2.push(a(d.web.href, d.web.label, C.muted));
  if(d.li)    l2.push(a(d.li.href, d.li.label, C.muted));
  if(l2.length){
    const sep = `<span style="color:${C.bright}; padding:0 7px;">&bull;</span>`;
    rowsC.push(`<tr><td style="font-family:${SANS}; font-size:12.5px; line-height:18px; mso-line-height-rule:exactly; color:${C.muted};">${l2.join(sep)}</td></tr>`);
  }

  const tag = taglineHTML(d.tagline, 10, C.muted);
  const footer = tag ? `
    <tr><td height="1" bgcolor="${C.line}" style="height:1px; line-height:1px; font-size:1px; background-color:${C.line};">&nbsp;</td></tr>
    <tr><td bgcolor="${C.wash}" style="background-color:${C.wash}; padding:10px 22px; font-family:${SANS}; font-size:10px; line-height:15px; mso-line-height-rule:exactly; font-weight:bold; letter-spacing:1.4px; text-transform:uppercase;">${tag}</td></tr>` : '';

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="430" style="border-collapse:collapse; width:430px; border:1px solid ${C.line}; border-left:3px solid ${C.bright}; mso-table-lspace:0pt; mso-table-rspace:0pt;">
    <tr><td style="padding:19px 22px 17px 22px;">
      ${OPEN}
        <tr><td style="padding:0 0 14px 0;">${OPEN}${body.join('')}${CLOSE}</td></tr>
        <tr><td>${OPEN}${rowsC.join('')}${CLOSE}</td></tr>
      ${CLOSE}
    </td></tr>
    ${footer}
  ${CLOSE}`;
}

const TEMPLATES = {
  ledger:  { fn:tplLedger,   name:'Ledger',   mark:'round'   },
  stack:   { fn:tplStack,    name:'Stack',    mark:'teal'    },
  keystone:{ fn:tplKeystone, name:'Keystone', mark:'square'  }
};


export { C, SANS, SERIF, esc, telHref, webParts, liParts, taglineHTML, a, hrule, hruleInner, OPEN, CLOSE, tplStack, tplKeystone, TEMPLATES };
