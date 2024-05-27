let bienvenida = "Bienvenidos a mi sitio.";
alert(bienvenida)
let confirmar = "¿Esta seguro de querer avanzar?"
confirm(confirmar)
let saludo = document.querySelector("h2.saludo")
if (confirmar==true){
    document.querySelector("h2").innerText = "Que alegria que quieras continuar tu visita."}
else{
    document.querySelector("h2").innerText = "Lamentamos que no quieras continuar con tu visita."
    return;
    }

let nombre = prompt("Por favor ingrese su nombre: ");
document.querySelector("h1").innerText = "Bienevido ${nombre}"

let anios = prompt("Cuantos años tenes? ")
let container = document.querySelector("div.container-general")
let cointainer2 = document.querySelector("id.accesoDenegado")
if (anios<18){
    container.style.display = "none";
    cointainer2.style.display = "block";
}

let pregunta = confirm("Te gusta la programacion? ")
if (!pregunta){
    document.querySelector("div.background-img").innerHTML += "imagenes/gatito.jpeg"
}
else{
    document.querySelector("div.background-img").innerHTML += "imagenes/programmer.jpeg"
}

let avatarLink = prompt("Por favor, ingresa el link de una imagen para tu avatar: ");
if (avatarUrl) {
    let avatar = document.querySelector('.avatar');
    avatar.src = avatarLink;}

let pelicula ={
    nombre: prompt("Pelicula favorita: "),
    director: prompt("Director de la pelicula: "),
    duracion: prompt("Duracion de la pelicula: "),
    actor: prompt("Actore preferido de la pelicula: ")
}