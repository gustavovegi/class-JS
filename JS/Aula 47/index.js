// função construtora -> objetos
// função fabrica -> objetos 
// construtora -> Pessoa (sempre letra maiuscula no começo, sem camelCase)

function Pessoa(nome, sobrenome){
    //Atributos ou metodos privados
    const ID = 123456;
    const metodoInterno = function() {};

    //Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + this.sobrenome + ' sou um metodo');
    };
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Maria', 'Oliveira');

p1.metodo();