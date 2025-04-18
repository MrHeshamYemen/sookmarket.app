﻿/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */ (()=>{"use strict";let e=()=>localStorage.getItem("theme"),t=e=>localStorage.setItem("theme",e),r=()=>{let t=e();return t||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")},a=e=>{"auto"===e&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.setAttribute("data-bs-theme","dark"):document.documentElement.setAttribute("data-bs-theme",e)};a(r());let s=(e,t=!1)=>{let r=document.querySelector("#bd-theme");if(!r)return;let a=document.querySelector("#bd-theme-text"),s=document.querySelector(".theme-icon-active use"),l=document.querySelector(`[data-bs-theme-value="${e}"]`),c=l.querySelector("svg use").getAttribute("href");document.querySelectorAll("[data-bs-theme-value]").forEach(e=>{e.classList.remove("active"),e.setAttribute("aria-pressed","false")}),l.classList.add("active"),l.setAttribute("aria-pressed","true"),s.setAttribute("href",c);let d=`${a.textContent} (${l.dataset.bsThemeValue})`;r.setAttribute("aria-label",d),t&&r.focus()};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{let t=e();"light"!==t&&"dark"!==t&&a(r())}),window.addEventListener("DOMContentLoaded",()=>{s(r()),document.querySelectorAll("[data-bs-theme-value]").forEach(e=>{e.addEventListener("click",()=>{let r=e.getAttribute("data-bs-theme-value");t(r),a(r),s(r,!0)})})})})();