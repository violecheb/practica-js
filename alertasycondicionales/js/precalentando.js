let mensaje= "vas a salir de tu casa?"
let resultado= confirm(mensaje)
console.log(resultado);
if (resultado == true){
  alert("Chequea el pronostico del tiempo ante de salir")
} else {
  alert("Que bueno que te quedes. Va a llover mucho hoy.")
}