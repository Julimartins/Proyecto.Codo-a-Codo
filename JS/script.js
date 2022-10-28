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
        duration: 1000,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('.navbar1', {
        duration: 1000,
        origin: 'left',
        distance: '-1000px'
    });

    sr.reveal('.navbar2', {
        duration: 1000,
        origin: 'right',
        distance: '-1000px'
    });

    sr.reveal('.row1', {
        duration: 1000,
        origin: 'right',
        distance: '-1000px'
    });

    sr.reveal('.row2', {
        duration: 1000,
        origin: 'left',
        distance: '-1000px'
    });


const boton1 = document.querySelector('.boton1');
const boton2 = document.querySelector('.boton2');
const boton3 = document.querySelector('.boton3');
const boton4 = document.querySelector('.boton4');
const boton5 = document.querySelector('.boton5');
const boton6 = document.querySelector('.boton6');
const boton7 = document.querySelector('.boton7');
const boton8 = document.querySelector('.boton8');
const boton9 = document.querySelector('.boton9');
const boton10 = document.querySelector('.boton10');
const carrusel = document.querySelector('.carrusel');
    
boton1.addEventListener('click', ()=>{
    carrusel.style.transform =  `translateX(0%) `
})
    
boton2.addEventListener('click', ()=>{
    carrusel.style.transform =  `translateX(-10%) `
})
    
boton3.addEventListener('click', ()=>{
    carrusel.style.transform =  `translateX(-20%) `
})
    
boton4.addEventListener('click', ()=>{
    carrusel.style.transform =  `translateX(-30%) `
})

boton5.addEventListener('click', ()=>{
    carrusel.style.transform =  `translateX(-40%) `
})

boton6.addEventListener('click', ()=>{
    carrusel.style.transform =  `translateX(-50%) `
})

boton7.addEventListener('click', ()=>{
    carrusel.style.transform =  `translateX(-60%) `
})

boton8.addEventListener('click', ()=>{
    carrusel.style.transform =  `translateX(-70%) `
})

boton9.addEventListener('click', ()=>{
    carrusel.style.transform =  `translateX(-80%) `
})

boton10.addEventListener('click', ()=>{
    carrusel.style.transform =  `translateX(-90%) `
})