const nav = document.querySelector('.nav');
const button = document.querySelector('.desplegar');
const envio_form = document.getElementById('envio_form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const comensales = document.getElementById('comensales');
const fecha = document.getElementById('fecha');
const parrafo = document.getElementById('warnings');

envio_form.addEventListener('click', e=>{
    e.preventDefault()
    if(nombre.value.length >= 3 && apellido.value.length >=3 
        && email.value.length >=12 && telefono.value.length >=6 
        && comensales.value.length > 0 && fecha.value.length > 0){
        parrafo.textContent = 'Enviado correctamente';
    }
    else{
        parrafo.textContent = '¡Hay campos vacios o incorrectos!'
    }
})

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

window.addEventListener('scroll', function(){
    var nav_fijado = document.querySelector('.encabezado');
    nav_fijado.classList.toggle('abajo', window.scrollY>100);
})


window.sr = ScrollReveal();

    sr.reveal('.navbar', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('.navbar1', {
        duration: 3000,
        origin: 'left',
        distance: '-1000px'
    });

    sr.reveal('.navbar2', {
        duration: 3000,
        origin: 'right',
        distance: '-1000px'
    });

    sr.reveal('.row1', {
        duration: 3000,
        origin: 'right',
        distance: '-1000px'
    });

    sr.reveal('.row2', {
        duration: 3000,
        origin: 'left',
        distance: '-1000px'
    });