// IIFE ==>> Immediately Invoked Function Expression  

// Function ko turant execute karne ke liye use hota hai.
// Global scope ko pollute hone se bachata hai.
// Initialization/Setup code ke liye use hota hai.

(function chai(){
    console.log(`DB CONNECTED`)
}) ();

(function chai2(){
    console.log(`DB CONNECTED 2`)
}) ();

// Agar do IIFE lagatar likha jaye to pehle wale ke end me ; lagana zaruri hai

(function abc(){
    console.log(`DB CONNECTED`)
}) ();

