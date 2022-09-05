
// --------------------Arrays-------------------

class item{
    constructor (nombre, tipo, marca, precio, cantidad, disponible){
        this.nombre=nombre
        this.tipo=tipo
        this.marca=marca
        this.precio=precio
        this.cantidad=cantidad
        this.disponible=disponible
    }

    stock(){
        if(this.disponible===true){
            console.log("la cantidad disponible del producto es:"+" "+this.cantidad)
        }else{
            console.log("El producto solicitado se encuentra fuera de stock")
        }
    }

    reponer(x){
        this.cantidad=this.cantidad+x;
        if(this.cantidad>0){
            this.disponible=true
        }
        else{
            this.disponible=false
        }
        console.log("la cantidad total de producto es"+" "+this.cantidad)
    }

    comprar(x){
        if(this.cantidad>=x){
            let valor = this.precio*x
            alert ("El importe a pagar es:"+" "+valor)
            console.log("El importe a pagar es:"+" "+valor)
            this.cantidad = this.cantidad - x
            if(this.cantidad == 0){
                this.disponible = false
            }
            else{
                this.disponible = true
            }
        }
        else{
            alert ("Cantidad insuficiente")
            console.log("Cantidad insuficiente")
            }
        }
    }

const productos=[]

let producto1= new item("cafetera automatica","cafetera","oster",60000,5,true)
let producto2= new item("jarra barista","bazar","aroma caffe",4000,1,true)
let producto3= new item("kit barista","bazar","barista",12000,5,true)
let producto4= new item("cafetera chemex","cafetera","chemex",10000,6,true)
let producto5= new item("cafetera moka","cafetera","moka",8000,8,true)
let producto6= new item("cafetera bialetti","cafetera","bialettu",16000,4,true)
let producto7= new item("cafe natural","cafe","natural",3000,16,true)
let producto8= new item("cafe organico","cafe","saula",8000,6,true)

productos.push(producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8)

console.table(productos)


// --------------------Agregar productos mediante función-------------------tipo, marca, precio, cantidad, disponible

function nuevoproducto(){
    let nombreproductonuevo = prompt("Ingrese nombre de producto")
    let tipoproductonuevo = prompt("Ingrese el tipo de producto")
    let marcaproductonuevo = prompt("Ingrese la marca del producto")
    let precioproductonuevo = parseInt(prompt("Ingrese el precio del producto"))
    let cantidadproductonuevo= parseInt(prompt("Ingrese la cantidad incial del producto" + nombreproductonuevo))
    let disponibleproductonuevo = confirm("El" +" "+ nombreproductonuevo +" "+ "¿estará disponible para la venta?")
    let productonuevo = new item(nombreproductonuevo,tipoproductonuevo,marcaproductonuevo,precioproductonuevo,cantidadproductonuevo,disponibleproductonuevo)
    console.log(productonuevo)
    productos.push(productonuevo)
}

// --------------------Agregar productos preguntando primero-------------------
// let agregarproducto = confirm("¿Desea agregar nuevos productos a la tienda?")
// if (agregarproducto === true){
//         let nombreproductonuevo = prompt("Ingrese nombre de producto")
//         let tipoproductonuevo = prompt("Ingrese el tipo de producto")
//         let marcaproductonuevo = prompt("Ingrese la marca del producto")
//         let precioproductonuevo = parseInt(prompt("Ingrese el precio del producto"))
//         let cantidadproductonuevo= parseInt(prompt("Ingrese la cantidad incial del producto" + nombreproductonuevo))
//         let disponibleproductonuevo = confirm("El" +" "+ nombreproductonuevo +" "+ "¿estará disponible para la venta?")
//         let productonuevo = new item(nombreproductonuevo,tipoproductonuevo,precioproductonuevo,cantidadproductonuevo,disponibleproductonuevo)
//         console.log(productonuevo)
//         productos.push(productonuevo)
//     }


let filtrado = confirm("¿Desea filtrar los productos?")
if (filtrado == true){
    let ingreso = Number(prompt("Ingrese el precio de busqueda para filtrar los productos"))
    let filtrado = productos.filter(producto=>producto.precio < ingreso)
    console.table(filtrado)
}
