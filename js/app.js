"use strict";

//Capturar nodos

const expreg = document.querySelector("#expreg"); // Nodo (HTMLSelectElement) para seleccionar la expresión regular
const mensaje = document.querySelector(".mensaje"); //Nodo (HtmlDivElement)
//Funciones
const buscarMierda = (mensaxe) => {
    const patron = /mierda/; //objeto de expresión regular 
    //Buscar con mayúsculas y minúsculas --con flags
    const patronMayMin = /mierda/i;
    let cadena = prompt("Dame tu nombre"); //string
    if(cadena===null){ //pulsé el botón cancelar
        return;

    }
    if(patron.test(cadena)){
        mensaje.innerHTML = `La palabra <strong>mierda</strong> se encuentra en la cadena`
    }else{
        mensaje.innerHTML = `La palabra <strong>mierda</strong> no se encuentra en la cadena "${cadena}"`
    }
    

}
//Validar una expresión regular
/**
 * 
 * @param {object} patron Expresión regular con formato literal /xxxx/ */
 
const validarCP = (patron) => {
    let CP = prompt ("dame un cp");
    if(CP===null)
    if(patron.test(cadena){

    }else{

    }
)
}

// //Evento, acciones que lleva a cabo una máquina o usuario 
// expreg.addEventListener(
//     "click",
//     () => {
//         console.log("ok")
//     }
// );


//Evento del selector
expreg.onchange = (e) => {
    //capturo el value del nodo (que es un select)
    switch (e.target.value) {
        case "1":
            //instrucciones
            buscarMierda("vou buscar");
            break;
        case "2":
            validarCP(/[0-9][0-9][0-9][0-9][0-9]/)
            break;
        default:
            //alert("no esxiste la opción")
            break;
    }

}