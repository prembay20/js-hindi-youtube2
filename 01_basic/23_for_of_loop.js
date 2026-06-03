// // for of loop 

// const arr=[10, 20, 30]
// for (const num  of arr) {
//     console.log(num)
// }

// const gtreeting ="hello world"
// for (const greet of gtreeting) {
//     console.log(`each char is ${greet}`)
    
// }

// map 
const map = new Map()
map.set('NEP',"Nepal")
map.set('USA',"United state of America")
map.set('FR',"France")

// map.set('USA',"United state of America")
// map.set('FR',"France")

//  console.log(map)

//  Map me duplicate keys allowed nahi hoti; 
// same key dubara set karoge to value update hogi, 
// entry duplicate nahi banegi.   



// for (const  key of map) {
//     console.log(key)                  // sirf keys
// }

// for (const  [key, value] of map) { 
//     console.log(key,)                // sirf values  
// }

// for (const  [key, value] of map) {
//     console.log(key, value)         // [key, value] pairs but >>> yaha default space se separate ho raha hai
// }

for (const  [key, value] of map) {  
    console.log(key, ':-', value)        // [key, value] pairs but >>> yaha default space se separate nhi ho raha hai
}

