// while loop in js

// let ab = 10; // initialization

// while (ab <= 20) { // condition
//     console.log(ab); // code

//     ab++; // increment
// }


// pehle sochega phir kaam karunga
let index = 0 
while (index <=  10) {
    console.log(`value of index is ${index}`)
    // index++
    // index = index +1
    //index= index +2
    index = index + 5
}

let myArr=['flash', "batman", "superman"]

let arr=0;
while (arr < myArr.length) {
    console.log(`value is ${myArr[arr]}`)
    arr = arr +1
}



// do while loop in js >> pahele kaam kare gaa fir sochegaa 

    let score = 1 
do {
    console.log(`score is ${score}`)
    score++
} while (score <= 10);

// simple note here
// do...while loop pehle code run karta hai, phir condition check karta hai.
// feature >>>> Ye loop kam se kam 1 baar zarur chalega, chahe condition false ho ya true.


// let ab = 10; // initialization
// do {
//     console.log(ab); // code
//     ab++;            // increment
// } while (ab <= 20); // condition