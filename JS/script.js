const nav = document.querySelector('.nav');
const button = document.querySelector('.desplegar');
const envio_form = document.querySelector('.envio-form')

button.addEventListener('click', ()=>{
    nav.classList.toggle('active')
    button.classList.toggle('oscurece')
})

// envio_form.addEventListener('click', ()=>{
//     alert('consulta/reserva enviado/a correctamente')
// })