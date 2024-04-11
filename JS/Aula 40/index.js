// return 
//retorna um valor
//termina a função

// function soma(a , b) {
//     return a + b;
// }

// soma(1, 3)

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const fala = falaFrase('Ola');
// const resto = fala('mundo');
// console.log(resto)

function criaMultiplicador(mutliplicador){
    // multiplicador 
    return function(n){
        return n * mutliplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10 ));