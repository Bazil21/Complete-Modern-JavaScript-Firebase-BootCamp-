const s1 = Symbol();
const s2 = Symbol.iterator;
const s3 = Symbol(123);
const s4 = Symbol('Hello');
// console.log(typeof s1)
// console.log(typeof s2)
// console.log(typeof s3)
// console.log(typeof s4)
console.log(Symbol(123) == Symbol(123))
const sym1 = Symbol.for(555);
console.log(Symbol.keyFor(sym1))
console.log(Symbol.for(555) === Symbol.for(555))