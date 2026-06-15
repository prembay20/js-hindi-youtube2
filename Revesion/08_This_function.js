const user ={
    username:"prem",
    price:99,
    
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
    }
}
console.log(user) // find the all value
console.log(user.username) // find the username value
console.log(user.price) // only value of price
user.welcomeMessage() //call the function from object
user.username="sam" // here change the value of username
user.welcomeMessage()// new output 

// console.log(this);// its give empty object


function chai(){ 
    let username="prem"
    console.log(this.username)
}
chai()

