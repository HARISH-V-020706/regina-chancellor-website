const $=s=>document.querySelector(s),S=D.sources,H=(x)=>x.src?` · <a class="small" href="${S[x.src]}" target="_blank" rel="noopener">Source</a>`:"";
const tag=x=>x.ph?'<span class="ph-tag">Placeholder</span><br>':"";
const sec=(id,eb,title,body,cls="")=>`<section id="${id}" class="${cls}"><div class="wrap rv"><p class="eyebrow">${eb}</p><h2>${title}</h2>${body}</div></section>`;
$("#mn").innerHTML=D.nav.map(n=>`<li><a href="#${n[0]}">${n[1]}</a></li>`).join("");
$("#pt").innerHTML=D.portrait?`<img src="${D.portrait}" alt="Portrait of Dr. Regeena J. Murali">`:`<div class="ph"><span>RM</span>Official portrait to be added<br>(set <code>D.portrait</code>)</div>`;
const A=D.about;
$("#app").innerHTML=
sec("about","About Her",A.title,`<div class="two"><div>${A.paras.map(p=>`<p style="margin-bottom:20px">${p}</p>`).join("")}</div><div><div class="quote">${A.quote}</div><p class="small">Biographical statements are drawn from the cited public sources. Gaps are shown as placeholders rather than assumed.</p></div></div>`)+
sec("journey","Her Journey","Milestones in Leadership",`<div class="tl">${D.timeline.map(i=>`<div class="it rv"><div class="yr">${i.y}</div><h3>${i.t}</h3><p class="small">${tag(i)}${i.d}${H(i)}</p></div>`).join("")}</div>`,"dark")+
sec("qual","Qualifications","Academic Foundation &amp; Intellectual Journey",`<div class="grid">${D.quals.map(q=>`<div>${tag(q)}<h3>${q.deg}</h3><p>${q.inst}</p><p class="small">${q.yr} · ${q.spec}</p></div>`).join("")}</div><p class="small" style="margin-top:14px">Degrees and institutions are intentionally left blank until verified.</p>`)+
sec("ach","Recognition","Achievements &amp; Leadership",`<div class="grid">${D.ach.map(a=>`<div>${tag(a)}<h3>${a.t}</h3><p class="small">${a.d}${H(a)}</p></div>`).join("")}</div>`)+
sec("vision","Leadership",D.vision.title,`<p style="max-width:40em;margin-bottom:34px">${D.vision.intro}</p><div class="grid">${D.vision.themes.map(t=>`<div><h3>${t}</h3></div>`).join("")}</div>`)+
sec("educity","Institutional Vision",D.educity.title,`<div class="two"><div><p class="yr">The Founding Legacy</p><p style="margin-top:10px">${D.educity.legacy}</p></div><div><p class="yr">Her Leadership</p><p style="margin-top:10px">${D.educity.hers}</p><p style="margin-top:14px"><a href="${S.uni}" target="_blank" rel="noopener" class="small">Official university website ↗</a></p></div></div>`,"dark")+
sec("research","Scholarship","Research &amp; Scholarly Contributions",`<div class="grid">${D.research.map(r=>`<div>${tag(r)}<h3>${r.t}</h3><p class="small">${r.d}</p>${r.link?`<p><a class="small" target="_blank" rel="noopener" href="${S[r.link]||r.link}">View source ↗</a></p>`:""}</div>`).join("")}</div>`)+
sec("expertise","Expertise","Areas of Expertise &amp; Initiatives",`<div class="grid">${D.expertise.map(e=>`<div><h3>${e}</h3></div>`).join("")}</div><p class="eyebrow" style="margin:40px 0 14px">Initiatives (editable)</p><div class="grid">${D.init.map(e=>`<div><h3>${e}</h3><span class="ph-tag">Add verified details</span></div>`).join("")}</div>`)+
`<section class="phil"><div class="wrap rv"><p class="eyebrow">Her Philosophy</p><h2>Education Is More Than Knowledge. <em>It Is the Foundation of Possibility.</em></h2><p class="small" style="max-width:34em;margin:auto">A guiding theme for this profile. Direct, attributed statements will replace it as verified quotations are added.</p></div></section>`+
sec("gallery","Gallery","Moments &amp; Occasions",`<div class="gal">${D.gallery.map((g,i)=>`<button data-i="${i}"><span class="ph-tag" style="align-self:flex-start">Photo slot</span><h3 style="font-size:22px">${g[0]}</h3></button>`).join("")}</div>`)+
sec("media","Media &amp; Engagements","News &amp; Public Engagement",`<div class="list">${D.media.map(m=>`<a href="${S[m.u]}" target="_blank" rel="noopener"><span class="serif" style="font-size:24px">${m.t}</span><span class="small">${m.m} ↗</span></a>`).join("")}</div>`)+
sec("contact","Contact","Official Links",`<div class="grid">${D.contact.map(c=>S[c[1]]?`<div><h3>${c[0]}</h3><a href="${S[c[1]]}" target="_blank" rel="noopener" class="small">${S[c[1]]}</a></div>`:`<div><span class="ph-tag">Placeholder</span><h3>${c[0]}</h3><p class="small">${c[1]}</p></div>`).join("")}</div>`,"dark");
$("#fl").innerHTML=D.nav.slice(1).map(n=>`<a href="#${n[0]}">${n[1]}</a>`).join("")+`<a href="${S.uni}" target="_blank" rel="noopener">jeppiaaruniversity.ac.in ↗</a>`;
// interactions
const nv=$("#nv"),mn=$("#mn"),mb=$("#mb");
addEventListener("scroll",()=>{nv.classList.toggle("s",scrollY>60);$("#pt").style.transform=`translateY(${Math.min(scrollY*.06,30)}px)`},{passive:true});
mb.onclick=()=>{const o=mn.classList.toggle("o");mb.setAttribute("aria-expanded",o)};
mn.onclick=e=>{if(e.target.tagName==="A")mn.classList.remove("o")};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
const lb=$("#lb");
document.querySelectorAll(".gal button").forEach(b=>b.onclick=()=>{const g=D.gallery[b.dataset.i];$("#lbt").textContent=g[0];$("#lbd").textContent=g[1];lb.classList.add("o");$("#lbx").focus()});
$("#lbx").onclick=()=>lb.classList.remove("o");lb.onclick=e=>{if(e.target===lb)lb.classList.remove("o")};
addEventListener("keydown",e=>{if(e.key==="Escape")lb.classList.remove("o")});
