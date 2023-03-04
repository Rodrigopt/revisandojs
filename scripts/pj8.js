//media de array

const notasAluno = [90, 80, 70];
media(notasAluno);
analisar(80);

function media(notas) {
    let soma = 0;
    for (i = 0; i < notasAluno.length; i++) {
        soma = soma + notas[i];
    }
    return console.log((soma / notasAluno.length));
}

function analisar(mediaNota) {
    if (mediaNota >= 90 && mediaNota <= 100) {
        return console.log("Nota A");
    } else {
        if (mediaNota >= 80 && mediaNota <= 89) {
            return console.log("Nota B");
        } else {
            if (mediaNota >= 70 && mediaNota <= 79) {
                return console.log("Nota C");
            } else {
                if (mediaNota >= 60 && mediaNota <= 69) {
                    return console.log("Nota D");
                } else {
                    if (mediaNota >= 0 && mediaNota <= 59) {
                        return console.log("Nota F");
                    }
                }
            }
        }
    }
}