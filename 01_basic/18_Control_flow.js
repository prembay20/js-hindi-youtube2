// Control Flow Statement 

// if statement 
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


const isUserLoggedIn = true
if( 2 ==="2"){
 console.log("Executed")
}else{
    console.log("Not Executed")
}
 
const temperature  = 41
if(temperature === 50){
    console.log("Less than 50")
}else{
console.log("temperature is greater than 50 ")
}

const score=200
if(score > 100){
    let power ="fly" 
    console.log(`user power: ${power}`);
}

// const balance= 1000
// if(balance > 100) console.log("Test");// end mein semi colen dena jaruri hai ;


// const balance= 1000
// if(balance > 10000) console.log("Test");// lekin iise avoid kare ye utna jada important nhi hai 
// else console.log("fail");


// Iterview aur real projects me generally {} 
// use karna best practice mana jata hai, 
// chahe ek hi statement kyon na ho. 
// Isse code readable rehta hai aur bugs kam hote hain.

// Nested if statement 

// const balance = 750 
// if( balance >= 1000){
//     console.log("your rich")
// }else if(balance >= 750){
//     console.log("now you have more money")
// }else if(balance >= 500){
//     console.log("now you have half money")
// }else if(balance >= 250 ){
//     console.log("you have low balance")
// }else{
//     console.log("you have no money ")
// }

const userLoggedIn = true
const debitcard = true
if (userLoggedIn && debitcard){
    console.log("Allow to buy course")
}

const LoggedInfromGoogle=false
const LoggedInfromEmail=true

if(LoggedInfromGoogle || LoggedInfromEmail){
    console.log("User logged in");
}