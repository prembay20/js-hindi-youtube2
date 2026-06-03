
// three types of variables 

// 1.variable (var)
// Re-declare kar sakte ho 
// Re-assign kar sakte ho 
// Block scope nahi hota 

// Example 

   var a=6
//    var a=56 // isse re-declear bola jata hai
//     a = 6666 //isse re-assing bola jata hai
    if(true){
        console.log(a)
        var b=7
    }
     console.log(a)
      console.log(b)

// 2. let
// Re-declare nahi kar sakte 
// Re-assign kar sakte ho 
// Block scope hota hai 

//2.example
    let ab=8
   // let ab=77     // isse re-declear bola jata hai per ye let mein workable nhi hai 
    ab=67          // isse re-assing bola jata hai aur ye let mein workable hai
  if(true){
    console.log(ab)
    let cd=15
  }
  console.log(ab) // console.log(cd) error because let block scope follow karta hai 

// 3.
// Re-declare nahi hota
// Re-assign nahi hota
// Block scope hota hai

const ef=20
// const ef=55     // isse re-declear bola jata hai per ye const mein workable nhi hai 
// ef=50          // isse re-assing bola jata hai aur ye const  mein workable mhi hai
if(true){
    console.log(ef)
}
console.log(ef)