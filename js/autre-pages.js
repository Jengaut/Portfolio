const carrousels = document.querySelectorAll('.carrousel');

carrousels.forEach((carrousel) => {
  let currentIndex = 0;

  const images = carrousel.querySelectorAll('img');

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

  setInterval(nextImage, 3000);
});
