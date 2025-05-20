//variables primitivas son los datos que no se pueden dividir en partes mas pequeñas
//string, number, boolean, null, undefined, symbol y bigInt

//variables no primitivas son los datos que se pueden dividir en partes mas pequeñas
//array, object, function, date, regex y set

let nombre = "Juan"; //string
// console.log(nombre);

nombre = 'Pedro Perez';
// console.log(nombre);

nombre = 'Destino Final';
// console.log(nombre);

// console.log(typeof nombre); //string

nombre [0] = 'J'; //No se puede cambiar un caracter de una cadena
// console.log(nombre); //Juan Marquina
//los primitivos son inmutables
//los primitivos son copiados por valor
//los primitivos no se pueden cambiar

let edad = 25;
// console.log(edad); //25
edad = 30;
// console.log(edad); //30
// console.log(typeof edad); //number
//los primitivos son inmutables
edad[0] = 2; //No se puede cambiar un caracter de una cadena
// console.log(edad); //30

let personaje ={
    nombre: "Juan",
    edad: 25,
    habilidades: ["JavaScript", "Python", "Java"],
    direccion: {
        ciudad: "Lima",
        pais: "Perú"
    },
    saludar: function(){
        console.log("Hola, soy " + this.nombre);
    }
}

personaje.nombre = "Pedro Perez"; //se puede cambiar el valor de una propiedad de un objeto
console.log('nombre',personaje.nombre); //Pedro Perez
console.log('edad',personaje.edad); //25

console.log('***********************************');
let listaPersonajes = ['Deadpool', 'Ironman', 'Spiderman'];
console.log('listaPersonajes', listaPersonajes);

listaPersonajes[1] = 'Hulk'; //se puede cambiar el valor de un elemento de un array
console.log('listaPersonajes', listaPersonajes); //Deadpool, Hulk, Spiderman