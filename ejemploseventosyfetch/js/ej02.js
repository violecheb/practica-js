// Eventos en un botón

let boton = document.querySelector('button');

boton.addEventListener('click', function() {
	alert('¡Clickeaste el botón!');
});

boton.addEventListener('mouseover', function() {
	alert('Ahora pasaste el mouse por encima del botón');
});

