function retornaHora(data){
    if (data && !(data instanceof date)){
        throw new TypeError('Esperando instancia de date');
    }

    if (!data) {
       data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12:false
    })
}

const hora = retornaHora();
console.log(hora);