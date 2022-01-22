const user = {
    name: 'Alan',
    secret: ' You are handsome',
    getSecret: function () {
        return `Hi, my name is ${this.name}. The secret is ${this.secret}`
    }
}
console.log(user.secret)

const user = (function () {
    let name = 'Alan';
    let secret = ' You are handsome';
    const getSecret = function () {
        return `Hi, my name is ${name}. The secret is ${secret}`
    }
    return {
        getSecret,
    }
})()

console.log(user.getSecret())