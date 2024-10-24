class component{
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
}
//component.display('shema_rondo');

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