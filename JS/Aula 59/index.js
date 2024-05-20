// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otavio';
// pessoa1.idade = 2;
// pessoa1.falarNome = function (){
//     return(`${this.nome} esta falando seu nome`)
// };
// pessoa1.getDataNascimento = function(){
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// for(let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// };

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome, 
//         nomeCompleto (){
//             return `${this.nome} ${this.sobrenome}`
//         }
//     };
// }

// const p1 = criaPessoa('Luiz', 'Negro');
// const p2 = criaPessoa('Negro', 'Luiz');
// console.log(p1, p2);

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Fernanda')
console.log(p1);
console.log(p2);


