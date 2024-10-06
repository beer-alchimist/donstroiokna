function rondo_s(id){
    switch (id){
        case 'shema_rondo':{
            document.getElementById(id).style.display = 'none';
            document.getElementById(id+'_b').style.display = 'none';
            document.getElementById('video_rondo_b').style.display = 'block';
            document.getElementById('video_rondo').style.display = 'block';             
            break;
        }
        case 'video_rondo':{
            document.getElementById(id).style.display = 'none';
            document.getElementById(id+'_b').style.display = 'none';
            document.getElementById('shema_rondo_b').style.display = 'block';
            document.getElementById('shema_rondo').style.display = 'block';             
            break;
        }
    }
}

let currentSlide = 0;
const windowInnerWidth = window.innerWidth
console.log(windowInnerWidth);
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