function saludar(nombre) {
    console.log("Hola");
    // const numeros = [1, 2, 3];
    // console.log(numeros);
    // return numeros
}


saludar();

var saludar = 1;
console.log(saludar); //undefined

const saludar2 = function () {
    console.log("Hola desde saludar2");
}
// saludar2();

//funciones de flecha
const saludar3 = () => {
    console.log("Hola desde saludar3");
}
// saludar3();

const saludar4 = (nombre) => console.log("Hola desde saludar4 ");
// saludar4();

function sumar(a, b) {
    console.log(a + b);
}

sumar(1, 2);

const sumar2 = (a, b) => console.log(a + b);
sumar2(1, 2);

function sumar(a,b){
    const resultado = a + b;
    console.log(resultado);
}

const getaleatorio = () => Math.random();
console.log(getaleatorio());