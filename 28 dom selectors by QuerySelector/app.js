let item;
item = document.querySelector('#name-title')
item = document.querySelector('.collection-item')
item = document.querySelector('h4')
item = document.querySelector('li')
document.querySelector('.collection-item').style.backgroundColor = 'green'
document.querySelector('.collection-item:last-child').style.backgroundColor = 'red'
document.querySelector('.collection-item:nth-child(3)').style.backgroundColor = 'yellow'
document.querySelector('.collection-item:nth-child(odd)').textContent = 'odd'
console.log(item)