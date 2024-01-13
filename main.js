/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/popover.js
function popoverFunc() {
  const popover = document.querySelector(".popover");
  popover.classList.toggle("hidden");
}
;// CONCATENATED MODULE: ./src/js/app.js

const btn = document.querySelector(".btn");
btn.addEventListener("click", popoverFunc);
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;