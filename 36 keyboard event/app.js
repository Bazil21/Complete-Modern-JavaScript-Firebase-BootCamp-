
const firstNameInput = document.getElementById('first_name')
firstNameInput.addEventListener('keydown', run)
firstNameInput.addEventListener('keyup', run)
firstNameInput.addEventListener('keypress', run)
function run(e) {
    console.log('Event type: ' + e.type + e.keyCode)
}