// --------------------Arrays-------------------

class item{
    constructor (id, imagen, nombre, tipo, marca, precio, stock, descripcion, disponible){
        this.id=id;
        this.imagen=imagen;
        this.nombre=nombre;
        this.tipo=tipo;
        this.marca=marca;
        this.precio=precio;
        this.stock=stock;
        this.descripcion =descripcion;
        this.disponible=disponible;
    }

    stock(){
        if(this.disponible===true){
            console.log("la cantidad disponible del producto es:"+" "+this.stock);
        }else{
            console.log("El producto solicitado se encuentra fuera de stock");
        }
    }

    reponer(x){
        this.stock=this.stock+x;
        if(this.stock>0){
            this.disponible=true;
        }
        else{
            this.disponible=false;
        }
        console.log("la cantidad total de producto es"+" "+this.stock);
    }

    comprar(x){
        if (confirm("¿Desea agregar"+" "+x+" "+"de:"+" "+this.nombre+" "+"al carrito?")){
            if(this.stock>=x){
                let valor = this.precio*x
                alert ("Se agregaron" +" "+ x +" "+"unidades de:"+" "+ this.nombre+" "+"al carrito de comprar con un valor total de:"+" "+valor)
                console.log("Se agregaron" +" "+ x +" "+"unidades de:"+" "+ this.nombre+" "+"al carrito de comprar con un valor total de:"+" "+valor)
                this.stock = this.stock - x

                let productocompra= new item(this.id, this.imagen, this.nombre, this.tipo, this.marca, valor, x, this.disponible)
                carrito.push(productocompra)
                    if(this.stock == 0){
                        this.disponible = false
                    }
                    else{
                        this.disponible = true
                    }
            }
            else{
                alert ("Cantidad insuficiente");
                console.log("Cantidad insuficiente");
                }
            }
        }
    };

    // let productos =[]
    let prodinicial = []
    let prodadded = JSON.parse(localStorage.getItem("prodadded")) || [];


    // let productos = prodincial.concat(prodadded) //id, imagen, nombre, tipo, marca, precio, stock, descripcion, disponible//
    
    let producto1= new item(1,"./img/cafetera_molinillo1.png","Cafetera Automática","cafetera","oster",60000,5,"Cafetera automática con molinillo eléctrico con capacidad para dos bocas, con 25 bares de presión de trabajo.",true);
    let producto2= new item(2,"./img/jarrabarista.png","Jarra Barista","bazar","aroma caffe",4000,1,"Jarra de dibujo para Barista. Realizada en acero inoxidable con detalles en Cromo.",true);
    let producto3= new item(3,"./img/kitbarista.png","Kit Barista","bazar","barista",12000,5,"Kit de Inicio Barista, dabricado en Acero Inoxidable con detalles en cobre.",true);
    let producto4= new item(4,"./img/chemex.png","Cafetera Chemex","cafetera","chemex",10000,6,"Elegante cafetera chemex de vidrio resistente a altas temperaturas.",true);
    let producto5= new item(5,"./img/cafeteramoka.png","Cafetera Moka","cafetera","moka",8000,8,"La clásica cafetera Moka Italiana. Material: Acero Inoxidable.",true);
    let producto6= new item(6,"./img/cafeterabialetti.png","Cafetera Bialetti","cafetera","bialetti",16000,4,"Cafetera de diseño desarollada por Bialetti Italia.",true);
    let producto7= new item(7,"./img/cafenatural.png","Café Natural","cafe","natural",3000,16,"Café Natural de altura cosechado a 800 metros sobre el nivel del mar.",true);
    let producto8= new item(8,"./img/cafeorganico.png","Café Organico","cafe","saula",8000,6,"Café Orgánico certificado de autor.",true);
    
    prodinicial.push(producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8);
    
    let productos = [...prodinicial, ...prodadded]

// function ActualizarLista(){
//     let prodadded = JSON.parse(localStorage.getItem("prodadded"));
//     if (prodadded == null){
//         prodadded = []
//     }
//     else{
//         prodadded = Object.entries(JSON.parse(localStorage.getItem("prodadded")));
//     }
// }
// addEventListener("DOMContentLoaded", ActualizarLista);
