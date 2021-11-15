
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }
    message() {
        return `Hello I am ${this.firstName} ${this.lastName}`
    }
    calculate_age() {
        var diff_ms = Date.now() - this.dob.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    setNewLastName(newLastNAme) {
        this.lastName = newLastNAme
    }
}

const alan = new Person('Alan', 'Smith', '11-13-1980')
alan.setNewLastName('William')
console.log(alan)