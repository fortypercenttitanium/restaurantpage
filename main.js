!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const i=document.querySelector(".content"),o=(t,e)=>{const n=document.createElement(t);return Array.isArray(e)?n.classList.add(...e):n.classList.add(e),n},d=o("div",["home-container","window"]),r=o("h2","subtitle");r.textContent="Serving chumps since the year 3000";const a=o("img","cta");a.src="../images/ordernow.png",d.appendChild(r),d.appendChild(a);const s=o("div",["menu-window","window"]),c=o("h1","title");c.textContent="Menu";const l=o("img","menu");l.src="/images/menu.png",s.appendChild(c),s.appendChild(l);const p=o("div",["contact","window"]),h=o("p","contact-info"),u=o("img","map"),m=o("img","modal-map"),g=o("div","img-modal"),f=o("div","close-modal");h.innerHTML="<strong>Bender's Burgers</strong><br>\n    301 King St.<br>\n    Springfield, OR<br>\n    (555) 555-1234",f.textContent="close",u.src="/images/map.png",m.src="/images/mapzoom.png",u.addEventListener("click",()=>{g.style.display="flex"}),f.addEventListener("click",()=>{g.style.display="none"}),g.appendChild(f),g.appendChild(m),p.appendChild(h),p.appendChild(u),p.appendChild(g);const v=o("nav","navbar"),b=o("div","display-window");class w{constructor(t,e){this.name=t,this.class=["nav",t+"-tab"],this.parent=o("div",this.class),this.text=o("span",t+"-tab-text"),this.window=e,this.init()}init(){this.text.textContent=this.name,this.parent.appendChild(this.text),v.appendChild(this.parent)}switchWindow(){b.textContent="",b.appendChild(this.window),document.querySelectorAll(".nav").forEach(t=>{t.classList.remove("active")}),this.parent.classList.add("active")}}const C=new w("home",d),y=new w("menu",s),x=new w("contact",p);v.addEventListener("click",t=>{"home"===t.target.textContent?C.switchWindow():"menu"===t.target.textContent?y.switchWindow():"contact"===t.target.textContent&&x.switchWindow()}),C.switchWindow();const S=o("div","banner"),L=o("div","ban-con"),O=o("div","ban-con"),j=o("div","ban-con"),E=o("img",["logo","banner-child"]),M=o("h1",["header-title","banner-child"]),_=o("h1",["header-title","banner-child"]);M.textContent="Bender's",_.textContent="Burgers",E.src="/images/bbicon.png",L.appendChild(M),O.appendChild(E),j.appendChild(_),S.appendChild(L),S.appendChild(O),S.appendChild(j);const P=[o("div","bgimg"),S,v,b];(()=>{P.forEach(t=>{i.appendChild(t)})})()}]);