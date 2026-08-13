const MARKS = {"round": "data:image/png;base64,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", "square": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAflBMVEUMzs79/v4L0M/R+Pc20tEozM238vKl7e1s3NxO1tRs4eCQ5+d04d1w3uGA5dzD7+9f4Ndf3OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAei+sNAAAAIHRSTlP///////////////////////8AAAAAAAAAAAAAAAAAALN0qXIAAASaSURBVHja7ZyJkqQgDEAxgIroHv//sysgigquCmp2K6mp6aoe7X6TE5DAGAkJCQkJCQkJCQkJyf8hAOYHOyRqUIMFgFiLFnB6xWxh94IUr23amRSZ4swv1VRV1SjriUgsHTJIXTnRIjD398r0imp5NYuWPqbRxIWqq1B4yyZD40gtoqm2UissoQKj8y3WDexsouVLyNnHAufjrdy64h4R3q0barEut0BzMJt3ermmUvrlwBF6Y1Lz9aFH8n51fVOpt2LbfIvs+S4owKqVb6LFp6KRWL5j5K3zjbaEcKDQha4oLPYYTebN7i0nDJzP1Y5JfxNiaHzeOc3at7h4xbxhaglSXqicIHdrx+xuaR5W4T61xD0Alqu4tEhepw/GCex0w7uU09socnrurYHVfI98NjZC7zL+D0eqNhfXDmj5r/qHAtl+o+z4iXo7UYMdRtj8aFLMrELxUEGBmPOdcSeYUsyc0x8B3AyqtDg1TPSOoVdjnbYg4ZJ+t3UNTn8C+BQTxgkU43PDgrCuGesCXAl9vRku6uIm3qWWS6lM7Qa0qmzshgMUP+E47UbjxfUOsCmpvURdO2vlVYpZxUkh/W1Sy4J31siSRwCL1ZNVapG3iqOuYvLDjR1z52vb1ALXVxwEjwJylR/JsboGlwHjCiwSJ0FqGW4uFkAkxSxxAnkZenFuU9fuLf2BrJOA2YNrD9jcXCWAVIopVU8mwCHEg6vLDvwAMLeeuA//mVHX0xEyRV4JwPo2n5nEV8eSFycFAPVfAPPqiQfMKEPV3yQrTnI1OAL2w9B3QxNF093QKvWpBv1/1j40WMg3sX3yBKyLAgLkPpcqAOj02OHV4D8MWJEGE09MTmtQvA8IbHpiDD5Awb3dPTBQuGNiSHEnAOEDwG1eA1SA16L4dUCA3+1OFB7A+OxIYzKxiE4tU7WYAAnwc8ChPCCwVSULa9oNwPYJDcLVKebbgOM0qI1IjwPQmrJOzG6vA3bPmLhOLFMhAWRJQBRRbD4xCQhIgqScBnvsgJoACZAACZAAcQM2BEiABHgMWJMG8QCGTTYlAUutUa92k5cD5Plb9EIT+/WNgoCyECBX4apHWcBCuz78phSkGnRtGN7IiADHLSX1amPU8cT9DiAU7cYQpU0s8gFhvzkPFSCw/bZ9XBp0W8x02L3S4AFcdrvFqTIBy/W1waYH6CKguX+/LYUX2mO7bMXv+C1Abe/ut9f38tkGsEsmHv+yMfFRkwcrtB/4mg+2W+djD3UhtvyOD672wD3X8wmwSTlnfXDVBtDLh44RmHNONOW4kVMcUOlIG8CjndERVzx4TtLy9zt65c4VuQ3L4+2gpvvvHb6IK6ZNnNEGkBfUa1fkAo4BGzUfJcDeOhsgrH7ph4m+reDVtuIpKYbVz06sRMr5JPvojA257uUQSef7otEddo12nUoMqtinB0D0h6OclrFPj4A4qH6+Kf/j0yDs1ycG3I1gOI4hiQ+4p4n0p+o7qH52KQKXrFxRSxwnuSRSTqMYzsOs2C8edM5iOpppPgJCdrWbrwEgO/go2iwLgPVkKxISEhISEhISEpJC8gfG2C7Hs+ZpcAAAAABJRU5ErkJggg==", "teal": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAwFBMVEUAAAAMzs4M1tYA//8AqqoMzMwAf38L0tIL0tIL0dELzs4D0dEL0tILyckL0dEL0dELzs4GvLwLzs4Lzs4Lzs4G5uYN5eUAmpoktrYk2toAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRQeM8AAAAMHRSTlMA/vwBAysC0JCw0wxwES9STgixkmsK/wUHBwAAAAAAAAAAAAAAAAAAAAAAAAAAAACliMSpAAAHQUlEQVR42u2dW5ujKBCGlULUeCRJp2f//x9d8JQoWKBAZJ9ZLuYi3WNeC76qAq3qJPnLBogRNd773wgHFWBZXWQCkUaIxwReVxIxyjZCK0qgTOKlqUQUVmQsJjwxpVkh6YYRnRUFSFOThW9ElGuRRoEILOFd/okXFaKc3bbc4s2I1eWIXOAVOrwJsZaIF3o+sfiK7eIjK8S8+73MLQrP91vnG6CiUBHFnbD9wBPS83VbvLJf+Zv502wPBsJ6vlKxFV089hqxaBW1APwWfcLCeb6NNiZBwBTztqYlBd+ohSb1K2+C2FBar1Idc7MYafj5FjGv6ec8Q9LKgBMCUFzy96ksvvUyk/J+KGrp34sOoMqJ+Ozp3QkJCqbVxlqom+j8vg2Y76Agw0eZ32WoiRtSGzAsPKOMxO92I+EwwcMnZeMz1IBiFrm2mh0folHLqx6ndJjg8QK1t2UoTdJotQFIjt18IsoZheFGn+/UrPU0yeLCXNFGYUr7hpta/hd5THzZB3TJfUQUqY1e0UY7JFsWdh//5ywJCiX5uEztrmT5LX2p8xpgFxNHxNe43mjSr6/UOi5D+Q2qdNd+13h/XCDmjbS3WJf5WtulU7oD2pxqiBvHLsL7ajLgg6Rb50Pd9huKNrLDuRLAlLzQpFO2B3kF7PRenGu1QdmJqRh9NM+VBFyo+5QJGR334kr+CcwhCa+JZm/Qn9CJPuWruVMizD5d4HqS4UTUVVK+g9rQLelSu8MixUETyrhRE3dtKBPc67eAcxC01wbtdSkfZY4eVaOQ2RlSBgfPqZS44XwepFVIuqQ11CHl282pjq2bluwDksYqcFJNyofnVEckXO7yLamO6RIabZSZnz02qDFEm26jl9DsN9wc8+cp2K5CZmfIDToB3V4cfJ1QYAqx0wmwWtmLc2/HE6CPIQec4caJ+ogbNjFkRXjHAR8khDYMMWSbNFCrW9TtxR1jSJUb+fCkQWR+M6DUBvN7ekffG02ccP8s5L1VENpoPB/dATTEDnB/m7wASi35PnSC8SjGhrDYM6EAnI5L0gy882XEFlCYkBoAnfepp1zMR94FOxepCDmRO7pmMSrhjqv5sKB3wMbegKOrQbcz3gGZlN888PU3jJ2T63CA0oRtJ0eP5lvCdmVRd/3OyfobMM3CPb+4EQSvqfCJaMMBilMFzsU5YIUCCojhtwxb6nAWFI4CBeRwmQUtAe0OJa4DxJ87weWAJHpA/r8FAwNerWLD90ZgwdgBU/zJZwRT3IYGBGR4AUwjX4OOgCzpit0xXNIE2IYFFFvLF9kZr84MmBoBHVVMkb3v+KDGBNj91wEdp9gHIA3pZsIDOk/xIzRgwCm2UnF/4RRbAdYmFe9bEIAhw9cafIZ2M2VQCzLMglnWZvuj8gbIz+2Lh/PRvShG5hB1KWCJAM4vHLgDPs8C4k8p0wXwbngYbAJ8nAe8WwGWjoBFaAtGC9hNL93d47YgeFiDEBbQfYoh7BS7A1IHP/gVCwYGdF+DkQPez67Bb02xA2D+FQuW8QOyuAGjn+LTgIkBsPMnEggESA3xxlokZwFvxPzKFXgATE4CUtyCzwnwfhkg/l7dYsHbZYCNnQVvziI5C1g5W7AICQgmC86AuSNgGQrwOX67uwXhLGBl4WY8ANpakKgW9AX4kweaYitAcLYgOw2YWgHmlwFWHgDBI2B7zoL09i3AZl1GZmtBJGKPhwZGQEs3QzYvAC+n1w6AVha09INzbQsY6pAUwMY8xbibye2meOkxAepPXAFxC1oDjq/xLyUu4M+CbslCtn6VfyguZQcAq9DZTLNTnguWU4wBlu6bpkSpv54K1ShPOl+AuEjuCRyuYB9KNrgd4D8I4N0OkJ0olpRq6Yn57XZRrIACgrsF51JspcdE/7QDzB2n2Kp8UhbsKvXExBcgKpKXZREv1agltQFszFOM6Ug6DTjTpCq1q7AwrUGGAo5u16W02ALwB51izIKyBOhgbSaoxdmpQ5ggN/n1O78ylo7arT+8LYoJELHgTeJpAafqvTMtSTRqwUWCAf6RgKDoiDiVVWtaLJwFzH9EVFeN7Fy9B4A1/trkUqgFG+BDDEh9F95aCHoBxETS6FoO9F4Kb8UdUlQtNoCkybbtOPKa+yod1XSBOgxYbruFeC0uBE0XqEOAqTbRBM+N1NqdpWghEo10KQRoB9brGw1aWFDpFhKkY5naBWoCBDBEEiVuJEmofoNcVYuwYAV2FvRc9W0ZW0hZDf7MaMGpVQ0Eb7jaKj3ThiYvBguOVd/AvtN0VdejCVXxsTZOHqyo2VqhjvrL7Toh0Wyt7kg30cExJ8ml3WvTfT6/HRGOtCcubHonSG2wb+PZbq3GuMHgwibPWCYWOG6cbGy21QZPkst7PWv3LYGSlvPdskkM0rXt4+TcgS1IhC7fTwnynsfWWv4d/mTUvbYLNRL+pM8ZD1qi/OMBQz4bL96EGPGfXpjKO1nyV41/Ab4La/Mqy3sEAAAAAElFTkSuQmCC", "white": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAwFBMVEUAAAD///////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMq5OnAAAAMHRSTlMA/QTQLbJrllIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABvnHI/AAAEWklEQVR42u2ci3LjIAxFZfEw///Fa5uHsRFOCNjWdKVpZzbtNjmR0EUQBICYmJiYmJiYmJiYmJjYM4aIyzdzQgygPPH8FwJTP3o0T8cTcPlys+PlwB1l/Zc20zQZF0LNbfyBnidvs/b5woFxT1u0akpmMaU0B+XbBp+ZclM2ZQqyiu5uxpHJjG+EWGfRzeJsNINUOQ0+ZXPYkC1JGWPiPEMdR182+NQKdAi32rPFgzn7mAJ5b+Q0QV1OiA5TKi3fZnKPDcPVJVk8TU6S5/SWLf7H4JaH+FyEnTrLCq2K85ot26/XH9onQrwiaFNEN75yEWc/FMFuD/T9Qd5en4puVhKGmTm8AT9gVXrwrLSQeZlPL6vTFos+9XlyA6VPgWMOZHMaVb36N2I3B7vkcbyt6C5UJElLrXpd/7PxCr2/KwsI+ER04+Crrk+8ux0EiUlu1/dUjIS0XLxImNVC7niJ2YOMI32IO56hJlr8WHNHiUnmhvovTvD54MtKFfxiyokSk7w/0IEpSrm0OGyomHOJ2WvuYS5EUlpayiY8ZEiwYfOJH83FvNaygXCQmH1yGUToi6qztEBThE8ZEvJkSIz9gugsLdgoAqgIwO48iSp2Lplb8IKrKQeGPOlyYzmvtT6hd7dWJKDSfRUD0vMatmvAPNFm+tb2K58hS+bGZ3FTzTrXJ/ng9tLSvGZEWmLyPMEuD6p8XvthUYsViTlW2t2A7tddScSKxOTzCXaH2PweiIsMyequfsCfn6QqMYfieoQHfx4m1w7sW4T2A15JTL7X+R4garsZqTTzvPzG6VdDHM3RIti9FOkH9OpJVgtK9260D/MgLdb9ezQCKIDEHzQATu8AkhtJTACxBIw7SFwAKQNGgPVtOBaA6wq1NF0HdI8DaqoiAO6A9SQRQAH8m4BYMw6AV4t3JoCLOUuYP0DBIMSHDa/z+qIV0I4HxDogcAA8fSTID/AqxAIogAL4HwLON+xujQXs37EQQAH824BGAAVQAAXwABhO2bEETJ9ZDQVUo0PsN8kZAiqXzujxBMyO0nIFTIeR2QGa4mDUSMDezyEWGuLINCNAKA7nrUFm5cHi2L7jFuLiaLxxg5OkN02Kxov68ZxWQONGHZc/H0FvBKQ/ClPxrC7A+PalJkDys7oPbQDDug+/DTGeDvZUmzxui3PTGAzHJQFgfPu1Uz+MweXv5umrHpRevPpQvPZg2QaAo9tQMek2PRSvAMvpsv2wbvdQrAMaW7YBwJMdk58Ab5SW+snoMs5fAIaT2ABP9WSb47SK14BGP9j0HtvR1NcejPMa4HMN21Qngr4efMO1pbWXo+LBWb91dcVZcqyji6p38FLbIX1DwIfW1Ocu+biscl7EO7aXVhBn/fJ9GvvNCdTsl7W3Abx7ycxZcvKudmB4mcu70vKV5OQdRqyui/Kzn0qXCnHyYTxPa00cfMgLLzYhwp4biBxvjeJ+dRkAczwxMTExMTExMbGj/QMGXC8QmRhqpwAAAABJRU5ErkJggg=="};


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



/* The approved signature designs. Pure module — no side effects.
   Crest / Ribbon / Split ship; Obsidian is kept as a spare. */

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
function tplObsidian(d){
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
function tplCrest(d){
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
function tplRibbon(d){
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
function tplSplit(d){
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
function tplQuiet(d){
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
