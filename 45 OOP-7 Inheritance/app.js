function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.message = function () {
    return `Hello ${this.firstName} ${this.lastName}`
}

const person = new Person('Alan', 'Smith')
console.log(person.message())

function Customer(firstName, lastName, phone, email) {
    Person.call(this, firstName, lastName)
    this.phone = phone
    this.email = email
}

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer
const customer = new Customer('Peter', 'William', '123456', 'email@email.com')

console.log(customer.message())
console.log(customer)