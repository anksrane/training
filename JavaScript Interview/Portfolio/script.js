"use strict";

//Change Link Style
const navLink = document.querySelectorAll(".nav-link");
const navLinks = document.querySelector(".nav-links");
navLinks.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav-link");
  //Remove active class
  if (clicked) {
    navLink.forEach(function (t) {
      t.classList.remove("active");
    });
    clicked.classList.add("active");
  }
});
//Smooth Scrolling

//Info Slider
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 3000);

//Tabbed Component
const btns = document.querySelectorAll(".btn__tab");
const btnsTab = document.querySelector(".btn__tab-container");
const eduTabs = document.querySelectorAll(".education-content");
btnsTab.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn__tab");
  if (clicked) {
    //Remove active class
    btns.forEach(function (t) {
      t.classList.remove("btn__tab-active");
    });
    eduTabs.forEach(function (t) {
      t.classList.remove("education-content--active");
    });
    clicked.classList.add("btn__tab-active");
    document
      .querySelector(`.education-content-${clicked.dataset.tab}`)
      .classList.add("education-content--active");
  }
});
