class TodoList {
    constructor() {
        this.items = []
    }
    add(item) {
        this.items.push(item)
        console.log(this.items)
    }
    printItems() {
        console.log(`${this.items.length} items are added`)
    }
}
const todoList1 = new TodoList();
todoList1.add('apple')
todoList1.printItems()
const todoList2 = new TodoList();
todoList2.add('orange')
todoList2.printItems()
console.log('todolist === todolist2', todoList1 === todoList2)


class SingleTodoList {
    constructor() {
        if (SingleTodoList.instance == null) {
            this.items = [];
            SingleTodoList.instance = this


        }
        return SingleTodoList.instance
    }
    add(item) {
        this.items.push(item)
        console.log(this.items)
    }
    printItems() {
        console.log(`${this.items.length} items are added`)
    }
}

const todoList1 = new SingleTodoList();
todoList1.add('apple')
todoList1.printItems()
const todoList2 = new SingleTodoList();
todoList2.add('orange')
todoList2.printItems()
console.log('todolist === todolist2', todoList1 === todoList2)