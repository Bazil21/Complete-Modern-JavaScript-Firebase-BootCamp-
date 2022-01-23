function Click() {
    this.observers = []
}

Click.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
        console.log(`subscribed ${fn.name}`)
        console.log(this.observers)
    },
    unsubsribe: function (fnUnSub) {
        this.observers = this.observers.filter(function (fn) {
            if (fn !== fnUnSub) {
                return fn;
            }
        })
        console.log(`unsubscribed ${fnUnSub.name}`)
        console.log(this.observers)
    },
    exe: function () {
        this.observers.forEach(fn => {
            fn.call();
        });
    }
}

const click = new Click();

document.querySelector('.sub1').addEventListener('click', function () {
    click.subscribe(sayHello);
})
document.querySelector('.unsub1').addEventListener('click', function () {
    click.unsubsribe(sayHello);
})
document.querySelector('.sub2').addEventListener('click', function () {
    click.subscribe(sayHi);
})
document.querySelector('.unsub2').addEventListener('click', function () {
    click.unsubsribe(sayHi);
})
document.querySelector('.exe').addEventListener('click', function () {
    click.exe()
})
const sayHello = function () {
    console.log('Hello ~~~')
}
const sayHi = function () {
    console.log('Hi !!!!!')
}
