const nav = document.querySelector('.nav');
const button = document.querySelector('.desplegar');
const envio_form = document.querySelector('.envio-form');

button.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    button.classList.toggle('oscurece');
})

window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('header-fijo', window.scrollY)
})

