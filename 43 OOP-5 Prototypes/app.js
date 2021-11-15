
function Person(name, dob) {
    this.name = name
    this.dob = new Date(dob)

}
Person.prototype.calculate_age = function () {
    var diff_ms = Date.now() - this.dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
const Peter = new Person('Peter', '12-13-1986')
const Alan = new Person('Alan', '5-2-1997')

console.log(Peter.calculate_age === Alan.calculate_age)

console.log(Peter.calculate_age())
