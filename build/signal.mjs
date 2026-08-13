/* Signal — signature 01. The bar ornament is derived from the logo. */
import { MARKS, C, SANS, SERIF, esc, telHref, taglineHTML, a, hruleInner, OPEN, CLOSE }
  from './designs.mjs';

/* ── the logo is a bar chart climbing to an arrow. Pull that out as a
      reusable ornament: four bars ascending in height AND saturation. ── */
function bars(){
  const spec = [[6,'#A6F0F0'],[10,'#6BE5E5'],[14,'#33D9D9'],[19,'#0DCFCF']];
  const cells = spec.map(([h,col],i) => `<td valign="bottom" width="5" style="width:5px; padding:0 ${i < spec.length-1 ? 4 : 0}px 0 0;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="5" style="border-collapse:collapse; width:5px;">
          <tr><td height="${h}" bgcolor="${col}" style="height:${h}px; line-height:${h}px; font-size:1px; background-color:${col};">&nbsp;</td></tr>
        </table>
      </td>`).join('');
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr>${cells}</tr></table>`;
}

const DOT = c => `<span style="color:${c}; padding:0 7px;">&bull;</span>`;

/* ══ A · SIGNAL ═══════════════════════════════════════════════════════
   The chart motif from the logo becomes the masthead. The person leads;
   the brand signs off at the bottom. No logo block, no rules top-side.  */
export function tplSignal(d){
  const line2 = [];
  if(d.phone) line2.push(a(telHref(d.phone), d.phone, C.muted));
  if(d.web)   line2.push(a(d.web.href, d.web.label, C.muted));
  if(d.li)    line2.push(a(d.li.href, d.li.label, C.muted));

  const tag = taglineHTML(d.tagline, 9.5, C.muted);

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="460" style="border-collapse:collapse; width:460px; mso-table-lspace:0pt; mso-table-rspace:0pt;">
    <tr><td style="padding:0 0 11px 0;">${bars()}</td></tr>
    <tr><td style="padding:0 0 3px 0; font-family:${SANS}; font-size:20px; line-height:25px; mso-line-height-rule:exactly; font-weight:bold; color:${C.ink}; letter-spacing:-.35px;">${esc(d.name)}</td></tr>
    <tr><td style="padding:0 0 14px 0; font-family:${SANS}; font-size:12.5px; line-height:17px; mso-line-height-rule:exactly; color:${C.muted};">${esc(d.role)}<span style="color:${C.line};">&nbsp;&nbsp;&#183;&nbsp;&nbsp;</span><span style="color:${C.ink}; font-weight:600;">InsightsTap</span></td></tr>
    <tr><td style="padding:0 0 3px 0; font-family:${SANS}; font-size:13.5px; line-height:19px; mso-line-height-rule:exactly;">${a('mailto:'+d.email, d.email, C.ink, 'font-weight:600;')}</td></tr>
    ${line2.length ? `<tr><td style="font-family:${SANS}; font-size:12.5px; line-height:19px; mso-line-height-rule:exactly; color:${C.muted};">${line2.join(DOT(C.bright))}</td></tr>` : ''}
    ${tag ? `<tr><td style="padding:15px 0 12px 0;">${hruleInner(C.line)}</td></tr>
    <tr><td>
      ${OPEN}<tr>
        <td valign="middle" style="padding:0 9px 0 0;"><img src="${esc(d.logo)}" width="22" height="22" alt="InsightsTap" style="display:block; width:22px; height:22px; border:0; outline:none;"></td>
        <td valign="middle" style="font-family:${SANS}; font-size:9.5px; line-height:15px; mso-line-height-rule:exactly; font-weight:bold; letter-spacing:1.4px; text-transform:uppercase;">${tag}</td>
      </tr>${CLOSE}
    </td></tr>` : ''}
  ${CLOSE}`;
}

/* ══ B · BANDLINE ═════════════════════════════════════════════════════
   Three lines, nothing else. Wide and shallow — the smallest vertical
   footprint of anything here, so reply chains stay readable.           */
export function tplBandline(d){
  const contacts = [a('mailto:'+d.email, d.email, C.ink, 'font-weight:600;')];
  if(d.phone) contacts.push(a(telHref(d.phone), d.phone, C.muted));
  if(d.web)   contacts.push(a(d.web.href, d.web.label, C.muted));
  if(d.li)    contacts.push(a(d.li.href, d.li.label, C.muted));

  const tag = taglineHTML(d.tagline, 9.5, C.muted);

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="500" style="border-collapse:collapse; width:500px; mso-table-lspace:0pt; mso-table-rspace:0pt;">
    <tr>
      <td valign="top" style="padding:0 16px 0 0;">
        ${OPEN}
          <tr><td style="padding:0 0 5px 0; font-family:${SANS}; font-size:13px; line-height:18px; mso-line-height-rule:exactly; font-weight:bold; letter-spacing:1.4px; text-transform:uppercase; color:${C.ink};">${esc(d.name)}<span style="color:${C.bright}; padding:0 8px;">&bull;</span><span style="font-weight:normal; letter-spacing:.3px; text-transform:none; color:${C.muted};">${esc(d.role)}</span></td></tr>
          <tr><td style="font-family:${SANS}; font-size:12.5px; line-height:18px; mso-line-height-rule:exactly; color:${C.muted};">${contacts.join(DOT(C.line))}</td></tr>
        ${CLOSE}
      </td>
      <td valign="top" align="right" width="42" style="width:42px;">
        <img src="${esc(d.logo)}" width="42" height="42" alt="InsightsTap" style="display:block; width:42px; height:42px; border:0; outline:none;">
      </td>
    </tr>
    <tr><td colspan="2" style="padding:12px 0 0 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse; width:100%;">
        <tr><td height="2" bgcolor="${C.bright}" style="height:2px; line-height:2px; font-size:1px; background-color:${C.bright};">&nbsp;</td></tr>
      </table>
    </td></tr>
    ${tag ? `<tr><td colspan="2" style="padding:9px 0 0 0; font-family:${SANS}; font-size:9.5px; line-height:14px; mso-line-height-rule:exactly; font-weight:bold; letter-spacing:1.4px; text-transform:uppercase;">${tag}</td></tr>` : ''}
  ${CLOSE}`;
}

/* ══ C · NIGHTSHIFT ═══════════════════════════════════════════════════
   Dark card. The one place the real brand teal works as text: #0DCFCF
   is 1.94:1 on white but 9.14:1 here.                                  */
export function tplNightshift(d){
  const BG='#0F1A1D', RULE='#26383C', HI='#FFFFFF', BODY='#E8F4F5', DIM='#8FA3A8';

  const line2 = [];
  if(d.phone) line2.push(a(telHref(d.phone), d.phone, DIM));
  if(d.web)   line2.push(a(d.web.href, d.web.label, DIM));
  if(d.li)    line2.push(a(d.li.href, d.li.label, DIM));

  const tag = taglineHTML(d.tagline, 9.5, DIM);

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="460" style="border-collapse:collapse; width:460px; mso-table-lspace:0pt; mso-table-rspace:0pt;">
    <tr><td bgcolor="${BG}" style="background-color:${BG}; padding:21px 24px 19px 24px;">
      ${OPEN}
        <tr><td style="padding:0 0 15px 0;">
          ${OPEN}<tr>
            <td valign="middle" style="padding:0 14px 0 0;"><img src="${esc(d.logo)}" width="42" height="42" alt="InsightsTap" style="display:block; width:42px; height:42px; border:0; outline:none;"></td>
            <td valign="middle">
              ${OPEN}
                <tr><td style="padding:0 0 4px 0; font-family:${SANS}; font-size:17px; line-height:22px; mso-line-height-rule:exactly; font-weight:bold; color:${HI}; letter-spacing:-.2px;">${esc(d.name)}</td></tr>
                <tr><td style="font-family:${SANS}; font-size:10px; line-height:14px; mso-line-height-rule:exactly; font-weight:bold; letter-spacing:1.5px; text-transform:uppercase; color:${C.bright};">${esc(d.role)}</td></tr>
              ${CLOSE}
            </td>
          </tr>${CLOSE}
        </td></tr>
        <tr><td style="padding:0 0 13px 0;">${hruleInner(RULE)}</td></tr>
        <tr><td style="padding:0 0 3px 0; font-family:${SANS}; font-size:13px; line-height:19px; mso-line-height-rule:exactly;">${a('mailto:'+d.email, d.email, BODY, 'font-weight:600;')}</td></tr>
        ${line2.length ? `<tr><td style="font-family:${SANS}; font-size:12.5px; line-height:19px; mso-line-height-rule:exactly; color:${DIM};">${line2.join(DOT(C.bright))}</td></tr>` : ''}
        ${tag ? `<tr><td style="padding:14px 0 0 0; font-family:${SANS}; font-size:9.5px; line-height:14px; mso-line-height-rule:exactly; font-weight:bold; letter-spacing:1.4px; text-transform:uppercase;">${tag}</td></tr>` : ''}
      ${CLOSE}
    </td></tr>
    <tr><td height="3" bgcolor="${C.bright}" style="height:3px; line-height:3px; font-size:1px; background-color:${C.bright};">&nbsp;</td></tr>
  ${CLOSE}`;
}
