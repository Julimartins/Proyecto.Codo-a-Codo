const nav = document.querySelector('.nav');
const button = document.querySelector('.desplegar');
const envio_form = document.querySelector('.envio-form');

document.getElementById("boton-up").addEventListener("click", inicio);

function inicio(){
    var currentscroll = document.documentElement.scrollTop;
    if (currentscroll>0){
        window.scrollTo(0, 0);
    }
}

arriba = document.getElementById("boton-up");

window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if (scroll>100){
        arriba.style.transform = "scale(1)";
    } else if (scroll<100){
        arriba.style.transform = "scale(0)";
    }
}

button.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    button.classList.toggle('oscurece');
})


