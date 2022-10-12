
// //----------------------------Formulario----------------------------//

// ------------------ Add Product --------------// //id, imagen, nombre, tipo, marca, precio, stock, descripcion, disponible//
// const botonaddproduct = document.querySelector("#addproduct__send")
// botonaddproduct.addEventListener("click", (e)=>{
//     e.preventDefault();
//     agregarproducto();
// })

function agregarproducto(){
    const valores = document.querySelectorAll(".inputaddproduct")
    let disponibilidad = false;
        valores[4].value > 0 && (disponibilidad=true)
    let nuevoid = productos.length + 1;
    let productonuevo = new item(nuevoid, "./img/nodisponible.png", valores[0].value, valores[1].value, valores[2].value, parseInt(valores[3].value), parseInt(valores[4].value), valores[6].value, disponibilidad)
        console.log(productonuevo)
        prodadded.push(productonuevo);
        localStorage.setItem("prodadded", JSON.stringify(prodadded));

        Toastify({
            text: "Se ha añadido el producto al Inventario",
            duration: 2000,
            gravity: "top",
            position : "left",
            style: {
                background: "#3ca6a657",
            }
        }).showToast();
    }


function loginuser(){
    const username = document.querySelector("#username").value;
    const userpass = document.querySelector("#userpass").value;
    if (username =="admin" & userpass == "admin"){
        swal({
            title: "Bienvenido a AromaCaffe",
            text: "Ya puedes agregar productos",
            icon: "success",
            button: "Vamos!",
        });
        const form_login = document.querySelector("#loginuser")
        form_login.className = "dsnone"
        const form_add_product = document.querySelector("#form_add_product")
        form_add_product.className = "form_aniadir__article";
    }
    else{
        swal({
            title: "Mmmm...🤔 Tu no eres el administrador",
            text: "Hemos enviado un velocirraptor a buscarte 🦖",
            icon: "warning",
            button: "A correr!",
        });
        
    }
}
