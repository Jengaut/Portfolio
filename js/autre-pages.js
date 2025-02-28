const carrousels = document.querySelectorAll('.carrousel');

carrousels.forEach((carrousel) => {
  let currentIndex = 0;

  const images = carrousel.querySelectorAll('.carrousel img');

  images.forEach((image, index) => {
    if (index !== currentIndex) {
      image.style.display = 'none';
    }
  });

  const nextImage = () => {
 
    images[currentIndex].style.display = 'none';

    currentIndex++;

    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    images[currentIndex].style.display = 'block';
  };

  setInterval(nextImage, 2000);
});

if (window.innerWidth < 956) {
  var url = window.location.pathname;
  var indexFileName = "../index.html";
  
  window.location.replace(redirectTo);
}
