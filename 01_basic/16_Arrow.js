const user ={
    username:"prem",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to website`)
    }
}

// this object ko refer karega.
// console.log(this) // abhi ye eek empty object hai 
user.welcomeMessage()
user.username="sam" // changed user name 
user.welcomeMessage()

// ab function ander declear karte to kya aayega 

function abc(){
    // console.log(this)
    let username="prem"
    console.log(this.username)
}
abc()

const xyz= () => {
    let username="prem"
   // console.log(username)
   console.log(username)
}
xyz()

// const addtwo= (num1,num2) =>{
//     return num1 + num2
// }
// console.log(addtwo(4,5))


// const addtwo= (num1,num2) => num1 + num2
const addtwo= (num1,num2) => (num1 + num2)
console.log(addtwo(4,5))

const word= (num1,num2) => ({username : "prem"})
console.log(word())