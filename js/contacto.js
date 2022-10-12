//----------------------------Formulario----------------------------//
const inputs = document.querySelectorAll(".datos")
const comentarioEnviar = document.querySelector("#comentarioenviar")
const contactoNombre = document.querySelector("#contactonombre");
const contactoEmail = document.querySelector("#contactoemail");
const contactoComentario = document.querySelector("#contactocomentario");


function enviarcomentario(){
    localStorage.setItem("nombre", contactoNombre.value);
    localStorage.setItem("email", contactoEmail.value);
    localStorage.setItem("comentario", contactoComentario.value);
}

inputs.forEach(input =>{
    input.addEventListener("focus", () => input.className = "addproduct__borderinput")
    input.addEventListener("blur", () => input.className = "")
})


comentarioEnviar.addEventListener("click", (e)=>{
    e.preventDefault();
    enviarcomentario();
});

function recuperardatos(){
    contactoNombre.value = localStorage.getItem("nombre");
    contactoEmail.value = localStorage.getItem("email");
    contactoComentario.value = localStorage.getItem("comentario");
}

document.addEventListener("DOMContentLoaded", recuperardatos);