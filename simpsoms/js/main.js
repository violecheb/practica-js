// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector("#titulo");
    let nombre = prompt("COMO TE LLAMAS?");
    let saludo = document.querySelector("#saludo");
    if (nombre){
        saludo.innerText = `BIENVENID@ ${nombre}`;
        saludo.style.textTransform = "uppercase";
    }
    else{
        saludo.innerText = "BIENVENID@";
    }

    let span = document.querySelector("span");
    titulo.style.display = "none";
    span.style.display = "block";

 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */

    

    /* Asignarle evento a la variable boton */
    /*let boton = ;*/
 
 
 }) 