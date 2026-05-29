 let arr=[0,1,2,3,4,5]
 console.log(arr)
 
 let arr1=["HTML", "CSS", "JAVA-SCRIPT","PHP",]
 console.log(arr1[0])
 console.log(arr1[2])
 
//  new methods to define array
 let myArr1= new Array("String","Boolean")
 console.log(myArr1[1])
 

 //----Now we go study about Array Methods
 let myArr= new Array(0,1,2,3,4,5)

 myArr.push(6)
 myArr.pop()// its remove the last value of array
//  console.log(myArr.push()) // its show the length of array

 myArr.unshift(8)
 myArr.shift()

 console.log(myArr.includes(4))
 console.log(myArr.includes(8))

 console.log(myArr.indexOf(8))
 console.log(myArr.indexOf(3))
 
 
 const newArr=myArr.join() 
 console.log(myArr)
 console.log(typeof newArr)

//  slice
//  splice

 const orA=new Array(0,1,2,3,4,5,6,7)
 const myAR=orA.slice(1,4)
//  const myARR=orA.splice(1,4)
 console.log(orA)
 console.log(myAR)
//  console.log(myARR)


