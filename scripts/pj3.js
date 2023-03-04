fizzBuzz("ndug");


function fizzBuzz(entrada) {
    if (entrada % 3 === 0 && entrada % 5 === 0) {
        return console.log("FizzBuzz");
    } else {
        if (entrada % 3 === 0) {
            return console.log("Fizz");
        } else {
            if (entrada % 5 === 0) {
                return console.log("Buzz");
            } else {
                if (entrada % 1 === 0) {
                    return console.log("Não Divisivel por 3 ou 5");
                } else {
                    return console.log("Não é um número");
                }
            }
        }
    }
}