// Evitando acciones por default

let link = document.querySelector('a');

link.addEventListener('click', function(e) {
	e.preventDefault()			    	//Evita el comportamiento default del hipervínculo
	alert('¡Clickeaste el link!');		//Ejecuta la alerta		
});
