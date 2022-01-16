document.getElementById('firstName').addEventListener('blur', validateFN)
document.getElementById('lastName').addEventListener('blur', validateLN)
document.getElementById('email').addEventListener('blur', validateEmail)

function validateFN() {
    const firstName = document.getElementById('firstName');
    const re = /^[a-zA-Z]{2,8}$/
    if (!re.test(firstName.value)) {
        firstName.classList.add('is-invalid');
        firstName.classList.remove('is-valid');
    } else {
        firstName.classList.add('is-valid');
        firstName.classList.remove('is-invalid');
    }
}
function validateLN() {
    const lastName = document.getElementById('lastName');
    const re = /^[a-zA-Z]{2,8}$/
    if (!re.test(lastName.value)) {
        lastName.classList.add('is-invalid');
        lastName.classList.remove('is-valid');
    } else {
        lastName.classList.add('is-valid');
        lastName.classList.remove('is-invalid');
    }
}
function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.[a-zA-Z]{2,5}$/
    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
    } else {
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
    }
}