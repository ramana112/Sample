let num1 = 22
let num2 = 7

let result = num1/num2
let floatres= result.toFixed(2)
console.log(Math.ceil(floatres))
console.log(Math.floor(floatres));
console.log(Math.random()*5)

let upper = 25
let lower = 20
let myRandom = Math.floor(Math.random()* (upper-lower+1))+ lower

console.log(myRandom)