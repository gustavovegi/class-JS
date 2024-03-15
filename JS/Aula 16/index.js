// (condição) ? - 'valor para verdadeiro : -'valor para falso'
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : ' Usuario Normal';
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';


console.log(nivelUsuario, corPadrao)
/* 
if(pontuacaoUsuario >= 1000){
    console.log('Usuario VIP');
} else{
    console.log('Usuario Normal');
}
*/