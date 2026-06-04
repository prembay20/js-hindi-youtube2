 // Types of dataTypes

 // 1. primitive  data types (stack memory)
    // 7 types : string, Number, Boolean,  Null, undefined, Symbol, BigInt

    let str="hello world"
    console.log(str)
    console.log(typeof str)

    let num=34
    console.log(num)
    console.log(typeof num)

    let isLoggedIn=true
    console.log(isLoggedIn)
    console.log(typeof isLoggedIn)
     
    let outsideTemp=null
    console.log(outsideTemp)
    console.log(typeof outsideTemp)


    let userEmail ;
    console.log(userEmail)
    console.log(typeof userEmail)


    let id=Symbol('123')
    let anotherId=Symbol('123')
    console.log(id == anotherId)

    const BigNum=7486747743743463738n
    console.log(BigNum)
    console.log(typeof BigNum)

    
    


 // 2. Non primitive data type (Reference) and (cheap memory)
 
 // Array, Objects, function

  const arr=["Nepal", "India", "chaina"]
  console.log(arr)
  console.log(typeof arr)

  let myObj={
    name:"prem",
    age:19,
    address:"Birgunj"
  }
   console.log(myObj)
   console.log(typeof myObj)
   

  const myFunction = function(){
    console.log("Hello world");
  }
  console.log(typeof myFunction)
  console.log( myFunction)