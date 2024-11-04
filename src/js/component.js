var count = 0;
var corzina_z =[]; 
class component{
    static display(id, corzina, id_btn){
        var main_el = (corzina)?document.getElementById(id).nextElementSibling:document.getElementById(id).parentNode.childNodes;
        if (corzina) {
            //document.getElementById(id).style.display = 'none';
            //.removeChild(id);
            var obj={
                [id]:document.getElementById(id_btn).value
            };
            document.getElementById(id).remove();
            document.getElementById(main_el.id).style.display= 'block';
            corzina_z.push(obj);
        }else{
            main_el.forEach(row=>{
                if(row.id){
                    return (id == row.id)?document.getElementById(row.id).style.display = 'none':document.getElementById(row.id).style.display = 'block';
                }
            })
        }
        console.log(corzina_z); 
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
