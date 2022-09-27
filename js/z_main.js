// // --------------------Arrays-------------------

// class item{
//     constructor (id, imagen, nombre, tipo, marca, precio, cantidad, descripcion, disponible){
//         this.id=id 
//         this.imagen=imagen 
//         this.nombre=nombre
//         this.tipo=tipo
//         this.marca=marca
//         this.precio=precio
//         this.cantidad=cantidad
//         this.descripcion =descripcion
//         this.disponible=disponible
//     }

//     stock(){
//         if(this.disponible===true){
//             console.log("la cantidad disponible del producto es:"+" "+this.cantidad)
//         }else{
//             console.log("El producto solicitado se encuentra fuera de stock")
//         }
//     }

//     reponer(x){
//         this.cantidad=this.cantidad+x;
//         if(this.cantidad>0){
//             this.disponible=true
//         }
//         else{
//             this.disponible=false
//         }
//         console.log("la cantidad total de producto es"+" "+this.cantidad)
//     }

//     comprar(x){
//         if (confirm("¿Desea agregar"+" "+x+" "+"de:"+" "+this.nombre+" "+"al carrito?")){
//             if(this.cantidad>=x){
//                 let valor = this.precio*x
//                 alert ("Se agregaron" +" "+ x +" "+"unidades de:"+" "+ this.nombre+" "+"al carrito de comprar con un valor total de:"+" "+valor)
//                 console.log("Se agregaron" +" "+ x +" "+"unidades de:"+" "+ this.nombre+" "+"al carrito de comprar con un valor total de:"+" "+valor)
//                 this.cantidad = this.cantidad - x

//                 let productocompra= new item(this.id, this.imagen, this.nombre, this.tipo, this.marca, valor, x, this.disponible)
//                 carrito.push(productocompra)
//                     if(this.cantidad == 0){
//                         this.disponible = false
//                     }
//                     else{
//                         this.disponible = true
//                     }
//             }
//             else{
//                 alert ("Cantidad insuficiente")
//                 console.log("Cantidad insuficiente")
//                 }
//             }
//         }
//     }


// const productos=[] //id, imagen, nombre, tipo, marca, precio, cantidad, descripcion, disponible//

// let producto1= new item(1,"./img/cafetera_molinillo1.png","Cafetera Automática","cafetera","oster",60000,5,"Cafetera automática con molinillo eléctrico con capacidad para dos bocas, con 25 bares de presión de trabajo.",true)
// let producto2= new item(2,"./img/jarrabarista.png","Jarra Barista","bazar","aroma caffe",4000,1,"Jarra de dibujo para Barista. Realizada en acero inoxidable con detalles en Cromo.",true)
// let producto3= new item(3,"./img/kitbarista.png","Kit Barista","bazar","barista",12000,5,"Kit de Inicio Barista, dabricado en Acero Inoxidable con detalles en cobre.",true)
// let producto4= new item(4,"./img/chemex.png","Cafetera Chemex","cafetera","chemex",10000,6,"Elegante cafetera chemex de vidrio resistente a altas temperaturas.",true)
// let producto5= new item(5,"./img/cafeteramoka.png","Cafetera Moka","cafetera","moka",8000,8,"La clásica cafetera Moka Italiana. Material: Acero Inoxidable.",true)
// let producto6= new item(6,"./img/cafeterabialetti.png","Cafetera Bialetti","cafetera","bialetti",16000,4,"Cafetera de diseño desarollada por Bialetti Italia.",true)
// let producto7= new item(7,"./img/cafenatural.png","Café Natural","cafe","natural",3000,16,"Café Natural de altura cosechado a 800 metros sobre el nivel del mar.",true)
// let producto8= new item(8,"./img/cafeorganico.png","Café Organico","cafe","saula",8000,6,"Café Orgánico certificado de autor.",true)

// productos.push(producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8)

// console.table(productos)


// // --------------------Carrito de Compras utiliza la funcion de comprar definida en el class--------------

// var carrito = []

// function updatecart(prod){
//     const tablacarrito = document.querySelector("#tabla_carrito")
//     let fila = `<tr>
//                     <td scope="row">${prod.id}</td>
//                     <td>${prod.nombre}</td>
//                     <td>${prod.tipo}</td>
//                     <td>${prod.marca}</td>
//                     <td>${prod.precio}</td>
//                     <td>1</td>
//                     <td><button class="button">❎</button></td>
//                 </tr>`
//         tablacarrito.innerHTML += fila;
// }


// function pagar(){ // --------------------se agrego el reduce en una funcinon para pdoer ejecutarlo desde la consola, ya que el carrito inicia vaacio--------------
//     const sumatotal = carrito.reduce ((acc, el) => acc + el.precio, 0);
// console.log(sumatotal);
// alert ("Se debitarin $" +" "+ sumatotal +" "+"de su tarjeta. Gracias por su compra")
// }

// function vaciarcarrito(){
//     carrito = [];
//     console.table(carrito);
// }
