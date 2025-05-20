let a = 5;

// if (a >= 10) {
//     console.log("a es mayor que 10");
// }else{
//     console.log("a es menor que 10");
// }

//ternario
// let resultado = (a >= 10) ? "a es mayor que 10" : "a es menor que 10";
// console.log(resultado);

console.log(a >= 10 ? "a es mayor que 10" : "a es menor que 10");


//switch

const dia = 5;

switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    default:
        console.log("Dia no valido");
}   