//array destructuring

[a, b, ...c] = [1, 2, 3, 4, 5, 6]
console.log(a);
console.log(b);
console.log(c);
[user1, user2, user3] = ['Peter', 'Alan', 'John'];
console.log(user2);
function getItems() {
    return ['milk', 'fish', 'apple']
}
[item1, item2, item3] = getItems();
console.log(item2);

 //object destructuring


({ b, a } = { a: "Mary", b: "Amy" });
console.log(a)
const user = {

    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"

}

// const id = user.id;
const { email, id } = user;
console.log(email)
