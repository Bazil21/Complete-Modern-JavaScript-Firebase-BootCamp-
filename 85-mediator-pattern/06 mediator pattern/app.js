const User = function (name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function (message, to) {
        console.log('send', this)
        this.chatroom.send(message, this, to);
    },
    receive: function (message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function () {
    let users = {};
    return {
        // users,
        register: function (user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function (message, from, to) {
            if (to) {
                to.receive(message, from)
            } else {
                for (const key in users) {
                    if (users[key] !== from) {
                        users[key].receive(message, from)
                    }
                }
            }
        }
    }
}

const alan = new User('Alan');
const john = new User('John');
const peter = new User('Peter');
const chatroom = new Chatroom();
// console.log('john before register', john);
// console.log('users in chatroom before register:', chatroom.users);
chatroom.register(alan)
chatroom.register(john)
chatroom.register(peter)
// console.log('john after register', john);
// console.log('users in chatroom after register:', chatroom.users);


// john.send('Hi, Alan', alan)
// alan.send('Hello, John', john)
peter.send('Hi, Everyone')



