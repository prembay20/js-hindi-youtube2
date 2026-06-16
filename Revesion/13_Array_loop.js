// const arr = [1,2,3,4,5]

// for (const num of arr){
//     console.log(num)
// }


// //Syntax
// for (key in object) {
//   // code block to be executed
// }

// // 
// const greeting =["spider-man","bat-man","iron-man"]
// for (const greet of  greeting){
//     console.log(greet);
// }

// // for..in loop
// const name="prem sah"
// for(const nam of name){
//     console.log(nam)
// }

// for of loop
// const  names=["Youtube","facebook","Instagram","Netflix","Amazon"]
// for (const n of names ){
//     console.log(n)
// }

const symbol ={
    yt:"Youtube",
    ig:"instagram",
    fb:"facebook",
    ico:"learnCodeOnline.ol"
};
for(const n in symbol){
    // console.log(n)            //its give only key not value
    // console.log(symbol[n])    // its gives only value of key
    // console.log(`key is: ${n} and value is: ${symbol[n]} `); // its gives a key and key values 
    
}


// NOTE
// in matlab: Array ke andar (in) kaun si position/index pe hai
// of matlab: Array ka (of) asli value kya hai


// const fruits = ['Apple', 'Mango', 'Banana'];

// for (let index of fruits) {
//     console.log(index); 
// }


const fruits = ['Apple', 'Mango', 'Banana'];

for (let index in fruits) {
    console.log(index); 
}

