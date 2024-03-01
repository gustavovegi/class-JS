/* 
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY
false
0
'' "" ``
null / undefined
NaN

console.log('luiz' && NaN && 'Maria');

function falaOi (){
    return  'Oi';
}

let vaiExecutar;

console.log(vaiExecutar && falaOi());

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao)
*/

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;  

console.log();