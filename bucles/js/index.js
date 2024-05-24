/* PRACTICA 3 BUCLES*/

/* 1 */
for (let i = 0; i <= 5; i++) {
    console.log("Practicando con el bucle for " + i);
    }
    
for (let i = 0; i <= 10; i++) {
    console.log(`La variable i tiene el valor ${i} `);
}
    
for (let i = 0; i < 10; i++) {
    console.log(2 * i);
}
    
for (let i = 0; i <= 50; i++) {
    console.log(5 * i);
}
    
for (let i = 0; i <= 100; i++) {
    console.log(i);
}
    
/* 3 */
ganancias = [60, 24, -93, -9, 33, 12, -66, -8, 90, 5];
suma = 0;
    
for (let i = 0; i < ganancias.length; i++) {
suma += ganancias[i];
}

console.log(suma);
    
/* 4 */
    
let healinglsDifficult = [
    'Fear', 'Drink to Get Drunk', 'Taken for Granted', 'Blow It All Away', 'Get Me', 'Im Not Important to You', 'Sober and Unkissed', 'Healing Is Difficult', 'Judge Me', 'Little Man', 'Insidiously'];
    
for (let i = 0; i <healinglsDifficult.length; i++) {
    console.log(healinglsDifficult[i]);
}
    
n = 0
for (let i = 0; i < healinglsDifficult.length; i++) {
 n += 1
 console.log(n + " " + healinglsDifficult[i]);
}
    
/* 5 */
let got = [{
     nombre: "Jon",
    apellido: "Snow",
    edad: 23,
    ciudad: "Winterfell"
    },
    {
    nombre: "Daenerys",
    apellido: "Targaryen",
    edad: 19
    },
    {
    nombre: "Arya",
    apellido: "Stark",
    edad: 12,
    ciudad: "Winterfell"
    },
    {
    nombre: "Tyrion",
    apellido: "Lannister",
    edad: 32,
    ciudad: "Casterly Rock"
    }
]
for (let i = 0; i < got.length; i++) {
    console.log("hola " + got[i].nombre + got[i].apellido + "criatura viajera");
    console.log("soy "+ got[i].nombre + got[i].apellido + " de la ciudad " + got[i].ciudad);
}    