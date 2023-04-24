const pagePrincipale = document.getElementById("page-principale");
const menuListe = document.querySelector("#page-principale-menu ul");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const titre = document.getElementById("titre");

pagePrincipale.addEventListener("mouseover", function () {
  menuListe.style.transform = "translateX(0%)";
  titre.style.display = "none";
});

menuListe.addEventListener("mouseover", () => {
  if (!menuListe.classList.contains("visible")) {
    hamburgerMenu.style.transform = "scale(1)";
  }
});

menuListe.addEventListener("mouseout", () => {
  if (!menuListe.classList.contains("visible")) {
    hamburgerMenu.style.transform = "scale(1)";
  }
});

hamburgerMenu.addEventListener("click", () => {
  menuListe.classList.toggle("visible");
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
