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


const hamburgerBtn = document.getElementById("hamburger-menu");
const menuHamburger = document.getElementById("page-principale-menu-hamburger");


hamburgerBtn.addEventListener("click", function() {

  if (menuHamburger.style.display === "block") {
    menuHamburger.style.display = "none";
  } else {
    menuHamburger.style.display = "block";
  }
});

var images = document.querySelectorAll('#carrousel img');
var index = 0;

setInterval(function() {
  // cacher l'image courante
  images[index].style.opacity = 0;
  // passer à l'image suivante
  index = (index + 1) % images.length;
  // montrer la nouvelle image
  images[index].style.opacity = 1;
}, 5000);
