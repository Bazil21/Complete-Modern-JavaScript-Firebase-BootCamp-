const todos = [
    { title: "First todo", body: "This is first todo" },
    { title: "Second todo", body: "This is Second todo" }
]
function createTodo(todo, callback) {
    setTimeout(function () {
        todos.push(todo)
        callback()
    }, 2000)
}

function getTodos() {
    setTimeout(() => {
        let output = ''
        todos.forEach(function (todo) {
            output += `<li>${todo.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

createTodo({ title: 'Third todo', body: "This is third todo" }, getTodos)
