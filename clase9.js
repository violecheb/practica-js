/*CLASE 9*/
/* PRACTICA ALERTAS Y CONDICIONALES*/

/*ej1 */
let mensaje= "vas a salir de tu casa?"
let resultado= confirm(mensaje)
console.log(resultado);
if (resultado == true){
  alert("Chequea el pronostico del tiempo ante de salir")
} else {
  alert("Que bueno que te quedes. Va a llover mucho hoy.")
}

/*ej2 */
let nombre= prompt("Ingrese su nombre: ")
console.log(nombre)

let edad= prompt("Ingrese su edad: ")
console.log(edad)

let fanDeportes= confirm("Te gustan los deportes?")
console.log(fanDeportes)

alert('Muchas gracias ${nombre} por responder nuestras preguntas');
