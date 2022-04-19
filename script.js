/*html den veri cekmek icin tanimlama yapiyoruz */
const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value
    if(todo) {
        todoText = todo.text
    }
/*to add list items */
    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener ('click', () => 
        todoEl.classList.toggle('completed'))

/*to remove tasks from the list */

        todoEl.addEventListener ('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
        })

        

        todosUL.appendChild(todoEl)

        input.value = ''
    }
}

