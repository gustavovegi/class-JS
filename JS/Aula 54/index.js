//filter -> sempre vai retornar um array, com a mesma quantidade de elementos
//map ->
//reduce -> 

//retorne os numeros maiores que 10
//const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
//const numerosFiltrados = numeros.filter(valor =>  valor > 10);

//console.log(numerosFiltrados);

// for (i in numeros){
//     if (i >= 10){
//     console.log(i)
//     i++;
//     }
// }

//retorne as pessoas que tem o nome com 5 letras ou mais 
//retorne as pessoas com mais de 50 anos
//retorne as pessooas cujo nome termina com a 
const pessoas = [
    {nome: 'Luiz', idade: 65},
    {nome: 'Maria', idade: 100},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const pessoas2 = pessoas.filter(obj => obj.nome.length >= 5 && obj.idade > 50 && obj.nome.toLowerCase().endsWith('a'));
console.log(pessoas2)