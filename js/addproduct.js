
// //----------------------------Formulario----------------------------//

// ------------------ Add Product --------------//

function agregarproducto(){   //id, imagen, nombre, tipo, marca, precio, stock, descripcion, disponible//
    const valores = document.querySelectorAll(".inputaddproduct")
    let disponibilidad = false;
    if(valores[4].value > 0){
        const cartprod = prodadded.find(product => ((product.nombre == valores[0].value) & (product.marca == valores[2].value)));
        if (cartprod){
            swal({
                title: "Este producto ya se encuentra agregado",
                text: "Ya has agregado este producto anteriormente",
                icon: "warning",
                button: "Ufff!",
            });
        }
        else {
            valores[4].value > 0 && (disponibilidad=true);    
            let nuevoid = prodadded.length + 9;
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
    }
    else {
        swal({
            title: "Stock insuficiente",
            text: "No puedes agregar productos si no tienes stock!",
            icon: "warning",
            button: "🤕",
        });
    }
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
