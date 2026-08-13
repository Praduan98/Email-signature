/* The approved signature designs. Pure module — no side effects.
   Crest / Ribbon / Split ship; Obsidian is kept as a spare. */
import { MARKS, C, esc, telHref, a, hruleInner, OPEN, CLOSE } from './designs.mjs';

/* Segoe UI first so Windows stops falling back to plain Arial */
const S = "'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif";
const DOT = c => ` <span style="color:${c}; padding:0 3px;">&bull;</span> `;

/* Joins contact items so each separator stays glued to the item BEFORE it.
   A break can then only happen after a bullet, never before one — so a
   wrapped line never begins with an orphaned separator. The space between
   the spans is the only break opportunity, and is load-bearing. */
const chain = (items, c) => items.map((it, i) =>
  i === items.length - 1
    ? `<span style="white-space:nowrap;">${it}</span>`
    : `<span style="white-space:nowrap;">${it}<span style="color:${c}; padding:0 3px;">&bull;</span></span> `
).join('');

/* ── type scale ──────────────────────────────────────────────────────────
   Gmail and Outlook render body copy at ~13px. A signature should sit at
   or just under that, with only the name stepping above it — otherwise it
   reads as a headline shouting under every message. Sizes live here so all
   three designs stay in proportion.                                       */
const Z = {
  name:   14,   nameLh: 19,   // level with body copy, weight does the work
  role:    9,   roleLh: 13,   // uppercase + tracked variants
  roleP:  11,   rolePLh:15,   // Ribbon's sentence-case role
  mail:   12,   mailLh: 17,
  meta:   11.5, metaLh: 17,
  tag:     8,   tagLh:  12,
  wordmk: 11.5,
  /* table widths — the tagline row is the widest fixed content, so these
     can't go much below ~310 without it wrapping */
  w: { crest:320, ribbon:320, split:342, quiet:310, obsidian:342 },
};

/* taglineHTML() hardcodes a bright-teal separator, which vanishes when the
   tagline sits ON teal. This variant takes the separator colour. */
function tagline(t, size, color, sep){
  const parts = String(t||'').split('/').map(s=>s.trim()).filter(Boolean);
  if(!parts.length) return '';
  const s = ` <span style="color:${sep}; font-size:${size-1}px; padding:0 4px;">&bull;</span> `;
  return parts.map(p=>`<span style="color:${color};">${esc(p)}</span>`).join(s);
}

/* ══ A · OBSIDIAN ═════════════════════════════════════════════════════ */
export function tplObsidian(d){
  const BG='#0F1A1D', RULE='#26383C', HI='#FFFFFF', BODY='#E8F4F5', DIM='#8FA3A8';
  const l2=[];
  if(d.phone) l2.push(a(telHref(d.phone), d.phone, DIM, 'white-space:nowrap;'));
  if(d.web)   l2.push(a(d.web.href, d.web.label, DIM, 'white-space:nowrap;'));
  if(d.li)    l2.push(a(d.li.href, d.li.label, DIM, 'white-space:nowrap;'));
  const tag = tagline(d.tagline, Z.tag, DIM, C.bright);

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${Z.w.obsidian}" style="border-collapse:collapse; width:${Z.w.obsidian}px; mso-table-lspace:0pt; mso-table-rspace:0pt;">
    <tr><td bgcolor="${BG}" style="background-color:${BG}; padding:16px 18px 14px 18px;">
      ${OPEN}
        <tr><td style="padding:0 0 14px 0;">
          ${OPEN}<tr>
            <td valign="middle" style="padding:0 11px 0 0;"><img src="${esc(d.markWhite)}" width="34" height="34" alt="InsightsTap" style="display:block; width:34px; height:34px; border:0; outline:none;"></td>
            <td valign="middle">${OPEN}
              <tr><td style="padding:0 0 4px 0; font-family:${S}; font-size:${Z.name}px; line-height:${Z.nameLh}px; mso-line-height-rule:exactly; font-weight:bold; color:${HI}; letter-spacing:-.2px;">${esc(d.name)}</td></tr>
              <tr><td style="font-family:${S}; font-size:${Z.role}px; line-height:${Z.roleLh}px; mso-line-height-rule:exactly; font-weight:bold; letter-spacing:1.4px; text-transform:uppercase; color:${C.bright};">${esc(d.role)}</td></tr>
            ${CLOSE}</td>
          </tr>${CLOSE}
        </td></tr>
        <tr><td style="padding:0 0 12px 0;">${hruleInner(RULE)}</td></tr>
        <tr><td style="padding:0 0 2px 0; font-family:${S}; font-size:${Z.mail}px; line-height:${Z.mailLh}px; mso-line-height-rule:exactly;">${a('mailto:'+d.email, d.email, BODY, 'font-weight:600; white-space:nowrap;')}</td></tr>
        ${l2.length?`<tr><td style="font-family:${S}; font-size:${Z.meta}px; line-height:${Z.metaLh}px; mso-line-height-rule:exactly; color:${DIM};">${chain(l2, C.bright)}</td></tr>`:''}
        ${tag?`<tr><td style="padding:13px 0 0 0; font-family:${S}; font-size:${Z.tag}px; line-height:${Z.tagLh}px; mso-line-height-rule:exactly; font-weight:bold; letter-spacing:1.3px; text-transform:uppercase;">${tag}</td></tr>`:''}
      ${CLOSE}
    </td></tr>
    <tr><td height="3" bgcolor="${C.bright}" style="height:3px; line-height:3px; font-size:1px; background-color:${C.bright};">&nbsp;</td></tr>
  ${CLOSE}`;
}

/* ══ B · CREST ════════════════════════════════════════════════════════ */
export function tplCrest(d){
  const l2=[];
  if(d.phone) l2.push(a(telHref(d.phone), d.phone, C.muted, 'white-space:nowrap;'));
  if(d.web)   l2.push(a(d.web.href, d.web.label, C.muted, 'white-space:nowrap;'));
  if(d.li)    l2.push(a(d.li.href, d.li.label, C.muted, 'white-space:nowrap;'));
  const tag = tagline(d.tagline, Z.tag, C.muted, C.bright);

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${Z.w.crest}" style="border-collapse:collapse; width:${Z.w.crest}px; border:1px solid ${C.line}; mso-table-lspace:0pt; mso-table-rspace:0pt;">
    <tr><td bgcolor="${C.bright}" style="background-color:${C.bright}; padding:7px 14px;">
      ${OPEN}<tr>
        <td valign="middle" style="padding:0 9px 0 0;"><img src="${esc(d.markWhite)}" width="16" height="16" alt="" style="display:block; width:16px; height:16px; border:0; outline:none;"></td>
        <td valign="middle" style="font-family:${S}; font-size:${Z.wordmk}px; line-height:17px; mso-line-height-rule:exactly; font-weight:bold; color:#FFFFFF; letter-spacing:.2px; white-space:nowrap;">InsightsTap</td>
      </tr>${CLOSE}
    </td></tr>
    <tr><td style="padding:13px 14px 12px 14px;">
      ${OPEN}
        <tr><td style="padding:0 0 3px 0; font-family:${S}; font-size:${Z.name}px; line-height:${Z.nameLh}px; mso-line-height-rule:exactly; font-weight:bold; color:${C.ink}; letter-spacing:-.25px;">${esc(d.name)}</td></tr>
        <tr><td style="padding:0 0 12px 0; font-family:${S}; font-size:${Z.role}px; line-height:${Z.roleLh}px; mso-line-height-rule:exactly; font-weight:bold; letter-spacing:1.3px; text-transform:uppercase; color:${C.teal};">${esc(d.role)}</td></tr>
        <tr><td style="padding:0 0 2px 0; font-family:${S}; font-size:${Z.mail}px; line-height:${Z.mailLh}px; mso-line-height-rule:exactly;">${a('mailto:'+d.email, d.email, C.ink, 'font-weight:600; white-space:nowrap;')}</td></tr>
        ${l2.length?`<tr><td style="font-family:${S}; font-size:${Z.meta}px; line-height:${Z.metaLh}px; mso-line-height-rule:exactly; color:${C.muted};">${chain(l2, C.bright)}</td></tr>`:''}
        ${tag?`<tr><td style="padding:12px 0 0 0;">${hruleInner(C.line)}</td></tr>
        <tr><td style="padding:10px 0 0 0; font-family:${S}; font-size:${Z.tag}px; line-height:${Z.tagLh}px; mso-line-height-rule:exactly; font-weight:bold; letter-spacing:1.3px; text-transform:uppercase;">${tag}</td></tr>`:''}
      ${CLOSE}
    </td></tr>
  ${CLOSE}`;
}

/* ══ C · RIBBON ═══════════════════════════════════════════════════════ */
export function tplRibbon(d){
  const l2=[];
  if(d.phone) l2.push(a(telHref(d.phone), d.phone, C.muted, 'white-space:nowrap;'));
  if(d.web)   l2.push(a(d.web.href, d.web.label, C.muted, 'white-space:nowrap;'));
  if(d.li)    l2.push(a(d.li.href, d.li.label, C.muted, 'white-space:nowrap;'));
  const tagInk = tagline(d.tagline, Z.tag, '#04494B', '#04494B');

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${Z.w.ribbon}" style="border-collapse:collapse; width:${Z.w.ribbon}px; mso-table-lspace:0pt; mso-table-rspace:0pt;">
    <tr><td style="padding:0 0 13px 0;">
      ${OPEN}<tr>
        <td valign="top" width="100%" style="width:100%; padding:0 12px 0 0;">${OPEN}
          <tr><td style="padding:0 0 3px 0; font-family:${S}; font-size:${Z.name}px; line-height:${Z.nameLh}px; mso-line-height-rule:exactly; font-weight:bold; color:${C.ink}; letter-spacing:-.25px;">${esc(d.name)}</td></tr>
          <tr><td style="font-family:${S}; font-size:${Z.roleP}px; line-height:${Z.rolePLh}px; mso-line-height-rule:exactly; color:${C.muted};">${esc(d.role)}<span style="color:${C.line};">&nbsp;&nbsp;&#183;&nbsp;&nbsp;</span><span style="color:${C.ink}; font-weight:600;">InsightsTap</span></td></tr>
        ${CLOSE}</td>
        <td valign="top" align="right" width="32" style="width:32px;"><img src="${esc(d.logo)}" width="32" height="32" alt="InsightsTap" style="display:block; width:32px; height:32px; border:0; outline:none;"></td>
      </tr>${CLOSE}
    </td></tr>
    <tr><td style="padding:0 0 12px 0;">${hruleInner(C.line)}</td></tr>
    <tr><td style="padding:0 0 2px 0; font-family:${S}; font-size:${Z.mail}px; line-height:${Z.mailLh}px; mso-line-height-rule:exactly;">${a('mailto:'+d.email, d.email, C.ink, 'font-weight:600; white-space:nowrap;')}</td></tr>
    ${l2.length?`<tr><td style="padding:0 0 14px 0; font-family:${S}; font-size:${Z.meta}px; line-height:${Z.metaLh}px; mso-line-height-rule:exactly; color:${C.muted};">${chain(l2, C.bright)}</td></tr>`:''}
    ${tagInk?`<tr><td bgcolor="${C.bright}" style="background-color:${C.bright}; padding:7px 12px; font-family:${S}; font-size:${Z.tag}px; line-height:${Z.tagLh}px; mso-line-height-rule:exactly; font-weight:bold; letter-spacing:1.3px; text-transform:uppercase;">${tagInk}</td></tr>`:''}
  ${CLOSE}`;
}

/* ══ D · SPLIT ════════════════════════════════════════════════════════ */
export function tplSplit(d){
  const l2=[];
  if(d.phone) l2.push(a(telHref(d.phone), d.phone, C.muted, 'white-space:nowrap;'));
  if(d.web)   l2.push(a(d.web.href, d.web.label, C.muted, 'white-space:nowrap;'));
  if(d.li)    l2.push(a(d.li.href, d.li.label, C.muted, 'white-space:nowrap;'));
  const tag = tagline(d.tagline, Z.tag, C.muted, C.bright);

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${Z.w.split}" style="border-collapse:collapse; width:${Z.w.split}px; border:1px solid ${C.line}; mso-table-lspace:0pt; mso-table-rspace:0pt;">
    <tr>
      <td valign="middle" style="padding:14px 14px 13px 15px;">
        ${OPEN}
          <tr><td style="padding:0 0 3px 0; font-family:${S}; font-size:${Z.name}px; line-height:${Z.nameLh}px; mso-line-height-rule:exactly; font-weight:bold; color:${C.ink}; letter-spacing:-.25px;">${esc(d.name)}</td></tr>
          <tr><td style="padding:0 0 11px 0; font-family:${S}; font-size:${Z.role}px; line-height:${Z.roleLh}px; mso-line-height-rule:exactly; font-weight:bold; letter-spacing:1.3px; text-transform:uppercase; color:${C.teal};">${esc(d.role)}</td></tr>
          <tr><td style="padding:0 0 2px 0; font-family:${S}; font-size:${Z.mail}px; line-height:${Z.mailLh}px; mso-line-height-rule:exactly;">${a('mailto:'+d.email, d.email, C.ink, 'font-weight:600; white-space:nowrap;')}</td></tr>
          ${l2.length?`<tr><td style="font-family:${S}; font-size:${Z.meta}px; line-height:${Z.metaLh}px; mso-line-height-rule:exactly; color:${C.muted};">${chain(l2, C.bright)}</td></tr>`:''}
          ${tag?`<tr><td style="padding:11px 0 0 0; font-family:${S}; font-size:${Z.tag}px; line-height:${Z.tagLh}px; mso-line-height-rule:exactly; font-weight:bold; letter-spacing:1.3px; text-transform:uppercase;">${tag}</td></tr>`:''}
        ${CLOSE}
      </td>
      <td valign="middle" align="center" width="64" bgcolor="${C.bright}" style="width:64px; background-color:${C.bright};">
        <img src="${esc(d.markWhite)}" width="32" height="32" alt="InsightsTap" style="display:block; width:32px; height:32px; border:0; outline:none;">
      </td>
    </tr>
  ${CLOSE}`;
}

/* ══ E · QUIET ════════════════════════════════════════════════════════
   The restrained one. No card, no colour block, no tagline row.

   The mark holds the left margin as its own column, and the rule and the
   contact line run the full width beneath it — so the mark and the contacts
   share a left edge, and the name hangs indented off that edge. Previously
   the mark was pinned to the ragged end of the role line, aligned to
   nothing, which is why it read as floating.                            */
export function tplQuiet(d){
  /* two lines: reach-me-directly first, then the public links */
  const direct = [a('mailto:'+d.email, d.email, C.ink, 'font-weight:600; white-space:nowrap;')];
  if(d.phone) direct.push(a(telHref(d.phone), d.phone, C.muted, 'white-space:nowrap;'));
  const links = [];
  if(d.web) links.push(a(d.web.href, d.web.label, C.muted, 'white-space:nowrap;'));
  if(d.li)  links.push(a(d.li.href, d.li.label, C.muted, 'white-space:nowrap;'));

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${Z.w.quiet}" style="border-collapse:collapse; width:${Z.w.quiet}px; mso-table-lspace:0pt; mso-table-rspace:0pt;">
    <tr>
      <td valign="middle" width="34" style="width:34px; padding:0 14px 0 0;">
        <img src="${esc(d.logo)}" width="34" height="34" alt="InsightsTap" style="display:block; width:34px; height:34px; border:0; outline:none;">
      </td>
      <td valign="middle">
        ${OPEN}
          <tr><td style="padding:0 0 2px 0; font-family:${S}; font-size:${Z.name}px; line-height:${Z.nameLh}px; mso-line-height-rule:exactly; font-weight:bold; color:${C.ink}; letter-spacing:-.25px;">${esc(d.name)}</td></tr>
          <tr><td style="font-family:${S}; font-size:${Z.roleP}px; line-height:${Z.rolePLh}px; mso-line-height-rule:exactly; color:${C.muted};">${esc(d.role)}<span style="color:#C8D4D7;">&nbsp;&nbsp;&#183;&nbsp;&nbsp;</span><span style="color:${C.teal}; font-weight:600;">InsightsTap</span></td></tr>
        ${CLOSE}
      </td>
    </tr>
    <tr><td colspan="2" style="padding:12px 0 10px 0;">${hruleInner(C.line)}</td></tr>
    <tr><td colspan="2" style="padding:0 0 ${links.length ? 3 : 0}px 0; font-family:${S}; font-size:${Z.meta}px; line-height:${Z.metaLh}px; mso-line-height-rule:exactly; color:${C.muted};">${chain(direct, C.bright)}</td></tr>
    ${links.length ? `<tr><td colspan="2" style="font-family:${S}; font-size:${Z.meta}px; line-height:${Z.metaLh}px; mso-line-height-rule:exactly; color:${C.muted};">${chain(links, C.bright)}</td></tr>` : ''}
  ${CLOSE}`;
}

export { S, Z, tagline, DOT, chain };
