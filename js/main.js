// --------------------Explicacion-------------------
// La idea es simular un carrito de compras, sin haber creado las interaciones con el documento html 
// Para ello, el programa se corre en la consola y nos muesta los productos que estan cargados. 
// con la funcion stock() podemos ver la cantidad disponible de un producto determinado, por ejemplo producto2.stock()
// podemos usar la funcion reponer(x) para agregar x cantindad al producto elejido, usando producto3.reponer(4) agregara 4 cantindades a las
// cantidades existentes del producto3

// Con console.table(productos) podemos ver en la tabla todo el inventario disponible, incluso las unidades que fueron agregadas. 
// utilizando la funcion filtrar(), se dispara un prompr que nos permite filtrar la lista de productos para buscar productos cuyo precio 
// sea menor al valor ingresado y nos lo muestra como una tabla con los resultados

// luego, lo mas importante es la funcion comprar, que nos permite agregar x cantidad del producto selecionad al carrito de compras 
// siempre y cuando aceptemos la confirmacion

// una vez agregados los productos al carrito de compras, se puede ver el monto total a abonar llamando a la funcion pagar() 
// la cual nos devuelve el importe total de todos los productos del carrito. 

// finalmente con la funcion vaciarcarrito() podemos borrar todos los productos agregados. 




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
        if (confirm("¿Desea agregar"+" "+x+" "+"de:"+" "+this.nombre+" "+"al carrito?")){
            if(this.cantidad>=x){
                let valor = this.precio*x
                alert ("Se agregaron" +" "+ x +" "+"unidades de:"+" "+ this.nombre+" "+"al carrito de comprar con un valor total de:"+" "+valor)
                console.log("Se agregaron" +" "+ x +" "+"unidades de:"+" "+ this.nombre+" "+"al carrito de comprar con un valor total de:"+" "+valor)
                this.cantidad = this.cantidad - x

                let productocompra= new item(this.nombre, this.tipo, this.marca, valor, x, this.disponible)
                carrito.push(productocompra)
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
    }


const productos=[]

let producto1= new item("cafetera automatica","cafetera","oster",60000,5,true)
let producto2= new item("jarra barista","bazar","aroma caffe",4000,1,true)
let producto3= new item("kit barista","bazar","barista",12000,5,true)
let producto4= new item("cafetera chemex","cafetera","chemex",10000,6,true)
let producto5= new item("cafetera moka","cafetera","moka",8000,8,true)
let producto6= new item("cafetera bialetti","cafetera","bialetti",16000,4,true)
let producto7= new item("cafe natural","cafe","natural",3000,16,true)
let producto8= new item("cafe organico","cafe","saula",8000,6,true)

productos.push(producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8)

console.table(productos)


// --------------------Agregar productos mediante función-------------------tipo, marca, precio, cantidad, disponible

// function nuevoproducto(){
//     let nombreproductonuevo = prompt("Ingrese nombre de producto")
//     let tipoproductonuevo = prompt("Ingrese el tipo de producto")
//     let marcaproductonuevo = prompt("Ingrese la marca del producto")
//     let precioproductonuevo = Number(prompt("Ingrese el precio del producto"))
//     let cantidadproductonuevo= Number(prompt("Ingrese la cantidad incial del producto"+" "+ nombreproductonuevo))
//     let disponibleproductonuevo = confirm("El" +" "+ nombreproductonuevo +" "+ "¿estará disponible para la venta?")
//     let productonuevo = new item(nombreproductonuevo,tipoproductonuevo,marcaproductonuevo,precioproductonuevo,cantidadproductonuevo,disponibleproductonuevo)
//     console.log(productonuevo)
//     productos.push(productonuevo)
// }

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


function filtrar(){
    let filtrado = confirm("¿Desea filtrar los productos?")
    if (filtrado == true){
        let ingreso = Number(prompt("Ingrese el precio de busqueda para filtrar los productos"))
        let filtrado = productos.filter(producto=>producto.precio < ingreso)
        console.table(filtrado)
    } 
}

// --------------------Carrito de Compras utiliza la funcion de comprar definida en el class--------------

var carrito = []

function pagar(){ // --------------------se agrego el reduce en una funcinon para pdoer ejecutarlo desde la consola, ya que el carrito inicia vaacio--------------
    const sumatotal = carrito.reduce ((acc, el) => acc + el.precio, 0);
console.log(sumatotal);
alert ("Se debitarin $" +" "+ sumatotal +" "+"de su tarjeta. Gracias por su compra")
}

function vaciarcarrito(){
    carrito = [];
    console.table(carrito);
}
