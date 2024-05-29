// Fetch + armado de lista

// 1 Leer datos
// 2 Capturar datos
// 3 Reempplazar en DOM

let url ='https://randomuser.me/api/';

fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        console.log(data.results[0]);

        let nombre = document.querySelector('.name');
        nombre.innerText += data.results[0].name.first;

        let avatar = document.querySelector('.avatar');
        avatar.src = data.results[0].picture.large;

        let mail = document.querySelector('.email');
        mail.innerText += data.results[0].email;

    })
    .catch(function(e){
        console.log(e);
    })