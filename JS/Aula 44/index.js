// IIFE -> Immediately invked function expression
(function(idade, peso, altura){
    const sobrenome = 'Miranda';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falanome(){
        console.log(criaNome('Roberto'));
    }
    
    falanome();
    console.log(idade, peso, altura)
})(30, 80, 1.80);

//const nome = 'Qualquer coisa';