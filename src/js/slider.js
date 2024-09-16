let currentSlide = 0;


function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Показать первый слайд при загрузке
showSlide(currentSlide);


