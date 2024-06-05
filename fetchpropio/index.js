
let url = "https://rickandmortyapi.com/api/character";
fetch(url)
 .then(function(response){
    return response.json();
 })
 .then(function(data){
      console.log(data); 
      let listacharacter = document.querySelector("section.characterList")
      let characters = ""
      for (let i=0; i < data.results.length; i++){
         characters += `<article class="articulo"> <img src= ${data.results[i].image}  alt=''>
         <p class="texto">Name: ${data.results[i].name}</p>
         <p class="texto">Status: ${data.results[i].status}</p> </article>` 
      }
      listacharacter.innerHTML += characters;
 })
 .catch(function(error){
    console.log("El error es: " + error);
 })