// Control statement in javaScript
// TOPICS
// if statement 
// if and else staement 
// Nested if else staement 
// Switch Case
// Truthy and Falsey 

// Operators
// | Operator | Meaning                              |
// | -------- | ------------------------------------ |
// | `>`      | Greater Than (bada hai)              |
// | `<`      | Less Than (chhota hai)               |
// | `>=`     | Greater Than or Equal To             |
// | `<=`     | Less Than or Equal To                |
// | `==`     | Equal To (value check)               |
// | `===`    | Strict Equal To (value + type check) |
// | `!=`     | Not Equal To                         |
// | `!==`    | Strict Not Equal To                  |


// if statement 
// const score = 50
// if( score >= 50){
//     console.log("your value is equal to score value");
// }

 //  if else statement 
// const score = 50 // if value 
// if( score >= 50){
//     console.log("your value is equal to score value");
// }else{
//     console.log("you value is less than score");
// }


//  if and else if statement 
// const score = 55// if value  we the value of score output is chnage
// if( score == 50){
//     console.log("your value is equal to score value");
// } else if( score >= 50){
//     console.log("your value is greater than score");
// }else{
// console.log("your value is less than score");
// }

const balance = 1000;

if(balance < 500){
    console.log("less than  500");
}else if( balance < 750){
    console.log("less than  750");
}else if(balance < 900){
    console.log("less than  900");
}else{
    console.log("less than 1200");
}

