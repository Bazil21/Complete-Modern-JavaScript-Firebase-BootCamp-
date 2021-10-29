const firstName = 'Alan'
const lastName = 'Smith'

let val;

//concatenate
val = firstName + lastName
val = firstName + ' ' + lastName
//Append
val = 'Alan'
val += 'Smith'

//Escaping
val = "That's great. You've found a job"
val = 'That \'s great. You\'ve found a job'

//length
val = firstName.length

//concat
val = firstName.concat(' ', lastName)
//change case
val = firstName.toUpperCase()
val = firstName.toLowerCase()



console.log(val)