// // const  tindeUser= new Object()// this is singleton Object

// //  const tindeUser1={} // this is non-singleton Object
// //      tindeUser1.id="111abc"
// //      tindeUser1.name="prem"
// //      tindeUser1.isLoggedIn="false"
     
// // // console.log(tindeUser)
// //  console.log(tindeUser1)
// //   console.log(tindeUser1.id) // acess the specific value 
// //   tindeUser1.id="222xyz" // changing the value of id
// //   console.log(tindeUser1.id)



// const regularUser={
//     email:"some@gmail.com",
//     fullName:{
//         userfullname:{
//             firstname:"prem ",          // object k ander object hai = nested object 
//             lastname:"kr sah"
//         }
//     }
// }
// //   console.log(regularUser)

// // layer by layer access karne k liye . operater ka use kar te hai 

// // console.log(regularUser.fullName)
// // console.log(regularUser.fullName.userfullname)
// //console.log(regularUser.fullName.userfullname.firstname)
// // console.log(regularUser.fullName.userfullname.lastname)

// const obj1={1:"a" ,2:"b"}
// const obj2={3:"c" ,4:"d"}

// // const obj3={obj1,obj2}
// // console.log(obj3)

// // const obj3=Object.assign({},obj1, obj2)
// const obj3= {...obj1,...obj2}
// console.log(obj3)


const gameUser={}
gameUser.name="pro-player",
gameUser.email="pro@freefire.com",
gameUser.id="321XYZ"

// console.log(gameUser)
console.log(Object.keys(gameUser))
console.log(Object.values(gameUser))

console.log(Object.entries(gameUser))

console.log(gameUser.hasOwnProperty('email')) // property exist check karta hai aur true aur false mein answer ko deta hai 

