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

//Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };
const moreDetails = document.querySelectorAll(".buttons");
const card = document.querySelector(".cards");
card.addEventListener("click", function (e) {
  const buttonClicked = e.target.closest(".primary");
  console.log(buttonClicked.name);
  modal.style.display = "block";
});
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

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

//Skills Animation
(function () {
  var SkillsBar = function (bars) {
    this.bars = document.querySelectorAll(bars);
    if (this.bars.length > 0) {
      this.init();
    }
  };

  SkillsBar.prototype = {
    init: function () {
      var self = this;
      self.index = -1;
      self.timer = setTimeout(function () {
        self.action();
      }, 500);
    },
    select: function (n) {
      var self = this,
        bar = self.bars[n];

      if (bar) {
        var width = bar.parentNode.dataset.percent;

        bar.style.width = width;
        bar.parentNode.classList.add("complete");
      }
    },
    action: function () {
      var self = this;
      self.index++;
      if (self.index == self.bars.length) {
        clearTimeout(self.timer);
      } else {
        self.select(self.index);
      }

      setTimeout(function () {
        self.action();
      }, 500);
    },
  };

  window.SkillsBar = SkillsBar;
})();

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var skills = new SkillsBar(".skillbar-bar");
  });
})();
