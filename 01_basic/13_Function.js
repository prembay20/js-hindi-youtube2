 function Name(){
    console.log("p")
    console.log("r")
    console.log("e")
    console.log("m")
 }
//  Name()

// function addTwoNum(number1, number2){
//    console.log(number1 + number2)
// }

// // function Calling
// addTwoNum(2,5)


function addTwoNum(number1, number2){

//    let result= number1 +number2 
//    return result
return number1 + number1

}

 const  result = addTwoNum(4,7)
 console.log("Result",result)


 function loginUsermessage(username = "no one"){
    if(!username){
        console.log("please enter a username ")
    }else{
    return `${ username } just logged in`
}
    

 }
 //console.log(loginUsermessage("prem"))
 console.log(loginUsermessage())