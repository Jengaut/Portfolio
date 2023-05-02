const pagePrincipale = document.getElementById("page-principale");
const menuListe = document.querySelector("#page-principale-menu ul");
const menuHamburger = document.querySelector("#page-principale-menu-hamburger")
const hamburgerMenu = document.querySelector("#hamburger-menu");
const titre = document.getElementById("titre");

pagePrincipale.addEventListener("mouseover", function () {
  menuListe.style.transform = "translateX(0%)";
  titre.style.display = "none";
});

menuHamburger.addEventListener("mouseover", () => {
  if (!menuHamburger.classList.contains("visible")) {
    hamburgerMenu.style.transform = "scale(1)";
  }
});

menuHamburger.addEventListener("mouseout", () => {
  if (!menuHamburger.classList.contains("visible")) {
    hamburgerMenu.style.transform = "scale(1)";
  }
});

hamburgerMenu.addEventListener("click", () => {
  menuHamburger.classList.toggle("visible");
});

menuListe.querySelectorAll("li a").forEach((link) => {
  link.addEventListener("click", () => {
    menuListe.classList.remove("visible");
  });
});

document.querySelectorAll("#page-principale-menu li a").forEach((link) => {
  link.addEventListener("click", () => {
    menuListe.classList.remove("visible");
  });
});
