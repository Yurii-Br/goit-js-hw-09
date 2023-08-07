const t=document.body;let a,e=!1;function r(){let a=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.style.backgroundColor=a}t.addEventListener("click",(t=>{const o=t.target;o.hasAttribute("data-start")&&!1===e&&(a=setInterval(r,1e3),e=!0),o.hasAttribute("data-stop")&&(clearInterval(a),e=!1)}));
//# sourceMappingURL=01-color-switcher.6d15aafa.js.map
