// function in js (Revision)

function sayMyName(){
    console.log("prem")             // this Normal Function 
}
sayMyName()

// function addTwoNumber(num1,num2){    // 
//  console.log(num1 + num2 )
// }
// addTwoNumber(3,4)


// function addTwoNumber(num1,num2){
//     console.log("prem sah")
//     let result = num1 + num2
//     return result
// }
//  const result= addTwoNumber(4,7)
//  console.log("Result:",result)

 
function addTwoNumber(num1,num2){
    return  num1 + num2
}
 const result= addTwoNumber(4,7)
 console.log("Result:",result)


//  function LoginUserMessage(username){
//     return `${username}just logged in`
//  }
// console.log(LoginUserMessage())
// console.log(LoginUserMessage(""))
// //  console.log(LoginUserMessage("histesh"))


 function LoginUserMessage(username){
    if(username){
        console.log("please enter a username")
        return
    }
    return `${username}just logged in`
 }


 function calculateCartPrice(val1,val2,...num1){
    return num1
 }
 console.log(calculateCartPrice(200, 400, 600, 200, 400))

 const user ={
    username:"prem",
    prices : 199
 }

 function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`)
 }

//  handleObject(user)
 handleObject({
    username:"sam",
    price:399
 })

 const myNewArray=[200, 400, 100, 600]
 function returnSecondValue(getArray){
    return getArray[2]
 }
//  console.log(returnSecondValue(myNewArray))
  console.log(returnSecondValue([200, 400, 100, 600]))