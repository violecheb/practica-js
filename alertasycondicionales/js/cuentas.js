let numero = prompt("Ingrese un numero: ");
console.log(numero);

let numerodos= prompt("Ingrese otro numero: ");
console.log(numerodos)

function multiplicar(num1, num2){
  let resultado = num1*num2;
  return 'el resultado de multiplicar ${num1} y ${num2} es: ${resultado}'
}
console.log(multiplicar(num1, num2));