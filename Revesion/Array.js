// Array

const myArr=[0,1,2,3,4,5,6,7]
const myHero =["spider-man","bat-man","iron_man"]

console.log(myArr);
console.log(myHero);

const myArr2=new Array(1,2,3,4)
console.log(myArr2);

arr=[
    "USA",
    "INDIA",
    "CHAINA",
    "NEPAL"
]
console.log(arr)
console.log(arr[0])  // target the array value
console.log(arr[2])

// Array methods

const arr3=["free fire","pubg","call of duty"]

// pop and push methods
arr3.push("game")
console.log(arr3)
arr3.pop() 
console.log(arr3)

// shift and unshift methods
arr3.shift()
console.log(arr3)
arr3.unshift("hello")
console.log(arr3)

//includes and index methods

// console.log(arr3.includes(9))//value match nhi hoga tab ye false bole agar value match ho jaiyga tab true 
// console.log(arr3.indexOf(9))// index find nhi hogo too -1 return ksrta hai 

console.log(arr3.includes("hello"))
console.log(arr3.indexOf("hello"))


const Arr4=[1,2,3,4,5,6,]
const newArray=Arr4.join()

console.log(Arr4)
console.log(newArray)
console.log(typeof newArray)

 // slice and splice

 // note >> splice org value ko manupalte karta hai

 const org=[1,2,3,4,5,6,7]
 console.log("A",org) 

 const ArrN1=org.slice(1,4)
 console.log(ArrN1)
 console.log("A",org) 
 
 console.log("B",org)
 const ArrN2=org.splice(1,4)
 console.log(ArrN2)
 console.log("B",org)
