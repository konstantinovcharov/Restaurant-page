(()=>{"use strict";var e={862:(e,t,n)=>{function d(){const e=document.createElement("div");e.classList.add("contact-div");const t=document.createElement("h2");t.textContent="Contact Us";const n=document.createElement("form");n.setAttribute("id","contact-form");const d=document.createElement("label");d.setAttribute("for","name"),d.textContent="Name:";const c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("id","name"),c.setAttribute("name","name"),c.setAttribute("required","");const a=document.createElement("label");a.setAttribute("for","email"),a.textContent="Email:";const o=document.createElement("input");o.setAttribute("type","email"),o.setAttribute("id","email"),o.setAttribute("name","email"),o.setAttribute("required","");const r=document.createElement("label");r.setAttribute("for","message"),r.textContent="Message:";const i=document.createElement("textarea");i.setAttribute("rows","5"),i.setAttribute("id","message"),i.setAttribute("name","message"),i.setAttribute("required","");const m=document.createElement("button");return m.setAttribute("type","submit"),m.textContent="Send",n.appendChild(d),n.appendChild(c),n.appendChild(a),n.appendChild(o),n.appendChild(r),n.appendChild(i),n.appendChild(m),e.appendChild(t),e.appendChild(n),e}n.d(t,{W:()=>d})},377:(e,t,n)=>{function d(){const e=document.createElement("div");e.classList.add("menu-tab");const t=document.createElement("h2");t.textContent="Menu";const n=document.createElement("ul");return n.classList.add("menu-items"),[{name:"Burger",price:"$10"},{name:"Fries",price:"$4"},{name:"Salad",price:"$8"},{name:"Pizza",price:"$12"},{name:"Pasta",price:"$10"}].forEach((e=>{const t=document.createElement("li"),d=document.createElement("h3");d.innerText=e.name;const c=document.createElement("p");c.innerText=e.price,t.appendChild(d),t.appendChild(c),n.appendChild(t)})),e.appendChild(t),e.appendChild(n),e}n.d(t,{C:()=>d})},556:(e,t,n)=>{function d(){const e=document.createElement("header"),t=document.createElement("h1");t.textContent="Restaurant Name";const n=document.createElement("nav"),d=document.createElement("ul"),c=document.createElement("li"),a=document.createElement("li"),o=document.createElement("li"),r=document.createElement("a");r.setAttribute("id","Home"),r.textContent="Home";const i=document.createElement("a");i.setAttribute("id","Menu"),i.textContent="Menu";const m=document.createElement("a");return m.textContent="Contact",m.setAttribute("id","Contact"),c.appendChild(r),a.appendChild(i),o.appendChild(m),d.appendChild(c),d.appendChild(a),d.appendChild(o),n.appendChild(d),e.appendChild(t),e.appendChild(n),e}function c(){return document.createElement("main")}function a(){const e=document.createElement("section");e.classList.add("hero");const t=document.createElement("h2");t.textContent="Welcome to our restaurant";const n=document.createElement("p");n.textContent="Enjoy our delicious food and great atmosphere.";const d=document.createElement("a");d.setAttribute("href","#"),d.classList.add("cta"),d.textContent="See our menu",e.appendChild(t),e.appendChild(n),e.appendChild(d);const c=document.createElement("section");c.classList.add("featured-items");const a=document.createElement("h2");a.textContent="Featured Items";const o=document.createElement("div");o.classList.add("item");const r=document.createElement("img");r.setAttribute("src","../src/food1.jpg"),r.setAttribute("alt","Item 1");const i=document.createElement("h3");i.textContent="Item 1";const m=document.createElement("p");m.textContent="Description of Item 1";const s=document.createElement("a");s.setAttribute("href","#"),s.classList.add("cta"),s.textContent="Order now",o.appendChild(r),o.appendChild(i),o.appendChild(m),o.appendChild(s);const l=document.createElement("div");l.classList.add("item");const p=document.createElement("img");p.setAttribute("src","../src/food2.jpeg"),p.setAttribute("alt","Item 2");const u=document.createElement("h3");u.textContent="Item 2";const C=document.createElement("p");C.textContent="Description of Item 2";const h=document.createElement("a");h.setAttribute("href","#"),h.classList.add("cta"),h.textContent="Order now",l.appendChild(p),l.appendChild(u),l.appendChild(C),l.appendChild(h);const E=document.createElement("div");E.classList.add("item");const b=document.createElement("img");b.setAttribute("src","../src/food3.jpeg"),b.setAttribute("alt","Item 3");const f=document.createElement("h3");f.textContent="Item 3";const x=document.createElement("p");x.textContent="Description of Item 3";const A=document.createElement("a");return A.setAttribute("href","#"),A.classList.add("cta"),A.textContent="Order now",E.appendChild(b),E.appendChild(f),E.appendChild(x),E.appendChild(A),c.appendChild(a),c.appendChild(o),c.appendChild(l),c.appendChild(E),{sectionHero:e,sectionFeaturedItems:c}}function o(){const e=document.createElement("footer"),t=document.createElement("p");return t.textContent="2023 Restaurant Name",t.innerHTML=" &copy; "+t.innerHTML,e.appendChild(t),e}n.d(t,{Gv:()=>o,cp:()=>a,nG:()=>d,ov:()=>c})}},t={};function n(d){var c=t[d];if(void 0!==c)return c.exports;var a=t[d]={exports:{}};return e[d](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var d in t)n.o(t,d)&&!n.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:t[d]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(556),t=n(377),d=n(862);const c=document.getElementById("content");c.appendChild((0,e.nG)()),c.appendChild((0,e.ov)());const a=document.querySelector("main"),{sectionHero:o,sectionFeaturedItems:r}=(0,e.cp)();a.appendChild(o),a.appendChild(r),c.appendChild((0,e.Gv)()),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("Home"),n=document.getElementById("Menu"),c=document.getElementById("Contact");e.addEventListener("click",(function(){a.innerHTML="",a.appendChild(o),a.appendChild(r)})),n.addEventListener("click",(function(){a.innerHTML="",a.appendChild((0,t.C)())})),c.addEventListener("click",(function(){a.innerHTML="",a.appendChild((0,d.W)())}))}))})()})();