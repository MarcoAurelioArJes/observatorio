const slideList = document.querySelector('.containerDeSlides');
const slideItems = document.querySelectorAll('.sitemDaLista');

const slideWidth = slideList.offsetWidth; 
const slideCount = slideItems.length; 
const visibleCount = 4; 
const slideStep = slideWidth / visibleCount; 

let currentIndex = 0; 

function updateSlidePosition() {
  slideList.style.transform = `translateX(${-currentIndex * slideStep}px)`;
}

function nextSlide() {
  if (currentIndex < slideCount - visibleCount) {
    currentIndex++;
    updateSlidePosition();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
}

document.getElementById('next-button').addEventListener('click', nextSlide);
document.getElementById('prev-button').addEventListener('click', prevSlide);
