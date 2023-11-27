var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var menuLinks = document.querySelectorAll(".menu a");

var toggleMenu = function () {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    toggleMenu();
  });
});
