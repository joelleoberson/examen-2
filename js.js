var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var menuLinks = document.querySelectorAll(".menu a");

var toggleMenu = function () {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);

// Ajouter un gestionnaire d'événements pour chaque lien dans le menu
menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    // Fermer le menu lorsque le lien est cliqué
    toggleMenu();
  });
});
