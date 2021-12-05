// document.getElementById('button1').addEventListener('click', getText)
// document.getElementById('button2').addEventListener('click', getJSON)
document.getElementById('button3').addEventListener('click', getApi)

// function getText() {

//     fetch('https://reqres.in/api/products').then(function (res) {
//         return (res.json())
//     }).then(function (todos) {
//         todos.forEach(todo => {
//             output += `<li>${todo}</li>`
//         });
//         document.getElementById('output').innerHTML = output
//     }).catch(function (err) {
//         console.log('ERROR: ' + err)
//     })
// }

// function getJSON() {

//     fetch('todos.json').then(function (res) {
//         return (res.json())
//     }).then(function (todos) {
//         let output = '';
//         todos.forEach(todo => {
//             output += `<li>${todo.title}</li>`
//         });
//         document.getElementById('output').innerHTML = output
//     }).catch(function (err) {
//         console.log('ERROR: ' + err)
//     })
// }
function getApi() {

    fetch('https://jsonplaceholder.typicode.com/users/1/todos').then(function (res) {
        return (res.json())
    }).then(function (todos) {
        let output = '';
        todos.forEach(todo => {
            output += `<li>${todo.id}</li>`
        });
        document.getElementById('output').innerHTML = output
    }).catch(function (err) {
        console.log('ERROR: ' + err)
    })
}