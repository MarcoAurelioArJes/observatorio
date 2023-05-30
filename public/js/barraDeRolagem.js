var slideIndex = 0;
var slides = document.getElementsByClassName("itemDaLista");

function showSlides() {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if(window.screen.width > 1098) {
        for (i = slideIndex; i < slideIndex + 4; i++) {
            if (slides[i]) {
                slides[i].style.display = "block";
            }
        }
    } else if (window.screen.width < 1098 && window.screen.width > 800) {
        for (i = slideIndex; i < slideIndex + 3; i++) {
            if (slides[i]) {
                slides[i].style.display = "block";
            }
        }
    } else if (window.screen.width < 800 && window.screen.width > 420) {
        for (i = slideIndex; i < slideIndex + 2; i++) {
            if (slides[i]) {
                slides[i].style.display = "block";
            }
        }
    } else if (window.screen.width < 420) {
        for (i = slideIndex; i < slideIndex + 1; i++) {
            if (slides[i]) {
                slides[i].style.display = "block";
            }
        }
    }
}

function previousSlide() {
    if(window.screen.width > 1098 && slideIndex >= 4) {
        slideIndex -= 4;
        showSlides();
    } else if (window.screen.width < 1098 && window.screen.width > 800 && slideIndex >= 3) {
        slideIndex -= 3;
        showSlides();
    } else if (window.screen.width < 800 && window.screen.width > 420 && slideIndex >= 2) {
        slideIndex -= 2;
        showSlides();
    } else if (window.screen.width < 420 && slideIndex >= 1) {
        slideIndex -= 1;
        showSlides();
    }
}

function nextSlide() {
    if(window.screen.width > 1098 && (slideIndex < slides.length - 4)) {
        slideIndex += 4;
        showSlides();
    } else if (window.screen.width < 1098 && window.screen.width > 800 && (slideIndex < slides.length - 3)) {
        slideIndex += 3;
        showSlides();
    } else if (window.screen.width < 800 && window.screen.width > 420 && (slideIndex < slides.length - 2)) {
        slideIndex += 2;
        showSlides();
    } else if (window.screen.width < 420 && (slideIndex < slides.length - 1)) {
        slideIndex += 1;
        showSlides();
    }
}

showSlides();
