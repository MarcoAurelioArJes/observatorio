var slideIndex = 0;
var slides = document.getElementsByClassName("itemDaLista");

function showSlides() {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = slideIndex; i < slideIndex + 4; i++) {
        if (slides[i]) {
            slides[i].style.display = "block";
        }
    }
}

function previousSlide() {
    if (slideIndex >= 4) {
        slideIndex -= 4;
        showSlides();
    }
}

function nextSlide() {
    if (slideIndex < slides.length - 4) {
        slideIndex += 4;
        showSlides();
    }
}

showSlides();
