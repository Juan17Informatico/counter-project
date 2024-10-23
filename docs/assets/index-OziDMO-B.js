(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const a=({id:n="",className:e="",title:o})=>{const r=document.createElement("button");return r.innerText=o,r.setAttribute("id",n),r.setAttribute("class",e),r},l=(n,e=1)=>n=n+e,u=(n,e=1)=>n=n-e,d=`<div class="counter-container" >\r
    \r
    <h1 class="counter-title">Counter Project</h1>\r
\r
    <p class="counter-p"></p>\r
\r
    <div class="counter-btn" id="counter-btn" >\r
    </div>\r
\r
</div>`;let c=0;const p=[{id:"increase",className:"btn btn-increase",title:"Increase"},{id:"decrease",className:"btn btn-decrease",title:"Decrease"},{id:"reset",className:"btn btn-reset",title:"Reset"}],f=n=>{n.innerHTML=d;let e={};const o=document.getElementById("counter-btn"),r=document.getElementsByClassName("counter-p");p.forEach(t=>{e[`btn${t.title}`]=a(t),o.append(e[`btn${t.title}`])}),console.log(r[0]),r[0].innerText=c,m(e.btnIncrease,r[0]),b(e.btnDecrease,r[0]),y(e.btnReset,r[0])},m=(n,e)=>{n.addEventListener("click",()=>{c=l(c),e.innerText=c})},b=(n,e)=>{n.addEventListener("click",()=>{c=u(c),e.innerText=c})},y=(n,e)=>{n.addEventListener("click",()=>{c=0,e.innerText=c})},g=document.getElementById("app");f(g);
