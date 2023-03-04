//somar multiplos de 3 e 5

somar(110);

function somar(limite) {
    let soma=0;
    for (i=limite;i>0;i--){
        if (i%3===0 || i%5===0) {
            soma=soma + i;
        }
    }
    return console.log(soma);
}