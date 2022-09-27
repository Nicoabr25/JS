// const titulo = document.getElementsByClassName("titulo");
// const searchbar = document.getElementsByClassName("form-control");
// console.log(titulo[0].innerHTML);
// console.log(searchbar[0].innerHTML);

// function agregarFilaHTML(){
//     const tabla = document.getElementById("tabla")
//     let fila = `<tr>
//                     <td scope="row">1</td>
//                     <td>2</td>
//                     <td>3</td>
//                     <td>4</td>
//                     <td>5</td>
//                     <td>6</td>
//                 </tr>`
//         tabla.innerHTML += fila;
// }

// // ------------------ Crear Cards --------------//
// function productCard(){
//         const card = document.querySelector("#Productcards")
//         for (const producto of productos){
//             let div = document.createElement("div");
//             div.setAttribute("class","tarjeta shadow");
//             div.innerHTML = `<div class="tarjeta__imagen">
//                                 <img src="${producto.imagen}" alt="${producto.tipo}">
//                             </div>
//                             <div class="tarjeta__info">
//                                 <h3>${producto.nombre}</h3>
//                                 <p>${producto.descripcion}</p>
//                                 <h4>Precio: AR$ ${producto.precio}</h4>
//                             </div>
//                             <div class="tarjeta__button">
//                                 <button id=${producto.id} class="button">Añadir al carrito</button>
//                             </div>`;
//             card.appendChild(div);
//         }
//         AsignarBotones();
//     }
// addEventListener("DOMContentLoaded", productCard());


// // ----- Vincular botones con Productos ----//
// function AsignarBotones(){
//     let buttons = document.querySelectorAll(".button");
//     for (const button of buttons){
//         button.addEventListener("click", ()=>{
//             const prod = productos.find(product => product.id == button.id);
//             if(prod){
//                 carrito.push(prod);
//                 updatecart(prod);
//             }
                
//         })
//     }
// }



// function agregarproducto(){
//     const tabla = document.getElementById("tabla")
//         let nombreproductonuevo = prompt("hola")
//         let tipoproductonuevo = prompt("Ingrese el tipo de producto")
//         let marcaproductonuevo = prompt("Ingrese la marca del producto")
//         let precioproductonuevo = Number(prompt("Ingrese el precio del producto"))
//         let cantidadproductonuevo= Number(prompt("Ingrese la cantidad incial del producto"+" "+ nombreproductonuevo))
//         let disponibleproductonuevo = confirm("El" +" "+ nombreproductonuevo +" "+ "¿estará disponible para la venta?")
//         let productonuevo = new item(nombreproductonuevo,tipoproductonuevo,marcaproductonuevo,precioproductonuevo,cantidadproductonuevo,disponibleproductonuevo)
//         console.log(productonuevo)
//         productos.push(productonuevo);
//     fila = `<tr>
//                     <td scope="row">${id}</td>
//                     <td><strong>${nombreproductonuevo}</strong></td>
//                     <td>${tipoproductonuevo}</td>
//                     <td>${marcaproductonuevo}</td>
//                     <td>${precioproductonuevo}</td>
//                 </tr>`
//         id = id + 1;
//         tabla.innerHTML += fila;
//     }


// //----------------------------Formulario----------------------------//
// const inputs = document.querySelectorAll("input")
// inputs.forEach(input =>{
//     input.addEventListener("focus", () => input.className = "addproduct__borderinput")
//     input.addEventListener("blur", () => input.className = "")
// })

// // let noxe = inputs[0].value;
// // console.log(noxe);

// // const btnAgregar = document.querySelector("#btnAgregar")
// // const btnLimpiar = document.querySelector("#btnLimpiar")
// // const inputNombre = inputs[0].value
// // const inputTipo = document.querySelector("#inputTipo")
// // const inputMarca = document.querySelector("#inputMarca")
// // const inputPrecio = document.querySelector("#inputPrecio")
// // const inputCantidad = document.querySelector("#inputCantidad")
// // const inputImagen = document.querySelector("#inputImagen")


// // function enviarProducto() {
// //     alert("Producto agregado al stock")
// // }

// // btnAgregar.addEventListener("click", () =>{
// //     enviarProducto()
// // })
