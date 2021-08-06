// redeline-sync: receber entrada de pessoas usuarias. simular . no frton é equivalente a input.value

//pegar o input
// Se sim, mostra categorias disponíveis e pergunta qual será escolhida.
// Se não, mostra todos os livros em ordem crescente pela quantidade de páginas

const livros = require('./database');
const  readline = require('readline-sync');

const entradaInicial = readline.question('Deseja Buscar um livro? S/N');

if(entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:');
    console.log('Produtividade', '/Historia brasileira','/Americas','/Estilo de vida','/Tecnologia');

    const entradaCategoria = readline.question('Qual categoria você escolhe?');
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria);

    console.table(retorno);
} else {
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas);
    console.log('Essas são todos os livros disponíveis: ');
    console.table(livrosOrdenados);
};