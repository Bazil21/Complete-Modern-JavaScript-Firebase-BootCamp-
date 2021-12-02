const todos = [
    { title: "First todo", body: "This is first todo" },
    { title: "Second todo", body: "This is third todo" }
]

function createTodo(todo) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            todos.push(todo)
            const err = false
            if (!err) {
                resolve()

            } else {
                reject('There is an error')
            }
        }, 2000)

    })
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

createTodo({ title: 'Third todo', body: "This is third todo" }).then(getTodos).catch(function (err) {
    console.log(err)
})
