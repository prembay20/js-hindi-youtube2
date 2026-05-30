

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 300, 400, )) 


 //Rest Operator (...)
//...num1 sab arguments ko ek array me collect kar leta hai
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 400, ))



// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 300, 400, ))

const user={
    username:"prem",
    price:'99'
}

function  handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price ${anyobject.price}`)

}
handleObject(user)

// const newArr=["200","300","400","500"]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(newArr))

console.log(returnSecondValue(["200","300","400","500"]))
