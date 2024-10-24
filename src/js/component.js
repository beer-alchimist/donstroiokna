class component{
    static display(id){
        var main_el = document.getElementById(id).parentNode;
        //main_el.childNodes[1].id.;
        //document.getElementById(main_el.childNodes[1].id).style.display = 'none';
        var all_element = main_el.childNodes;
        all_element.forEach(row=>{
            //document.getElementById(`${ids}`).style.display = 'none';
            if(row.id!== null || row.id!== undefined){
                if(id == row.id){
                    document.getElementById(row.id).style.display = 'none';
                }else{
                    document.getElementById(row.id).style.display = 'block';
                }
            }
        });
        console.log(main_el.childNodes);
    }
}
component.display('shema_rondo');
let currentSlide = 0;
/*const windowInnerWidth = window.innerWidth
console.log(windowInnerWidth);*/
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