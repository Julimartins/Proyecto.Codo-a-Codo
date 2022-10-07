const nav = document.querySelector('.nav');
const button = document.querySelector('.desplegar');

button.addEventListener('click', ()=>{
    nav.classList.toggle('active')
})