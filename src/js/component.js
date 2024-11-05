var count = 0;
class component{
    static display(id, corzina, id_btn){
        var main_el = (corzina)?document.getElementById(id).nextElementSibling:document.getElementById(id).parentNode.childNodes;
        if (corzina) {
            var div = document.createElement('div');
            div.innerHTML = `<input type='text' class='inp_zakaz' name='${id}' class='mt-2' value='${document.getElementById(id_btn).value}' />`;
            document.getElementById(id).remove();
            document.getElementById(main_el.id).style.display= 'block';
            main_el = document.getElementById('corzina');
            main_el.appendChild(div);
        }else{
            main_el.forEach(row=>{
                if(row.id){
                    return (id == row.id)?document.getElementById(row.id).style.display = 'none':document.getElementById(row.id).style.display = 'block';
                }
            })
        }
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
