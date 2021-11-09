const oldHeading = document.getElementById('name-title')
const newHeading = document.createElement('h2')
newHeading.id = 'name-title';
newHeading.appendChild(document.createTextNode('New title'));
const header = document.querySelector('.collection-header')
header.replaceChild(newHeading, oldHeading)
