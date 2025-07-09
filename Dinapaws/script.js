let currentSlide = 0;

function showSlide(index) {
  const slides = document.getElementsByClassName('slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active-slide');
  }
  slides[index].classList.add('active-slide');
}

function nextSlide() {
  const slides = document.getElementsByClassName('slide');
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change every 3 seconds
