let corredores[]
let datos= document.querySelector(#formCorredores).value;

 // Obtener datos del formulario
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let edad = Number(document.querySelector("#edad").value);
    let numero = Number(document.querySelector("#numero").value);
    let tiempo = Number(document.querySelector("#tiempo").value);

let corredor = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    numero: numero,
    tiempo: tiempo
};

 // Guardar corredor en el array
    corredores.push(corredor);

    alert("Corredor agregado correctamente");

    console.log("Lista de corredores:");
    console.log(corredores);


//validacion de datos
if(nombre === "" || apellido === ""){
    alert("Debe completar nombre y apellido");
    return;
}

if(edad <= 0){
    alert("Edad inválida");
    return;
}

if(tiempo <= 0){
    alert("Tiempo inválido");
    return;
}