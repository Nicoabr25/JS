const URL = "../bbdd/data.json";

const getData = async () =>{
    prodinicial = []
    try{
        const response = await fetch (URL);
        const data = await response.json();
        prodinicial.push(...data)
    }
    catch(er){
        console.log(er)
        swal({
            title: "🤕 No hemos podido cargar los productos",
            text: "Intentalo de nuevo más tarde",
            icon: "alert",
            button: "Ok!",
        });
    }

    finally{
        localStorage.setItem("prodinicial", JSON.stringify(prodinicial))
        productos = [...prodinicial, ...prodadded];
        productCard(productos)
    }
}
document.addEventListener("DOMContentLoaded", getData);
