const name1 = "Smith";
const name2 = new String("Smith");
name2.age = 18;
// console.log(name1, typeof (name1))
// console.log(name2, typeof (name2))

if (name1 === name2) {
    console.log("Equal")
} else {
    console.log("Different")
}