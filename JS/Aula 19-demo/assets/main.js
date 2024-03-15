/*
function zeroAEsquerda (num){
    return num >= 10 ? num :`0${num}`;
}

function getDatas(data){
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    return `${zeroAEsquerda(dia)}/${zeroAEsquerda(mes)}/${zeroAEsquerda(ano)} ${zeroAEsquerda(hora)}:${zeroAEsquerda(min)}:${zeroAEsquerda(seg)}`
}

function getDiaSemanaTexto (diaSemana){
    let diaSemanaTexto;
    switch(diaSemana){
        case 0 :
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto
        case 1 :
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto
        case 2 :
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto
        case 4 :
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTextobreak
        case 5 :
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto
        case 6 :
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto
        }

        return diaSemanaTexto
}
function getNomeMes(numeroMes){
    let nomeMes;

    switch(numeroMes){
        case 0 :
            nomeMes = 'Janeiro';
            return nomeMes
        case 1 :
            nomeMes = 'Fevereiro';
            return nomeMes
        case 2 :
            nomeMes = 'Março';
            return nomeMes
        case 3 :
            nomeMes = 'Abril';
            return nomeMes
        case 4 :
            nomeMes = 'Maio';
            return nomeMes
        case 5 :
            nomeMes = 'Junho';
            return nomeMes
        case 6 :
            nomeMes = 'Julho';
            return nomeMes
        case 7 :
            nomeMes = 'Agosto';
            return nomeMes
        case 8 :
            nomeMes = 'Setembro';
            return nomeMes
        case 9 :
            nomeMes = 'Outubro';
            return nomeMes
        case 10 :
            nomeMes = 'Novembro';
            return nomeMes
        case 11 :
            nomeMes = 'Dezembro';
            return nomeMes
        case 12 :
            nomeMes = 'Janeiro';
            return nomeMes

        }

        return nomeMes
}

function criaDate(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes}`) +
    ` de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}` 
}

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = criaDate(data);
const diaData = getDatas(data);

console.log(diaData);
*/
const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',  
    timeStyle: 'short'
};
h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);

