(()=>{"use strict";var e={862:(e,t,n)=>{function d(){const e=document.createElement("div");e.classList.add("contact-div");const t=document.createElement("h2");t.textContent="Contact Us";const n=document.createElement("form");n.setAttribute("id","contact-form");const d=document.createElement("label");d.setAttribute("for","name"),d.textContent="Name:";const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("id","name"),a.setAttribute("name","name"),a.setAttribute("required","");const c=document.createElement("label");c.setAttribute("for","email"),c.textContent="Email:";const o=document.createElement("input");o.setAttribute("type","email"),o.setAttribute("id","email"),o.setAttribute("name","email"),o.setAttribute("required","");const r=document.createElement("label");r.setAttribute("for","message"),r.textContent="Message:";const i=document.createElement("textarea");i.setAttribute("rows","5"),i.setAttribute("id","message"),i.setAttribute("name","message"),i.setAttribute("required","");const m=document.createElement("button");return m.setAttribute("type","submit"),m.textContent="Send",n.appendChild(d),n.appendChild(a),n.appendChild(c),n.appendChild(o),n.appendChild(r),n.appendChild(i),n.appendChild(m),e.appendChild(t),e.appendChild(n),e}n.d(t,{W:()=>d})},377:(e,t,n)=>{function d(){const e=document.createElement("div");e.classList.add("menu-tab");const t=document.createElement("h2");t.textContent="Menu";const n=document.createElement("ul");return n.classList.add("menu-items"),[{name:"Burger",price:"$10"},{name:"Fries",price:"$4"},{name:"Salad",price:"$8"},{name:"Pizza",price:"$12"},{name:"Pasta",price:"$10"}].forEach((e=>{const t=document.createElement("li"),d=document.createElement("h3");d.innerText=e.name;const a=document.createElement("p");a.innerText=e.price,t.appendChild(d),t.appendChild(a),n.appendChild(t)})),e.appendChild(t),e.appendChild(n),e}n.d(t,{C:()=>d})},556:(e,t,n)=>{function d(){const e=document.createElement("header"),t=document.createElement("h1");t.textContent="Restaurant Name";const n=document.createElement("nav"),d=document.createElement("ul"),a=document.createElement("li"),c=document.createElement("li"),o=document.createElement("li"),r=document.createElement("a");r.setAttribute("href","#"),r.setAttribute("id","Home"),r.textContent="Home";const i=document.createElement("a");i.setAttribute("href","#"),i.setAttribute("id","Menu"),i.textContent="Menu";const m=document.createElement("a");return m.setAttribute("href","#"),m.textContent="Contact",m.setAttribute("id","Contact"),a.appendChild(r),c.appendChild(i),o.appendChild(m),d.appendChild(a),d.appendChild(c),d.appendChild(o),n.appendChild(d),e.appendChild(t),e.appendChild(n),e}function a(){const e=document.createElement("main"),t=document.createElement("section");t.classList.add("hero");const n=document.createElement("h2");n.textContent="Welcome to our restaurant";const d=document.createElement("p");d.textContent="Enjoy our delicious food and great atmosphere.";const a=document.createElement("a");a.setAttribute("href","#"),a.classList.add("cta"),a.textContent="See our menu",t.appendChild(n),t.appendChild(d),t.appendChild(a),e.appendChild(t);const c=document.createElement("section");c.classList.add("featured-items");const o=document.createElement("h2");o.textContent="Featured Items";const r=document.createElement("div");r.classList.add("item");const i=document.createElement("img");i.setAttribute("src","../src/food1.jpg"),i.setAttribute("alt","Item 1");const m=document.createElement("h3");m.textContent="Item 1";const s=document.createElement("p");s.textContent="Description of Item 1";const l=document.createElement("a");l.setAttribute("href","#"),l.classList.add("cta"),l.textContent="Order now",r.appendChild(i),r.appendChild(m),r.appendChild(s),r.appendChild(l);const p=document.createElement("div");p.classList.add("item");const u=document.createElement("img");u.setAttribute("src","../src/food2.jpeg"),u.setAttribute("alt","Item 2");const C=document.createElement("h3");C.textContent="Item 2";const h=document.createElement("p");h.textContent="Description of Item 2";const E=document.createElement("a");E.setAttribute("href","#"),E.classList.add("cta"),E.textContent="Order now",p.appendChild(u),p.appendChild(C),p.appendChild(h),p.appendChild(E);const b=document.createElement("div");b.classList.add("item");const f=document.createElement("img");f.setAttribute("src","../src/food3.jpeg"),f.setAttribute("alt","Item 3");const A=document.createElement("h3");A.textContent="Item 3";const x=document.createElement("p");x.textContent="Description of Item 3";const v=document.createElement("a");return v.setAttribute("href","#"),v.classList.add("cta"),v.textContent="Order now",b.appendChild(f),b.appendChild(A),b.appendChild(x),b.appendChild(v),c.appendChild(o),c.appendChild(r),c.appendChild(p),c.appendChild(b),e.appendChild(c),e}function c(){const e=document.createElement("footer"),t=document.createElement("p");return t.textContent="2023 Restaurant Name",t.innerHTML=" &copy; "+t.innerHTML,e.appendChild(t),e}n.d(t,{Gv:()=>c,nG:()=>d,ov:()=>a})}},t={};function n(d){var a=t[d];if(void 0!==a)return a.exports;var c=t[d]={exports:{}};return e[d](c,c.exports,n),c.exports}n.d=(e,t)=>{for(var d in t)n.o(t,d)&&!n.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:t[d]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(556),t=n(377),d=n(862);const a=document.getElementById("content"),c=document.querySelector("main");document.addEventListener("DOMContentLoaded",(()=>{a.appendChild((0,e.nG)()),a.appendChild((0,e.ov)()),a.appendChild((0,e.Gv)()),document.querySelector("nav").addEventListener("click",(e=>{if(e.target.id="Menu")c.innerHTML="",c.appendChild((0,t.C)());else if(e.target.id="Contact")c.innerHTML="",c.appendChild((0,d.W)());else if(e.target.id="Home")return}))}))})()})();