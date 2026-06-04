//most important and most useful loop >>>>>>> forEach loop in js

// let coding =["js","ruby","java","python","cpp"]
// // coding.forEach( function (val){
// //      console.log(val)
// // } )


// let coding =["js","ruby","java","python","cpp"]
// coding.forEach( function (item){
//      console.log(item)
// } )


let movie=["spider-man","bat-man","iron-man"]
movie.forEach( function (item){
 console.log(item)
})

let subject=["English","Computer-science","Math","Nepali"]   //Each loop with Arrow  function
subject.forEach( (item, index, Array)=>{
 console.log(item, index, Array)
})


const myCoding=[
     {
          languageName:"javascript",
          languageFileName:"js"
     },
     {
          languageName:"python",
          languageFileName:"py"
     },
     {
          languageName:"java",
          languageFileName:"java"
     }
]

myCoding.forEach((item) => {
     console.log(item.languageName)
})

// 1.for loop
// 2.Nested loop
// 3.Array and loop
// 4.break and continue
// 6.While loops
// 7.Do-While loops
// 8.for..of loop
// 9.for in loop 
// 10 for each loop 


// 1. for Loop
// Fixed number of times code run karne ke liye.
// Jab iterations ka count pata ho.

// 2. Nested Loop
// Loop ke andar loop.
// Pattern, matrix, table ke liye.

// 3. Array and Loop
// Array ke elements access karne ke liye.

// 4. break
// jab apna kaam hoja ta hai tab Loop ko turant stop kar deta hai.

// 5. continue
// Current iteration skip karta hai.>>apna kaam hone k baad v ye chalta hai

// 6. while Loop
// Jab tak condition true ho tab tak chalta hai.
// Iterations ka count pehle se na pata ho.

// 7. do...while Loop
// Kam se kam 1 baar zarur execute hota hai.

// 8. for...of Loop
// Array, String, Map, Set ki values ke liye. use hota hai

// 9. for...in Loop
// Object ki keys ke liye.use hota hai

// 10. forEach() Loop
// Array ke har element par operation karne ke liye.
// Modern JS me bahut use hota hai.

// name: "Prem"
// key apna >> name 
// value apna >>prem
