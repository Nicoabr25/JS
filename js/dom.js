const titulo = document.getElementsByClassName("titulo");
const searchbar = document.getElementsByClassName("form-control");
console.log(titulo[0].innerHTML);
console.log(searchbar[0].innerHTML);

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

let id = 1;
let tablallena = false // Para que solo se pueda cargar una sola vez la lista
function productList(){
        const tabla = document.getElementById("tabla")
        let fila =" "
        if(tablallena == false){
            productos.forEach(producto => {
                fila = `<tr>
                            <td scope="row">${id}</td>
                            <td><strong>${producto.nombre}</strong></td>
                            <td>${producto.tipo}</td>
                            <td>${producto.marca}</td>
                            <td>${producto.precio}</td>
                        </tr>`
                id = id + 1;
                tabla.innerHTML += fila;
            })
            tablallena = true;
    }
    }


function agregarproducto(){
    const tabla = document.getElementById("tabla")
        let nombreproductonuevo = prompt("Ingrese nombre de producto")
        let tipoproductonuevo = prompt("Ingrese el tipo de producto")
        let marcaproductonuevo = prompt("Ingrese la marca del producto")
        let precioproductonuevo = Number(prompt("Ingrese el precio del producto"))
        let cantidadproductonuevo= Number(prompt("Ingrese la cantidad incial del producto"+" "+ nombreproductonuevo))
        let disponibleproductonuevo = confirm("El" +" "+ nombreproductonuevo +" "+ "¿estará disponible para la venta?")
        let productonuevo = new item(nombreproductonuevo,tipoproductonuevo,marcaproductonuevo,precioproductonuevo,cantidadproductonuevo,disponibleproductonuevo)
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

    const botonAddProduct = document.querySelector("#btnAddProduct")
    const botonRefresh = document.querySelector("#btnRefresh")

    botonAddProduct.addEventListener("click", () =>{
        agregarproducto()
    })

    botonRefresh.addEventListener("click", () => {
        productList()
    })

    const botones = document.querySelectorAll("button")
    botones.forEach(btn =>{
        btn.addEventListener("focus", () => btn.className ="btn btn-success btneffect")
        btn.addEventListener("blur", () => btn.className = "btn btn-success")
    })