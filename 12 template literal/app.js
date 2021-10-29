let name = 'Alan'
let age = 5
let drinking = 'beer'
let message;
function drink() {
    if (age > 18) {
        return 'beer'
    } else {
        return 'coke'
    }
}


// message = 'Hello, my name is ' + name + '. I love drinking ' + (age > 18 ? 'beer' : 'coke')
message = `Hello, my name is ${name}. I love drinking ${age > 18 ? 'beer' : 'coke'}`
console.log(message)
