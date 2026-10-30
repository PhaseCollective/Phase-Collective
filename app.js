'use strict';
// Catalogue and local drafting only. No order, payment or message submission exists.
const products = [
 {id:'tirz20',name:'Tirzepatide',strength:'20mg',price:25,reports:[['View COA','https://verify.janoshik.com/tests/234599-Sample_1_20mg_C3EHW1QHDUUZ']]},
 {id:'tirz30',name:'Tirzepatide',strength:'30mg',price:35,reports:[['View COA','https://verify.janoshik.com/tests/230648-TR30_Red_Cap_flip_off_BHL9G41C4QJ6'],['Endotoxin report','https://verify.janoshik.com/tests/230649-TR30_Red_Cap_flip_off_TX3KVD3AFLZ5']]},
 {id:'ta1',name:'Thymosin Alpha-1',strength:'10mg',price:35,reports:[['View COA','https://verify.janoshik.com/tests/237208-Thymosin_Alpha1_10mg_Flip_Off_1AQ62JZPDJXS'],['Endotoxin report','https://verify.janoshik.com/tests/237209-Thymosin_Alpha1_10mg_Flip_Off_EJYFNYGKAQQ6']]},
 {id:'semax',name:'Semax',strength:'10mg',price:15,reports:[['View COA (PDF)','https://coas.freedomdiagnosticstesting.com/Pept2606100109.pdf']]},
 {id:'cjc',name:'CJC-1295 (No DAC)',strength:'10mg',price:35,reports:[['View COA','https://verify.janoshik.com/tests/164573_XM1AIYFNLSBV']]},
 {id:'kpv',name:'KPV',strength:'30mg',price:35,pending:true,reports:[]},
 {id:'ghk',name:'GHK-Cu',strength:'50mg',price:15,reports:[['View COA','https://verify.janoshik.com/tests/235261-Sample_1_7YLQARHX32BH'],['Endotoxin report','https://verify.janoshik.com/tests/235262-Sample_1_38NB2DZW1QCV']]},
 {id:'bpc',name:'BPC-157',strength:'10mg',price:15,pending:true,reports:[]}
];
const basket = Object.create(null);
const money = n => new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP'}).format(n);
const el = id => document.getElementById(id);
function controls(p){const n=basket[p.id]||0;return `<div class="controls"><button data-id="${p.id}" data-delta="-1" aria-label="Remove ${p.name} ${p.strength} from draft" ${n?'':'disabled'}>−</button><span aria-label="Draft quantity">${n}</span><button data-id="${p.id}" data-delta="1" aria-label="Add ${p.name} ${p.strength} to draft" ${n>=99?'disabled':''}>+</button></div>`;}
function render(){
 el('catalogue').innerHTML=products.map(p=>`<article class="card"><div class="card-top"><div><h2>${p.name}</h2><div class="strength">${p.strength}</div></div><div><div class="price">${money(p.price)}</div><div class="small">Proposed price</div></div></div><span class="tag ${p.pending?'pending':''}">${p.pending?'Awaiting arrival & batch verification':'Reports supplied · not verified'}</span><div class="links">${p.reports.map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`).join('')||'<span class="small">COA unavailable pending batch verification</span>'}</div><div class="select-row"><span>Local enquiry draft only</span>${controls(p)}</div></article>`).join('');
 const chosen=products.filter(p=>basket[p.id]>0);const total=chosen.reduce((s,p)=>s+p.price*basket[p.id],0);
 el('count').textContent=chosen.reduce((s,p)=>s+basket[p.id],0);el('total').textContent=money(total);
 el('basket-items').innerHTML=chosen.length?chosen.map(p=>`<article class="card"><h2>${p.name}</h2><p>${p.strength} · ${money(p.price)} proposed per vial</p>${p.pending?'<p class="small">Awaiting arrival & batch verification</p>':''}${controls(p)}</article>`).join(''):'<div class="card">Your enquiry draft is empty. Add items from the collection.</div>';
 el('enquiry').value=chosen.length?'PHASE Collective — local research enquiry draft\nNOT AN ORDER — submission disabled pending UK regulatory review.\n\n'+chosen.map(p=>`${p.name} ${p.strength} × ${basket[p.id]} — proposed ${money(p.price*basket[p.id])}${p.pending?' (awaiting arrival & batch verification)':''}`).join('\n')+'\n\nProposed-price estimate: '+money(total)+'\nPrices are not offers for sale. Supplied reports have not been verified.':'';
 el('copy').disabled=!chosen.length;el('clear').disabled=!chosen.length;
}
function page(id){['collection','basket','information'].forEach(key=>{el(key).hidden=key!==id;});document.querySelectorAll('[data-page]').forEach(b=>{if(b.dataset.page===id)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});}
document.addEventListener('click',event=>{const b=event.target.closest('button');if(!b||b.disabled)return;if(b.dataset.page)page(b.dataset.page);if(b.dataset.id){const p=products.find(p=>p.id===b.dataset.id);if(!p)return;const id=p.id,delta=Number(b.dataset.delta);if(![-1,1].includes(delta))return;basket[id]=Math.min(99,Math.max(0,(basket[id]||0)+delta));render();const activeSection=el('basket').hidden?el('collection'):el('basket');const replacement=activeSection.querySelector(`[data-id="${id}"][data-delta="${delta}"]`);if(replacement&&!replacement.disabled)replacement.focus();el('feedback').textContent='';}});
el('clear').addEventListener('click',()=>{Object.keys(basket).forEach(k=>delete basket[k]);render();el('feedback').textContent='Selection cleared.';});
el('copy').addEventListener('click',async()=>{if(!el('enquiry').value)return;try{await navigator.clipboard.writeText(el('enquiry').value);el('feedback').textContent='Local draft copied. Nothing has been submitted.';}catch{el('enquiry').focus();el('enquiry').select();el('feedback').textContent='Select and copy the highlighted draft manually. Nothing has been submitted.';}});
const tg=window.Telegram?.WebApp;
if(tg){try{tg.ready();tg.expand();tg.MainButton?.hide();if(tg.isVersionAtLeast?.('6.1')){tg.setHeaderColor('#F6F2E9');tg.setBackgroundColor('#F6F2E9');}const safe=()=>{document.documentElement.style.setProperty('--safe-top',`${Math.max(tg.safeAreaInset?.top||0,tg.contentSafeAreaInset?.top||0)}px`);document.documentElement.style.setProperty('--safe-bottom',`${Math.max(tg.safeAreaInset?.bottom||0,tg.contentSafeAreaInset?.bottom||0)}px`);};safe();tg.onEvent?.('safeAreaChanged',safe);tg.onEvent?.('contentSafeAreaChanged',safe);}catch{/* Standalone catalogue remains usable if Telegram APIs are unavailable. */}}
render();
