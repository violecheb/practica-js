 /* PRACTICA 1 FUNCIONES */
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
if (numero >= 1 and numero <= 7) {
  return diasDeLaSemana[numero - 1];
} else {
  return "Número fuera de rango";
}
}

 /* PRACTICA 2 OBJETOS LITERALES*/
/* 1 */
let misDatos = {
nombre: "Violeta",
apellido: "Cheb",
dni: "46025678",
comidasFavoritas: ["helado", "hamburguesa", "tiramisu"], /* tengo que usar array */
}

console.log(misDatos);

/* 2 */
let misDatos = {
nombre: "Violeta",
apellido: "Cheb",
dni: "46025678",
comidasFavoritas: ["helado", "hamburguesa", "tiramisu"],
saludar: function() {
return "Hola mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años. Mi primera comida favorita es " + this.comidas_fav[0] + "."
}
}
console.log(misDatos2.saludar());

/* 3 */
let auto = {
marca: "Volkswagen",
modelo: "GOL",
anio: 2018,
color: "Negro",
posicion: 0,
avanzar: function(n) {
this.posicion += n;
return this.posicion;
},
retroceder: function(n) {
this.posicion -= n;
return this.posicion ;
}
}

auto.avanzar(10);
auto.retroceder(5);
auto.avanzar(1);
console.log(auto.posicion); /* dentro de los parentesis de console log llamo a la posicion del auto */ 

/* 4 */

let nuevoAuto = {
marca: "Volkswagen",
modelo: "GOL",
anio: 2018,
color: "Negro",
posicion: 0,
moverse: function(n) {
if n>0:
 this.posicion += n;
 return this.posicion;
elif n<0:
 this.posicion -= n;
 return this.posicion ;
}
}
nuevoAuto.moverse(2);
nuevoAuto.moverse(-5);
console.log(nuevoAuto.posicion)

/* 5 */

let ironMan = {
nombre: "Iron Man",
equipo: "Avengers",
poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
energia: 100,
getPoder: function(Fn) {
this.energia -= 10;
return "Poder elegido de " + this.nombre + ": " + this.poderes[Fn] + ". Energía restante: " + this.energia;
}
}

let Hulk = {
nombre: "Hulk",
equipo: "Avengers",
poderes: ["Aplastar", "Gritar", "Golpear"],
energia: 100,
getPoder: function(Fn) {
this.energia -= 10;
return "Poder elegido de " + this.nombre + ": " + this.poderes[Fn] + ". Energía restante: " + this.energia;
}
}
console.log(ironMan.getPoder(0));
console.log(Hulk.getPoder(2));

 /* PRACTICA 3 BUCLES*/

/* 1 */
for (let i = 0; i <= 5; i++) {
console.log("Practicando con el bucle for " + i);
}

for (let i = 0; i <= 10; i++) {
console.log(`La variable i tiene el valor ${i} `);
}

for (let i = 0; i < 10; i++) {
console.log(2 * i);
}

for (let i = 0; i <= 50; i++) {
console.log(5 * i);
}

for (let i = 0; i <= 100; i++) {
console.log(i);
}

/* 3 */
ganancias = [60, 24, -93, -9, 33, 12, -66, -8, 90, 5];
suma = 0;

for (let i = 0; i < ganancias.length; i++) {
suma += ganancias[i];
}

console.log(suma);

/* 4 */

let healinglsDifficult = [
'Fear', 'Drink to Get Drunk', 'Taken for Granted', 'Blow It All Away', 'Get Me', 'Im Not Important to You', 'Sober and Unkissed', 'Healing Is Difficult', 'Judge Me', 'Little Man', 'Insidiously'];

for (let i = 0; i <healinglsDifficult.length; i++) {
console.log(healinglsDifficult[i]);
}

n = 0
for (let i = 0; i < healinglsDifficult.length; i++) {
n += 1
console.log(n + " " + healinglsDifficult[i]);
}

/* 5 */
let got = [
{
nombre: "Jon",
apellido: "Snow",
edad: 23,
ciudad: "Winterfell"
},
{
nombre: "Daenerys",
apellido: "Targaryen",
edad: 19
},
{
nombre: "Arya",
apellido: "Stark",
edad: 12,
ciudad: "Winterfell"
},
{
nombre: "Tyrion",
apellido: "Lannister",
edad: 32,
ciudad: "Casterly Rock"
}
]
for (let i = 0; i < got.length; i++) {
console.log("hola " + got[i].nombre + got[i].apellido + "criatura viajera");
console.log("soy "+ got[i].nombre + got[i].apellido + " de la ciudad " + got[i].ciudad);
}


