// --------------------Clase 2--------------------

// let numero = (prompt("Ingrese un numero"));

// if (parseInt(numero) > 1000){
//     alert ("es mayor que 1000")
// }
// else {
//     alert ("es menor que 1000")
// }

// let texto = prompt("ingrese un texto")
// let textomin = texto.toLowerCase();
// if (textomin === "hola"){
//     alert ("Hola!")
// }
// else {
//     alert ("¿Y el saludo?)
// }

// --------------------Clase 3--------------------
// let numero = parseInt(prompt("Ingrese un numero"));
// for (let i=1; i<=10; i++){
//     let resultado = numero*i;
//     alert(numero +" "+"x"+" "+i+" "+"="+" "+resultado);
// }

// numeros Primos 

// let ingreso = parseInt(prompt("Ingrese un numero"));
// if (ingreso ===0 || ingreso === 1){
//     alert("Ingresaste" + " " + ingreso +" " +"proba con otro numero");
// }
// if (ingreso ===2){
//     alert ("Ingresaste" + " " + ingreso +" " +"que es primo");
// }

// for (let i=2; i<ingreso; i++){
//     console.log("el numero ingresado es"+" "+ingreso);
//     if (ingreso % i === 0){
//         alert("el numero" + " " + ingreso +" "+"NO es primo");
//         console.log(ingreso%i);
//     }
//     else {
//         alert("el numero"+" "+ingreso+" "+"es primo");
//         console.log(ingreso%i);
//     }
//     break
// }

        let cantidadCafe = parseFloat(prompt("Ingrese la cantidad de cafe en %"));
        let cantidadLeche = 100 - cantidadCafe;
        let tamanio = prompt("Eliga su tamaño de vaso: M, L o XL");
        let valor = Math.round(costo(cantidadCafe,cantidadLeche,tamanio.toUpperCase()));
        if (cantidadCafe <= 100){
            console.log("resultado", valor);
            alert ("El precio de su café será de: $" + valor);
        }
            else {
                alert("La cantidad de café supera el tamaño del vaso, por lo que se le servirá un cafe regular al valor de:" + " " + costo(100,0,tamanio));
            }

function costo (cafe, leche, size) {
    let costocafe = cafe/100 * 280;
    let costoleche = leche/100 * 220;
    switch (size) {
        case "M":
            return (costocafe + costoleche)*1.1;
            break;
        case "L":
            return (costocafe + costoleche)*1.3;
            break;
        case "XL":
            return (costocafe + costoleche)*1.6;
            break;
        default:
            return alert("Ingrese el tamaño del vaso M, L o XL");
            break;
    }
}