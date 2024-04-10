const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput(); 
    criaBotãoApagar(li);
    salvarTarefas();
}   

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotãoApagar(li){
    li.innerText += ' ';
    const botãoApagar = document.createElement('button');
    botãoApagar.innerText = 'Apagar'; 
    botãoApagar.setAttribute('class', 'apagar')
    botãoApagar.setAttribute('title', 'apagar esta tarefa')
    li.appendChild(botãoApagar);
}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim();
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

document.addEventListener('click', function(e){
    const el = e.target;
    
    if (el.classList.contains('apagar')){
        //console.log('Apagar Clicado');
        el.parentElement.remove();
        salvarTarefas();
    }
})
adicionaTarefasSalvas();