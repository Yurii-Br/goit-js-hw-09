const t=document.body,a=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d;function r(){let a=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.style.backgroundColor=a}t.addEventListener("click",(t=>{const o=t.target;o.hasAttribute("data-start")&&(d=setInterval(r,1e3),a.disabled=!0,e.disabled=!1),o.hasAttribute("data-stop")&&(clearInterval(d),a.disabled=!1,e.disabled=!0)}));
//# sourceMappingURL=01-color-switcher.7d338e4b.js.map