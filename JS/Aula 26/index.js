const nomes = ['Gustavo', 'Vegi', 'Ribeiro'];

// For normal - geralmente com iteraveis(array ou strings)
// For in - retorna o indice ou chave (string, array, objetos)
// For of - retorna o valor em si (iteraveis, arrays, strings)

for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

console.log("-------")

for (let valor of nomes) {
    console.log(valor);
}

console.log("-----")

for (let i in nomes){
    console.log(nomes[i]);
}

console.log("-------")

nomes.forEach(function(el, valor, array){
    console.log(el, valor, array)
})
