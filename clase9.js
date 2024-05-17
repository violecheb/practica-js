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
let nombre= prompt("Ingrese su nombre: ");
console.log(nombre);

let edad= prompt("Ingrese su edad: ");
console.log(edad);

let fanDeportes= confirm("Te gustan los deportes?")
console.log(fanDeportes);

alert('Muchas gracias ${nombre} por responder nuestras preguntas');

const usuario= {
  deportistaProfesional: funcion(){
  if(this.fanDeportes){
    return "si, soy fan de los deportes";}
  else{
    return "no soy tan fan aun de los deportes";}}
}

/*AGREGANDO FUNCIONES */
/*haciendo cuentas */
let numero = prompt("Ingrese un numero: ");
console.log(numero);

let numerodos= prompt("Ingrese otro numero: ");
console.log(numerodos)

function multiplicar(num1, num2){
  let resultado = num1*num2;
  return 'el resultado de multiplicar ${num1} y ${num2} es: ${resultado}'
}
console.log(multiplicar(num1, num2));

/* FILOSOFO HIPSTER */
let nacionalidad = prompt("ingresa tu nacionalidad: ");
let profesion = prompt("ingresa tu profesion: ");
let kms = prompt("Cuantos kms caminas por dia: ");

function filosofoHipster(nacionalidad, profesion, kmsRecorridos){
  if (nacionalidad=='Argentina' && profesion=='Musico' && kms>=2){
    return "soy un filosofo hipster"}
  else {
    return "aun no soy filosofo hipster"}}
    





