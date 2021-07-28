// Reverse a string

let newStr = ''; 

function reverseAString(str) {
    for (let i = str.length -1; i>=0; i--) {
        newStr += str[i];
        console.log(newStr);
    }
    console.log(newStr + " - 'console.log' fora do 'for' imprimi apenas a última saída");
}

let resultado = reverseAString('Hello')

//criar uma váriavel que começa vazia
// função que vai reverter a string que recebe uma string, que vai ser nossa entrada
// estrutura de repetição; declarar o contador, começar no comprimento da string com -1;
// quero que ele faça a repetição enquanto o i for maior igual a 0;
// decrementar
// se fizesse: for (let i = str.length -1; i>=4; i--) e mandasse imprimir 'Hello' o output seria apenas a última letra
