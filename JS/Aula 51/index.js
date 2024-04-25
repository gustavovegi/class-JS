// Valor por referencia
//
const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = nomes;
const removido = nomes.pop();
nomes.unshift('João');
nomes.unshift('Wallace');
const removidos = nomes.shift();
//const nome = nomes.split(', ');
//const nomess = nomes.join(', ');
const novos = nomes.slice(1, -2)
//nomes[2]= 'João';
//delete nomes[2];
//novo.pop();

console.log(nomes, removido, removidos);
console.log(nomes, removido);
console.log(nomes)
console.log(novos);