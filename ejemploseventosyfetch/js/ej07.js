// Fetch + armado de lista

let provincias = 'https://apis.datos.gob.ar/georef/api/provincias';

fetch(provincias)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        
        let lista = document.querySelector('.lista');
        let elementosLista = '';

        for (let i = 0; i < data.provincias.length; i++) {
            elementosLista += `<li> ${data.provincias[i].nombre} </li>`            
        }
        console.log(elementosLista);
        
        lista.innerHTML = elementosLista;

    })
    .catch(function(e){
        console.log(e);
    })