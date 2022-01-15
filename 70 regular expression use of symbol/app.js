const str = `HiHi. The dog is running in the street. Alan, who is 18 years old, 
looking for the 5g mobile phone under the tree.`
let re;
re = /\w{4,5}/g;
re = /[a-zA-Z]o/g;
re = /[0-9]g/g;
re = /(t|T)he/g;
re = /(o|n){2,3}/g;
re = /(hi){2,3}/ig;
re = /^H/g;
re = /\.$/g;

const result = str.match(re)
console.log(result)

