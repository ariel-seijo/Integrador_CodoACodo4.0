const cantidad = document.querySelector('#cantidad-input');
const descuento = document.querySelector('#descuento-input');
const resumen = document.querySelector('#botoncito-resumen');
const alert = document.querySelector('#cartel-total');
const borrar = document.querySelector('#botoncito-borrar');
const nombre = document.querySelector('nombre-input');
const apellido = document.querySelector('apellido-input');
const email = document.querySelector('apellido-input');
const descuentos = [0, 0.80, 0.50, 0.15]

function total(){
    let valorTicket = parseInt(cantidad.value) * 200;
    let valorFinal = valorTicket - (valorTicket * descuentos[descuento.value]);
    if (isNaN(valorFinal)) {
        alert.innerHTML = `Total a pagar: $`
    } else {
        alert.innerHTML = `Total a pagar: $${valorFinal}`;
    }
}

resumen.addEventListener('click', total);

borrar.addEventListener('click', ()=> {
    alert.innerHTML = 'Total a pagar: $'
})