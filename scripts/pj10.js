//numeros primos

exibirNumerosPrimos(10);

function exibirNumerosPrimos(primos) {
    for (i = 1; i <= primos; i++) {
        let primo = true;
        for (j = i; j >= 1; j--) {
            if (i%j===0){
                if(j!=1 && j!=i){
                    primo=false;
                    break;
                }                
            }
        }
        if (primo===true){
            console.log(i);
        }
    }
}
