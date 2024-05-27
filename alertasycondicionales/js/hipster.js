let nacionalidad = prompt("ingresa tu nacionalidad: ");
let profesion = prompt("ingresa tu profesion: ");
let kms = prompt("Cuantos kms caminas por dia: ");

function filosofoHipster(nacionalidad, profesion, kmsRecorridos){
  if (nacionalidad=='Argentina' && profesion=='Musico' && kms>=2){
    return "soy un filosofo hipster"}
  else {
    return "aun no soy filosofo hipster"}}
console.log(filosofoHipster)