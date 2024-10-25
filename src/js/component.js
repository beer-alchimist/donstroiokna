class component{
    count = 0;
    static display(id){
        var main_el = document.getElementById(id).parentNode.childNodes;
        main_el.forEach(row=>{
            if(row.id !== undefined){
                var el = document.getElementById(row.id);
                if(id == row.id){
                    el.style.display = 'none';
                }else{
                    el.style.display = 'block';
                }
            }
        })
    }
    static show(num){
        const slides = document.querySelectorAll('.slide');
        var a = num >= slides.length?0:num < 0?slides.length-1:num;
        slides.forEach(slide=>{
            slide.style.transform = `translateX(-${a * 100}%)`;
        });
    }
}
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