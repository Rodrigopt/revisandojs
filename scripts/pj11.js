let endereco = {
    casa: "1",
    rua: "b",
    numero: "16"
}

function exibir(endereco) {
    for (let chave in endereco) {
        console.log (chave, endereco[chave]);
    }
}

exibir(endereco);