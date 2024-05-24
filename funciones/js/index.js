 /* PRACTICA FUNCIONES*/
/* 1 */
function rectangulo(base, altura) {
return base * altura;
}
console.log(rectangulo(10, 7))

/* 2 */
function triangulo(base, altura){
return base * altura/2
}
console.log(triangulo(9, 4));

/* 3 */
function largoArray(array){
return array.length;
}
console.log(largoDelArray([12, 23, 22, 43, 25]));

/* 4 */
function cantidadDeLetras(palabra){
return palabra.length;
}
console.log(cantidadDeLetras("ayudar"))

/* 5 */
function dolarHoy(pesos){
const tasaCamb = 100;
return pesos / tasaCamb;
}
console.log(dolarHoy(1000));

/* 6 */
function precioFinal(precio){
const iva = 0.21
return precio * (1 + iva);
}
console.log(precioFinal(400))

/* 7 */
function mitad(precio){
return precio/2;
}
console.log(mitad(20))

/* 8 */
function diaSegunNumero(array, numero){
const diasDeLaSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
if (numero >= 1 & numero <= 7) {
  return diasDeLaSemana[numero - 1];
} else {
  return "Número fuera de rango";
}
}