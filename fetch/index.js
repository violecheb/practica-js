let rick = "https://rickandmortyapi.com/api/character";
fetch(rick)
 .then(function(response){
    return response.json();
 })
 .then(function(data){
      console.log(data);

 })
 .catch(function(error){
    console.log("El error es: " + error);
 })