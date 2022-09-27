//----------------------------Formulario----------------------------//
const inputs = document.querySelectorAll("input")
inputs.forEach(input =>{
    input.addEventListener("focus", () => input.className = "addproduct__borderinput")
    input.addEventListener("blur", () => input.className = "")
})

// let noxe = inputs[0].value;
// console.log(noxe);

// const btnAgregar = document.querySelector("#btnAgregar")
// const btnLimpiar = document.querySelector("#btnLimpiar")
// const inputNombre = inputs[0].value
// const inputTipo = document.querySelector("#inputTipo")
// const inputMarca = document.querySelector("#inputMarca")
// const inputPrecio = document.querySelector("#inputPrecio")
// const inputCantidad = document.querySelector("#inputCantidad")
// const inputImagen = document.querySelector("#inputImagen")


// function enviarProducto() {
//     alert("Producto agregado al stock")
// }

// btnAgregar.addEventListener("click", () =>{
//     enviarProducto()
// })

function agregarproducto(){
    const tabla = document.getElementById("tabla")
        let nombreproductonuevo = prompt("hola")
        let tipoproductonuevo = prompt("Ingrese el tipo de producto")
        let marcaproductonuevo = prompt("Ingrese la marca del producto")
        let precioproductonuevo = Number(prompt("Ingrese el precio del producto"))
        let stockproductonuevo= Number(prompt("Ingrese el stock incial del producto"+" "+ nombreproductonuevo))
        let disponibleproductonuevo = confirm("El" +" "+ nombreproductonuevo +" "+ "¿estará disponible para la venta?")
        let productonuevo = new item(nombreproductonuevo,tipoproductonuevo,marcaproductonuevo,precioproductonuevo,stockproductonuevo,disponibleproductonuevo)
        console.log(productonuevo)
        productos.push(productonuevo);
    fila = `<tr>
                    <td scope="row">${id}</td>
                    <td><strong>${nombreproductonuevo}</strong></td>
                    <td>${tipoproductonuevo}</td>
                    <td>${marcaproductonuevo}</td>
                    <td>${precioproductonuevo}</td>
                </tr>`
        id = id + 1;
        tabla.innerHTML += fila;
    }


    
function Asignarid(){
    let nuevoid = productos.length + 1;

}