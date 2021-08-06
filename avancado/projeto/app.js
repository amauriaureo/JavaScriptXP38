// redeline-sync: receber entrada de pessoas usuarias. simular . no frton é equivalente a input.value
const livros = require('./database')
// console.log(livros)

//pegar o input

const  readline = require('readline-sync')

const entradaInicial = readline.question('Deseja Buscar um livro? S/N')

// Se sim, mostra categorias disponíveis e pergunta qual será escolhida.

// Se não, mostra todos os livros em ordem crescente pela quantidade de páginas