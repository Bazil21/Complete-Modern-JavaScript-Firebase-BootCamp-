const set1 = new Set();
set1.add(5);
set1.add('another string');
set1.add(5);
set1.add({ name: 'Alan' });
let obj = { name: 'John' };
set1.add(obj)
// console.log(set1.size)

const set2 = new Set(['Alan', 2])
// console.log(set2.size)

//check whether exist
// console.log(set1.has(5))
// console.log(set1.has({ name: 'Alan' }))
console.log(set1.has(obj))
console.log(set1)
set1.delete(obj);
console.log(set1)


