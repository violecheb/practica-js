// Información del elemento seleccionado

let boton = document.querySelector('button');
let mainTitle = document.querySelector('h1');

boton.addEventListener('click', function() {
	console.log(this);
});

mainTitle.addEventListener('mouseover', function() {
	console.log(this);	
});
