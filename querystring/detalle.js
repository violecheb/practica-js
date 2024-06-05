let currentURL = window.location.search;
let params = new URLSearchParams(currentURL);
let id = params.get("id");
let url = "https://rickandmortyapi.com/api/character/" + id;

fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        let datos = data.results;
        console.log(data);
        let nombre = document.querySelector("h1.personaje");
        let estatus = document.querySelector("p.estatus");
        let especie = document.querySelector("p.especie");
        let imagen = document.querySelector("img.imagen");
        nombre.innerText = datos[0].name;
        estatus.innerText += datos[0].status;
        especie.innerText += datos[0].species;
        imagen.src = datos[2].image;
        imagen.alt = datos[0].name;
    })
    .catch(function(e){
        console.log(e)
    })
