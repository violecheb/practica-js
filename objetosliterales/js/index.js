 /* PRACTICA 2 OBJETOS LITERALES*/
/* 1 */
let misDatos = {
    nombre: "Violeta",
    apellido: "Cheb",
    dni: "46025678",
    comidasFavoritas: ["helado", "hamburguesa", "tiramisu"] /* tengo que usar array */
    }
    
console.log(misDatos);
    
/* 2 */
let misDatos2 = {
    nombre: "Violeta",
    apellido: "Cheb",
    dni: "46025678",
    comidasFavoritas: ["helado", "hamburguesa", "tiramisu"],
    saludar: function() {
    return "Hola mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años. Mi primera comida favorita es " + this.comidas_fav[0] + "."
    }
}
console.log(misDatos2.saludar());
    
/* 3 */
    let auto = {
    marca: "Volkswagen",
    modelo: "GOL",
    anio: 2018,
    color: "Negro",
    posicion: 0,
    avanzar: function(n) {
    this.posicion += n;
    return this.posicion;
    },
    retroceder: function(n) {
    this.posicion -= n;
    return this.posicion ;
    }
    }
    
    auto.avanzar(10);
    auto.retroceder(5);
    auto.avanzar(1);
    console.log(auto.posicion); /* dentro de los parentesis de console log llamo a la posicion del auto */ 
    
/* 4 */
    
    let nuevoAuto = {
    marca: "Volkswagen",
    modelo: "GOL",
    anio: 2018,
    color: "Negro",
    posicion: 0,
    moverse: function(n) {
    if (n>0){
     this.posicion += n;
     return this.posicion;
    } else if (n<0){
     this.posicion -= n;
     return this.posicion;
    }
    }
    }
    nuevoAuto.moverse(2);
    nuevoAuto.moverse(-5);
    console.log(nuevoAuto.posicion)
    
/* 5 */
    
    let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(Fn) {
    this.energia -= 10;
    return "Poder elegido de " + this.nombre + ": " + this.poderes[Fn] + ". Energía restante: " + this.energia;
    }
    }
    
    let Hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(Fn) {
    this.energia -= 10;
    return "Poder elegido de " + this.nombre + ": " + this.poderes[Fn] + ". Energía restante: " + this.energia;
    }
    }
    console.log(ironMan.getPoder(0));
    console.log(Hulk.getPoder(2));