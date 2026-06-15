// this is Arrow function in js
 chai = () => { 
    let username="prem"
    // console.log(username)
    console.log(this.username)
}
chai()

// this is explicit return
// const addTwo=(num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5,7))


// const addTwo =(num1, num2) => num1 + num2
// console.log(addTwo(4,5))

const addTwo =(num1, num2) => (num1 + num2 )// this is implicit return
 console.log(addTwo(4,5))

 const student=() => ({name:"prem",class:"12"}) 
 console.log(student())