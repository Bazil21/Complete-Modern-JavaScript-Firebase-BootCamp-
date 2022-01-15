const str = "The dog is running in the street. Alan, who is 18 years old, looking for the dog under the tree."
let re
re = /n+/g //one n or more n
re = /ni?/g // n or n with i 
re = /un*/g //* =  + ?
re = /.ee/g 
re = /\./g
re = /\w/g
re = /\d/g
re = /\s/g
re = /\S/g


const result = str.match(re);
console.log(result)

