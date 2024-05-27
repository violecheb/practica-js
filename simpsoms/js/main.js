// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let bienvenida = document.querySelector("section.bienvenida");
    bienvenida.style.display= "flex";
    let titulo = document.querySelector("#titulo");
    let nombre = prompt("COMO TE LLAMAS?");
    let saludo = document.querySelector("#saludo");
    if (nombre){
        saludo.innerText = `BIENVENID@ ${nombre}`;
        saludo.style.textTransform = "uppercase";
    }
    else{
        saludo.innerText = "BIENVENID@";
    };

    let span = document.querySelector("span");
    titulo.style.display = "none";
    span.style.display = "block";

span.addEventListener("click", function(){
    let personajes = document.querySelector("section.personajes");
    bienvenida.style.display= "none";
    personajes.style.display= "flex";

});
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
let bart = document.querySelector("#bart");
let lisa = document.querySelector("#lisa");
let homero = document.querySelector("#homero");
let marge = document.querySelector("#marge");
let maggie = document.querySelector("#maggie");
let milhouse = document.querySelector("#milhouse");
let burns = document.querySelector("#burns");
let bobPatinio = document.querySelector("#bobPatinio");
let flanders = document.querySelector("#flanders");
let duffman= document.querySelector("#duffman");
let gorgory = document.querySelector("#gorgory");
let nelson = document.querySelector("#nelson");

bart.addEventListener("click", function(){
    if(bart.classList.contains("personaje-seleccionado")){
        bart.classList.remove("personaje-seleccionado");
    } else{
        bart.classList.add("personaje-seleccionado");
    }
    });

lisa.addEventListener("dblclick", function(){
    if(lisa.classList.contains("personaje-seleccionado")){
        lisa.classList.remove("personaje-seleccionado");
    } else{
        lisa.classList.add("personaje-seleccionado");
    }
});
homero.addEventListener("click", function(){
    if(homero.classList.contains("personaje-seleccionado")){
        homero.classList.remove("personaje-seleccionado");
    } else{
        homero.classList.add("personaje-seleccionado");
    }
});
marge.addEventListener("mouseover", function(){
    if(marge.classList.contains("personaje-seleccionado")){
        marge.classList.remove("personaje-seleccionado");
    } else{
        marge.classList.add("personaje-seleccionado");
    }
});
maggie.addEventListener("mouseout", function(){
    if(maggie.classList.contains("personaje-seleccionado")){
        maggie.classList.remove("personaje-seleccionado");
    } else{
        maggie.classList.add("personaje-seleccionado");
    }
});
milhouse.addEventListener("click", function(){
    if(milhouse.classList.contains("personaje-seleccionado")){
        milhouse.classList.remove("personaje-seleccionado");
    } else{
        milhouse.classList.add("personaje-seleccionado");
    }
});

burns.addEventListener("mouseover", function(){
    if(burns.classList.contains("personaje-seleccionado")){
        burns.classList.remove("personaje-seleccionado");
    } else{
        burns.classList.add("personaje-seleccionado");
    }
});

bobPatinio.addEventListener("dblclick", function(){
    if(bobPatinio.classList.contains("personaje-seleccionado")){
        bobPatinio.classList.remove("personaje-seleccionado");
    } else{
        bobPatinio.classList.add("personaje-seleccionado");
    }
});
flanders.addEventListener("mouseover", function(){
    if(flanders.classList.contains("personaje-seleccionado")){
        flanders.classList.remove("personaje-seleccionado");
    } else{
        flanders.classList.add("personaje-seleccionado");
    }
});
duffman.addEventListener("mouseover", function(){
    if(flanders.classList.contains("personaje-seleccionado")){
        flanders.classList.remove("personaje-seleccionado");
    } else{
        flanders.classList.add("personaje-seleccionado");
    }
});
gorgory.addEventListener("mouseover", function(){
    if(gorgory.classList.contains("personaje-seleccionado")){
        gorgory.classList.remove("personaje-seleccionado");
    } else{
        gorgory.classList.add("personaje-seleccionado");
    }
});
nelson.addEventListener("click", function(){
    if(nelson.classList.contains("personaje-seleccionado")){
        nelson.classList.remove("personaje-seleccionado");
    } else{
        nelson.classList.add("personaje-seleccionado");
    }
});

let personajes = [bart, lisa, homero, marge, maggie, milhouse, burns, bobPatinio, flanders, duffman, gorgory, nelson];
let seleccionados = [];

let boton = document.querySelector("h3.boton");
boton.addEventListener("click", function(){
    for(let i=0; i<personajes.length; i++){
        if(nelson.classList.contains("personaje-seleccionado")){
        seleccionados.push(personajes[i])}
    }
    console.log(seleccionados)
});
    /* Asignarle evento a la variable boton */
    /*let boton = ;*/

});