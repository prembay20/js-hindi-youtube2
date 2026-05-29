 // ( .CONCAT ) 
let Marvel_Heros =["thor","Iron-man","spiderman"]
let dc_Heros =["superman","flash","batman"]

let allheros= Marvel_Heros.concat(dc_Heros)
console.log(allheros)
 
//Spread Operator in JS
let allNew_heros= [...Marvel_Heros,...dc_Heros]
console.log(allNew_heros)


//flat() Method in JS
// nested array ko simple single array me convert karta hai
const another_arr=[1,2,3,[4,5,6],7,8,[9,[10,11,]],12]
console.log(another_arr)
const real_another_arr=another_arr.flat(2)
console.log(real_another_arr)

console.log(Array.isArray("Histesh"))
console.log(Array.from("Histesh"))
console.log(Array.from({name:"Histesh"}))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3))