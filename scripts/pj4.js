//velocidade maxima até 70
//a cada 5km acima do limite aumenta + 1 ponto
radar(130);

function radar(velocidade) {
    let ponto=0;
    if (velocidade >= 75) {
        for (i=velocidade-70;i>4;i-=5) {
            ponto++;
        }
        if (ponto >= 12) {
            return console.log("Perdeu a carteira");
        } else {
            return console.log(ponto);
        }
    } else {
        return console.log("Não tomou multa");
    }
}