document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJSON)
function getText() {

    fetch('test.txt').then(res => res.text()
    ).then(data => {
        document.getElementById('output').innerText = data
    }).catch(err =>
        console.log('ERROR: ' + err)
    )
}

function getJSON() {

    fetch('todos.json').then(res => res.json()
    ).then(todos => {
        let output = '';
        todos.forEach(todo => {
            output += `<li>${todo.title}</li>`
        });
        document.getElementById('output').innerHTML = output
    }).catch(err =>
        console.log('ERROR: ' + err)
    )
}