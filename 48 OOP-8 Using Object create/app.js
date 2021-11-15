const profilePrototype = {
    message: function () {
        return `Hello, I am ${this.firstName} ${this.lastName}`
    },
    setNewLastName: function (newLastName) {
        this.lastName = newLastName
    }

}

const peter = Object.create(profilePrototype)
peter.firstName = 'Peter'
peter.lastName = 'William'
peter.age = 18
peter.setNewLastName('Doe')
console.log(peter.message())

const alan = Object.create(profilePrototype, {
    firstName: { value: 'Alan' },
    lastName: { value: 'Smith' },
    age: { value: 30 }
})
console.log(alan.message())