var count = 0;
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
    static show(num){
        num+=count;
        const slides = document.querySelectorAll('.slide');
        count=num>= slides.length?0:num<0?slides.length-1:num;
        slides.forEach(slide=>{
            slide.style.transform = `translateX(-${count * 100}%)`;
        });
    }
}  