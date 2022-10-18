// --------------------Carrito de Compras utiliza la funcion de comprar definida en el class--------------

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const tablacarrito = document.querySelector("#tabla_carrito")

function updatecart(carrito){
    tablacarrito.innerHTML = " "
    carrito.forEach(prod => {
        plantillaProductos(prod)
        });
}

function plantillaProductos(prod){
    let fila = `<td scope="row">${prod.id}</td>
                    <td>${prod.nombre}</td>
                    <td>${prod.tipo}</td>
                    <td>${prod.marca}</td>
                    <td>${prod.precio}</td>
                    <td>${prod.cantidad}</td>
                    <td><button class="buttonBorrar" id="${prod.id}" onclick = eliminarPorducto(${prod.id})>❎</button></td>`
    tablacarrito.innerHTML += fila;
    }

document.addEventListener("DOMContentLoaded",updatecart(carrito));

// --------------------Boton Pagar y Limpiar Carrito-------------------------//

let botonpagar = document.querySelector("#boton_pagar");
let botonlimpiar = document.querySelector("#botonlimpiar");


botonpagar.addEventListener("click", pagar);
botonlimpiar.addEventListener("click", vaciarcarrito);

function pagar(){ 
    const sumatotal = carrito.reduce ((acc, el) => acc + el.precio*el.cantidad, 0);
    console.log(sumatotal);
    swal({
        title: "Pago Realizado",
        text: "Se debitaron $" +" "+ sumatotal +" "+"de su tarjeta. ¡Gracias por su compra!",
        icon: "success",
        button: "Gracias ☕",
    });
    vaciarcarrito();
}

function vaciarcarrito(){
    carrito =[];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    updatecart(carrito)
}

//-------Asignar botones para eliminar al carrito-----//

function eliminarPorducto(id){
    const item = carrito.find((prod)=> prod.id === id)
    let posicion = carrito.indexOf(item);
    if (item.cantidad == 1){
    carrito.splice(posicion,1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    updatecart(carrito);
    }
    else {
        item.cantidad--;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        updatecart(carrito)
    }
}
