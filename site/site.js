const nav=[["Search","search.html"],["Neighborhoods","neighborhoods.html"],["Agents","agents.html"],["Join","join.html"],["Paperwork","paperwork.html"],["Resources","blog.html"],["About","about.html"]];
document.getElementById("hdr").outerHTML=`<header class="site"><div class="wrap"><a class="logo" href="index.html">FIN<span>D</span></a>
<button class="burger" aria-label="Menu" onclick="document.querySelector('nav.main').classList.toggle('open')">☰</button>
<nav class="main">${nav.map(n=>`<a href="${n[1]}">${n[0]}</a>`).join("")}<a class="btn sm" href="#">Sign In</a></nav></div></header>`;
document.getElementById("ftr").outerHTML=`<footer class="site"><div class="wrap"><div class="cols">
<div><div class="logo" style="color:#fff">FIN<span>D</span></div><p><b>Head Office</b><br>5 West 37th Street, 12th Floor<br>New York, NY 10018<br><a href="mailto:hello@findrealestate.com">hello@findrealestate.com</a><a href="tel:+12129949965">+1 212 994 9965</a></p>
<p><a href="#">Facebook</a><a href="#">Instagram</a><a href="#">YouTube</a><a href="#">LinkedIn</a></p></div>
<div><h4>Quick Links</h4><a href="search.html">Search</a><a href="agents.html">Agents</a><a href="join.html">Join</a><a href="about.html">About Us</a><a href="#">Agent Portal</a></div>
<div class="hoods">${Object.entries(hoods).map(([s,l])=>`<div><h4>${s}</h4>${l.map(h=>`<a href="neighborhoods.html">${h}</a>`).join("")}</div>`).join("")}</div></div>
<div class="legal"><span>Housing Choice Vouchers Welcome · Se Aceptan Vales de Elección de Vivienda</span><span><a href="#">Terms</a> · <a href="#">Privacy Policy</a> · <a href="#">Fair Housing Notice</a> · <a href="#">Reasonable Accommodation Notice</a> · <a href="#">Operating Procedure</a> · <a href="#">Press</a></span><span>© 2026 FIND Real Estate</span></div></div></footer>`;
document.querySelectorAll("form.f,.news").forEach(f=>f.addEventListener("submit",e=>{e.preventDefault();f.innerHTML="<p><b>Thanks! (demo — nothing was sent)</b></p>"}));
