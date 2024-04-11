// // argumentos que sustena todos os argumentos enviados 
// function funcao(a, b, c , d, e, f){
//     let total = 0;
//     for (let argumento of arguments){
//         total += argumento;
//     }
//     console.log(total);
// }

// funcao(1,2,3,4,5,6,7,8,9);


// function funcao(a, b, c, d, e, f){
//     console.log(a, b, c, d, e, f);
// }
// funcao(1,2,3);

// function funcao(a, b = 2, c= 4){
//     //b = b || 0;
//     console.log(a + b + c);
// }
// funcao(2, undefined, 20);


// function funcao({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade);
// }
// funcao({nome: 'Luiz', sobrenome: 'Otavio', idade: 19});


// function funcao(valor1, valor2, valor3) {
//     console.log(valor1, valor2, valor3);
// }
// funcao('Luiz Otavio', 'Miranda', 19);

// function conta(operador, acumulador, ...numeros) {
//     for(let numero of numeros){
//        if (operador === '+') acumulador += numero
//        if (operador === '-') acumulador -= numero
//        if (operador === '*') acumulador *= numero
//        if (operador === '/') acumulador /= numero
//     }

//     console.log(acumulador)
// };
// conta('+', 0 , 20, 30, 40, 50);

const conta = (...args) => {
    console.log(args);
};
conta ('+', 1, 20, 30, 40, 50);