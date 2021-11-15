
function Person(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)

}
Person.prototype.calculate_age = function () {
    var diff_ms = Date.now() - this.dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
const Peter = new Person('Peter', 'Brown', '12-13-1986')
const Alan = new Person('Alan', 'Smith', '5-2-1997')

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}
Person.prototype.setNewLastName = function (newLastName) {
    this.lastName = newLastName
}

console.log(Peter.getFullName())
Peter.setNewLastName('William')
console.log(Peter.getFullName())
console.log(Peter.hasOwnProperty('firstName'))
console.log(Peter.hasOwnProperty('calculate_age'))