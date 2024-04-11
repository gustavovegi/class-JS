// declaração função (function hoisting)
falaoi();

function falaoi(){
    console.log('oi');
}

// first-class objects (objetos de primeira classe)
// function expression
const souUmDado = function() {
    console.log('Sou um dado');
};

function executaFuncao(funcao){
    console.log('Vou executar sua função');
    funcao();
}

executaFuncao(souUmDado);

//Arrow Function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

//dentro de um objeto 
const obj = {
    falar(){
        console.log('Estou falando')
    }
};
obj.falar();