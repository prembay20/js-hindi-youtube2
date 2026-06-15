// Immediately Invoked Function Expressions (IIFE)

(function chai(){ // this is NAME IIFE
    console.log(`DB CONNECTED`);
})(); // eek jayada IIFE function lagana ho tab semi colen kaa use karo

const abc=()=>("DB CONNECTED");
console.log(abc());

(function code(){ // this is NAME IIFE 
    console.log(`DB CONNECTED`);
})();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('prem')