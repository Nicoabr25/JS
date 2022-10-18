//----------Carrito----------//

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// ------------------ Crear Cards --------------//
function productCard(elementos){
    const card = document.querySelector("#Productcards")
    card.innerHTML = "";
    for (const producto of elementos){
        let div = document.createElement("div");
        div.setAttribute("class","tarjeta shadow");
        div.innerHTML = `<div class="tarjeta__imagen">
                            <img src="${producto.imagen}" alt="${producto.tipo}">
                        </div>
                        <div class="tarjeta__info">
                            <h3>${producto.nombre}</h3>
                            <p>${producto.descripcion}</p>
                            <h4>Precio: AR$ ${producto.precio}</h4>
                        </div>
                        <div class="tarjeta__button">
                            <button id=${producto.id} class="button">Añadir al carrito</button>
                        </div>`;
        card.appendChild(div);
    }
    AsignarBotones();
}

addEventListener("DOMContentLoaded", productCard(productos));

// ----- Vincular botones con Productos ----//

function AsignarBotones(){
let buttons = document.querySelectorAll(".button");
    for (const button of buttons){
        button.addEventListener("click", ()=>{
            const prod = carrito.find(product => product.id == button.id);
            if(prod){
                prod.cantidad ++;
                CrearMensaje(prod);
            }
            else{
                const prod = productos.find(product => product.id == button.id);
                if (prod){
                    let productocarrito = {
                                            id: prod.id,
                                            imagen: prod.imagen,
                                            nombre: prod.nombre,
                                            tipo: prod.tipo,
                                            marca: prod.marca,
                                            precio: prod.precio,
                                            stock: prod.stock,
                                            descripcion: prod.descripcion,
                                            disponible: prod.disponible,
                                            cantidad: 1,
                    } 
                    carrito.push(productocarrito)
                    CrearMensaje(productocarrito)
                }
            } 
            localStorage.setItem("carrito", JSON.stringify(carrito))
            setQuantity();
        });
    }
}

//----------Barra de Búsqueda----------//

const busqueda = document.querySelector("#bucarProducto")

function filtrarProductos(){
    busqueda.value = busqueda.value.trim().toUpperCase()
    if (busqueda.value !== ""){
        const resultado = productos.filter(prod => prod.nombre.toUpperCase().includes(busqueda.value))
        if (resultado.length === 0){
            console.warn("No se encontraron Productos con es nombre.")
            productCard(productos);
        }
        else{
            productCard(resultado);
        }
    }
    else{
        productCard(productos);
    }
    }

busqueda.addEventListener("input", filtrarProductos);

//----------Mensaje----------//

const Mensaje = document.querySelector("#Mensaje");

function CrearMensaje(prod){
    prod !="" &&  (Mensaje.innerHTML =`<div><h4>✅ El producto ${prod.nombre} se ha agregado al carrito</h4></div>`)
    setTimeout(BorrarMensaje, 2000);
}

function BorrarMensaje(){
    Mensaje.innerHTML = " "
}

//--------- Contador de productos en el carrito -------//

const setQuantity =() =>{
    const label = document.querySelector("#qty_counter");
    const cart_qty = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    (cart_qty == 0) ? label.innerText = " " : label.innerText ="(" + cart_qty + ")";
}

document.addEventListener("DOMContentLoaded", setQuantity);