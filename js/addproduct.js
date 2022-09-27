// const nombreproductonuevo =document.querySelector("#inputNombre");
// const tipoproductonuevo =document.querySelector("#inputTipo");
// const marcaproductonuevo =document.querySelector("#inputMarca");
// const precioproductonuevo =document.querySelector("#inputPrecio");
// const stockproductonuevo =document.querySelector("#inputStock");
// const descripcionproductonuevo =document.querySelector("#inputdescripcion");


// //----------------------------Formulario----------------------------//
// const inputs = document.querySelectorAll("input")
// inputs.forEach(input =>{
//     input.addEventListener("focus", () => input.className = "addproduct__borderinput")
//     input.addEventListener("blur", () => input.className = "")
// })


// console.log (stockproductonuevo)

// ------------------ Add Product --------------// //id, imagen, nombre, tipo, marca, precio, stock, descripcion, disponible//

// function frfr(){
    // const valores = document.querySelectorAll(".inputaddproduct")
    // debugger
    // let disponibilidad = false;
    // if (parseInt(stockproductonuevo.value) > 0){
    //     disponibilidad = true;
    // }
    // let nuevoid = productos.length + 1;
    // let productonuevo = new item(nuevoid, "./img/nodisponible.png", valores[0].value, valores[1].value, valores[2].value, parseInt(valores[3].value), parseInt(valores[4].value), valores[6].value, disponibilidad)
    //     console.log(productonuevo)
    //     prodadded.push(productonuevo);
    //     localStorage.setItem("prodadded", JSON.stringify(prodadded));
    // }

function agregarproducto(){
            let nuevoid = productos.length + 1;
            let nombreproductonuevo = prompt("ingresa el nombre del producto")
            let tipoproductonuevo = prompt("Ingrese el tipo de producto")
            let marcaproductonuevo = prompt("Ingrese la marca del producto")
            let precioproductonuevo = Number(prompt("Ingrese el precio del producto"))
            let stockproductonuevo= Number(prompt("Ingrese el stock incial del producto"+" "+ nombreproductonuevo))
            let descricionproductonuevo = prompt("¿Cual es la descripcion del producto nuevo?")
            let disponibleproductonuevo = confirm("El" +" "+ nombreproductonuevo +" "+ "¿estará disponible para la venta?")
            let productonuevo = new item(nuevoid, "./img/nodisponible.png",nombreproductonuevo,tipoproductonuevo,marcaproductonuevo,precioproductonuevo,stockproductonuevo,descricionproductonuevo,disponibleproductonuevo)
            console.log(productonuevo)
            prodadded.push(productonuevo);
            localStorage.setItem("prodadded", JSON.stringify(prodadded));
}
localStorage.setItem("prodadded", JSON.stringify(prodadded))
// window.onload=function(){
// const btnadd = document.querySelector("#btnadd")
// const valores = document.querySelectorAll(".inputaddproduct")
// btnadd.addEventListener("click", agregarproducto(valores));}