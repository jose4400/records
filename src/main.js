import "./style.css";

import Alpine from "alpinejs";
window.Alpine = Alpine;
Alpine.start();

const burgerMenu = document.querySelector(".burger-menu");

const navigationMenu = document.querySelector(".navigation");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navigationMenu.classList.toggle("active");
});

const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});
close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
