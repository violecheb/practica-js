// Mostrando eventos

// Al hacer click sobre el H1 se le cambia el color a rojo

let titulo = document.querySelector('h1');

titulo.addEventListener('click', function() {
    titulo.style.color = 'red';
});

// Al pasar el mouse por encima del párrafo se le cambia el tamaño de la letra

let parrafo = document.querySelector('p');

parrafo.addEventListener('mouseover', function() {
    parrafo.style.fontSize = '32px';
});

// Al presionar una tecla muestra en consola la recla presionada

window.addEventListener('keydown', function(e) {
	console.log(e);
    console.log(e.key);
});
