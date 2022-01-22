const users = new Map();
users.set('Alan', { 'job title': 'accountant', email: 'alan@email.com' })
users.set('John', { 'job title': 'manager', email: 'john@email.com' })
users.set('Peter', { 'job title': 'programmer', email: 'peter@email.com' })

for (const [key, user] of users) {
    console.log(`${key}: ${user['job title']}`)
}

for (const key of users.keys()) {
    console.log(key)
}

for (const user of users.values()) {
    console.log(user['job title'])
}

users.forEach((user, key) => {
    console.log(`${key}: ${user['job title']}`)
});

const pairsArr = Array.from(users);
console.log(pairsArr)

const usersArr = Array.from(users.values());
console.log(usersArr)

const keysArr = Array.from(users.keys());
console.log(keysArr)
