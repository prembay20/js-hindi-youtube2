// const userName="prem@gmailai.com"
// if(userName){
//     console.log("got user email")
// }else{
//     console.log("don't have user email")
// }

// const userName=[]
// if(userName){
//     console.log("got user email")
// }else{
//     console.log("don't have user email")
// }

// const userName={}
// if(userName){
//     console.log("got user email")
// }else{
//     console.log("don't have user email")
// }

// const userName=""
// if(userName){
//     console.log("got user email")
// }else{
//     console.log("don't have user email")
// }

// Truthy Values  // note >> agar koi value string k andar hai too uuse Truthy value kaha jata hai 
// "0", " ", [], {}, true,  function(){}, 
// "falsy" // aab ye string mein hai issliye ye truthy value hai

const userEmail=[]
if(userEmail.length == 0){
    console.log("Array is Empty")
}

const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty")
}

// true === 1    // false
// false === 0   // false
// "1" == 1      // true
// "1" === 1     // false


// FALSY VALUE
// false 0 -0 0n "" null undefined NaN

// Nullish Coalescing Operater (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1=null ?? 10 
//val1=undefined ?? 15
val1=null ?? 15 ?? 20

console.log(val1)

// Terniary Operater
// condition ?  true : false 

const iceTeaPrice=100
iceTeaPrice <= 80 ?console.log("less than 80") :console.log("more than 80")
