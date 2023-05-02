const pagePrincipale = document.getElementById('page-principale');
const menuListe = document.querySelector('#page-principale-menu ul');
const titre = document.getElementById('titre');

pagePrincipale.addEventListener('mouseover', function() {
  menuListe.style.transform = 'translateX(0%)';
  titre.style.display = 'none';
});

document.querySelectorAll('#page-principale-menu li a').forEach(function(link) {
  link.addEventListener('click', function() {
    menuListe.classList.remove('visible');
  });
});

// Récupération du bouton hamburger et de la div menu-hamburger
const hamburgerBtn = document.getElementById("hamburger-menu");
const menuHamburger = document.getElementById("page-principale-menu-hamburger");

// Ajout de l'événement click sur le bouton hamburger
hamburgerBtn.addEventListener("click", function() {
  // Si la div menu-hamburger est visible, on la masque, sinon on l'affiche
  if (menuHamburger.style.display === "block") {
    menuHamburger.style.display = "none";
  } else {
    menuHamburger.style.display = "block";
  }
});
