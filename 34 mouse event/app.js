const form = document.querySelector('form')
// form.addEventListener('mouseover', run)
// form.addEventListener('mouseout', run)
form.addEventListener('mouseenter', run)
form.addEventListener('mouseleave', run)
function run(e) {
    e.preventDefault();
    console.log('event type:', e.type)
}