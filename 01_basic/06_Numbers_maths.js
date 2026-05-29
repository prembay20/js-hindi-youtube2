// let score=400
// console.log(score)

// const balance=new Number(100)
// console.log(balance)
// const num=balance.toString()
// console.log(num)
// console.log(typeof num)

// const balance=new Number(13.66)
// console.log(balance.toFixed(2))

// const balance=new Number(13.48)
// console.log(balance.toPrecision(2))
p
// const balance=new Number(133.484)
// console.log(balance.toExponential(3))

// const  num=10000000
// console.log(num.toLocaleString())

// const  num=10000000
// console.log(num.toLocaleString('en-IN'))

//++++++++++++++++++++++++++ Maths methods++++++++++++++++++++++++++++++++++++
// Note: Math ka M always capital hota hai 

console.log(Math.abs(-4)) // Negative value ko positive bana deta hai

console.log(Math.round(5.5)) //  Round figure karta hai  5.5 => 6
console.log(Math.round(5.4))// Agar decimal .5 se chota hai to lower value deta hai 5.4 => 5

console.log(Math.ceil(5.4)) //  Hamesha upper value deta hai 5.4 => 6
console.log(Math.floor(5.7))//  Hamesha lower value deta hai 5.7 => 5

console.log(Math.min(5,4,6,7,89,9)) // min means minimum sab se chota value ko deta hai 
console.log(Math.max(5,4,3,2,1,45)) // max means maximum sab se bada value ko deta hai 

console.log(Math.random()) // Random value deta hai between 0 and 1
console.log(Math.random()*10+1) // wecan set range between number by ownself

console.log(Math.floor(Math.random()*10)+1) // value k baad jo v point hai uuhe cut karne


const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)
