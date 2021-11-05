const users = ['Alan', 'Peter', 'John']

//For loop
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);

// }

//For of 
// for (const user of users) {
//     console.log(user)
// }

//For each
// users.forEach(function (user, index, arr) {
//     console.log(index, user, arr)
// });

//map 

// const hiUsers = users.map(function (user) {
//     return `Hi, ${user}`
// });

// console.log(hiUsers)

//For in 
const user = {
    name: 'Alan',
    age: 19,
    title: 'Programmer'
}

for (const key in user) {
    console.log(`${key}: ${user[key]}`)
}