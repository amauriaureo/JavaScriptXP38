// FizzBuzz
// Divisível por 3 => 'Fizz',
// Divisível por 5 => 'Buzz',
// Divisível por 3 e 5 => 'FizzBuzz',
// Se não for um número => 'Não é um número'
// Se não for divisível nem por 3 nem por 5 => Entrada

// let resultado =  fizzBuzz("sim");
// console.log(resultado)

function fizzBuzz(entrada) {
    if (entrada % 3 === 0 && entrada % 5 === 0) {
        console.log("FizzBuzz")
    } else if (entrada % 3 === 0) {
        console.log("Fizz")
    } else if (entrada % 5 === 0) {
        console.log("Buzz")
    } else if (typeof entrada !== 'number') {
        console.log("It's not a number")
    } else {
        console.log(entrada)
    }
}
fizzBuzz(10)
fizzBuzz(30)
fizzBuzz(6)
fizzBuzz("sim")
fizzBuzz("11")
fizzBuzz(11)