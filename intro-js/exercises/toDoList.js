// 1 bloco de criação de constantes para capturar elementos do html
// let lists é a váriavel onde os inputs serão armazenados
// bloco com uma função para adicionar o botão para submeter o input
// função para criar o elemento que sofreu input
// função para mostrar na tela o elemento adicionado
// função para não repetir o último elemento ao realizar um novo input.


const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
//capturamos elementos do html

let lists = []


//fazer o botão funcionar
//tag form tem comportamento padrão no navegador -> quando recebe submit, atualiza a página

// 'submit' é o evento, segundo parametro é uma função, geralmente chamada de callback,
// que recebe um parametro que é o próprio evento
newListForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const listName = newListInput.value
    if (listName === null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render()
})



function createList(name) {
    return {id: Date.now().toString(), name: name }
}

// OBJETIVO DA FUNÇÃO 'render': mostrar itens adicionados na tela
// 1º
// percorrer a lista de itens (let lists);
// Em vez de usar o for, usar forEach que tem o mesmo objetivo, percorrer a lista/array.
// função callback de retorno para fazer forEach; o param 'list' é cada item do array
// 2º
// aqui vamos criar a lista e jogar pro HTML
// 'document.createElement' método usado para joga para o HTML
// 3º
// selecionar o método que adc uma class à nossa lista de classes - chamando a class de 'item'
// 4º 
// recuperar o item e dizer que ele vai receber como texto(método: innerText) o nosso 'list'
// 5º
// elemento mãe que vai receber a lista é a div fantasma (listContainer)
// appendChild é o método para passar um elemento filho à ela.

// ALL: 
// Foi criado; foi colocado uma classe nele; conteúdo que ele vai receber colocado;
// dizer em qual elemento do HTML ele vai ficar;


function render() {
    clearElement(listContainer)
    lists.forEach(function(list) { // 1º
        const item = document.createElement('li') // 2º
        item.classList.add('item') // 3º
        item.innerText = list.name // 4º
        listContainer.appendChild(item) // 5º
    })
}

// função para não repetir elemento
function clearElement (element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}


render()