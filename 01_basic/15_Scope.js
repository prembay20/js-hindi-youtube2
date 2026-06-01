// LOCAL AND GLOBAL SCOPE IN JS

// global_scope >>> Jo variable kisi function ya block ke bahar banaya jata hai, wo Global Scope me hota hai.
//  ye Variable poore program me accessible hota hai.
var a=5;
let b=10;
const c=20;

console.log(a);
console.log(b);
console.log(c);


// Block Scope = Variable sirf {} ke andar accessible hota hai. 
// let aur const block scope follow karte hain, jabki var nahi karta.
if(true){
var a=500;
let b=1000;  
const c=200;
    
console.log("inner",a)
}


function one(){
    const username="prem"

    function two(){
        const website="youtube"
        console.log(username)
        console.log(website)
    }

    // console.log(website)

     two()
}

one()
// two()

// Isko Function Declaration bolte hain.  isko ko declare karne se pehle bhi call kar sakte hai 
// Isko Hoisting kehte hain.

function addone(num){
return num + 1
}
//console.log(addone())
console.log(addone(8))

// Function Expression aur isse Declare karne se pehle call nahi kar sakte.
const addTwo=function(num){
    return num+2
}

console.log(addTwo(6))

// example like this 
 
console.log(addnum(5)) // function calling declearation se pahele kiya hai 
function addnum(num){
    return num+ 1
}
//console.log(addnum(5)) // function declearation se pahele ya baad me v kiya ja sakta hai 

const addnum1=function(num){
    return num + 2

}
console.log(addnum1(5)) // function calling after declearation 