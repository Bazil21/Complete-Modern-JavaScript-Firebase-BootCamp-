
const firstNameInput = document.getElementById('first_name')
const heading = document.querySelector('h3')
// firstNameInput.addEventListener('focus', run)
// firstNameInput.addEventListener('blur', run)
// firstNameInput.addEventListener('cut', run)
// firstNameInput.addEventListener('paste', run)
// firstNameInput.addEventListener('copy', run)
firstNameInput.addEventListener('input', run)


function run(e) {
    console.log('Event type: ' + e.type)
    
    // if(e.target.value != "")
    // {
    //     heading.innerText = e.target.value
    // }
    // else{
    //     heading.innerHTML = "Heading 2"
    // }
    
}