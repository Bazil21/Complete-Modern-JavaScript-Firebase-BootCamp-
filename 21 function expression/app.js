

const person = {
    hello: function () {
        console.log('Hello')
    },
    age: function (age) {
        console.log(`I am ${age} years old`)
    }
}

person.laugh = function () {
    console.log('Ha ha ')
}

person.hello()
person.age(18)
person.laugh()

