const showMenu=(e,t)=>{const n=document.getElementById(e),a=document.getElementById(t);n.addEventListener("click",(()=>{a.classList.toggle("show-menu"),n.classList.toggle("show-icon")}));const o=document.querySelector(".navM__dropdown-toggle"),s=document.querySelector(".navM__dropdown");document.querySelectorAll(`#${t} .navM__link`).forEach((e=>{e.addEventListener("click",(t=>{e.classList.contains("navM__dropdown-toggle")||(a.classList.remove("show-menu"),n.classList.remove("show-icon"),s.classList.contains("active")&&s.classList.remove("active"))}))})),o&&s&&o.addEventListener("click",(e=>{e.preventDefault(),s.classList.toggle("active")}))};showMenu("navM-toggle","navM-menu");const flagsElement=document.querySelector("#flags"),textsToChange=document.querySelectorAll("[data-section]"),inputName=document.querySelector("#name"),inputEmail=document.querySelector("#email"),inputMessage=document.querySelector("#message"),setLanguage=e=>{flagsElement.setAttribute("data-language",e),localStorage.setItem("selectedLanguage",e),changeLanguages(e),inputName.placeholder="esp"===e?"Tu nombre":"Your name",inputEmail.placeholder="esp"===e?"Tu correo electrónico":"Your email",inputMessage.placeholder="esp"===e?"La descripción de tu proyecto":"Your project description"};flagsElement.addEventListener("change",(e=>{let t=e.target.checked?"esp":"eng";setLanguage(t)})),document.addEventListener("DOMContentLoaded",(()=>{let e=localStorage.getItem("selectedLanguage")||"eng";flagsElement.checked="esp"===e,setLanguage(e)}));const changeLanguages=async e=>{const t=await fetch(`./build/languages/${e}.json`),n=await t.json();for(const e of textsToChange){const t=e.dataset.section,a=e.dataset.value;e.innerHTML=n[t][a]}};document.getElementById("year").textContent=(new Date).getFullYear();