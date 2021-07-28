const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
//capturamos elementos do html

let lists = []


//fazer o botão funcionar
//addEventListener é uma função nativa do js
//toda tag form tem comportamento padrão no navegador -> quando recebe submit atualiza a página

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

function render() {
    clearElement(listContainer)
    lists.forEach(function(list) {
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
    })
}

function clearElement (element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}




render()