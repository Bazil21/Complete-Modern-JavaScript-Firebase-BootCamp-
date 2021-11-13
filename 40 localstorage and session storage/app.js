//set localstorage item
localStorage.setItem("name", "localSmith")
localStorage.setItem("age", "17")
//set sessionstorage item
sessionStorage.setItem("name", "SessionSmith")

// localStorage.removeItem('name')
localStorage.clear()

const age = localStorage.getItem('age')
const localName = localStorage.getItem('name')
const sessionName = sessionStorage.getItem('name')

console.log('age: ', age)
console.log('localName: ', localName)
console.log('sessionName: ', sessionName)
