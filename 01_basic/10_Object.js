// Singleton
// Object.create

// Object literals 

// now we are study about  Object literals 

 const symb=Symbol("key1")
 const JsUser={
        name:"prem",
        "full-name":"prem kr. sah",
        ["symb"]:"key1",
        age:18,
        location:"birgunj",
        email:"prem@gmail.com",
        isLogedIn:false,
        lastLoginDay:["sunday","saturday"]
 }

 console.log(JsUser)
 console.log(JsUser.name)
 console.log(JsUser.email)
 console.log(JsUser["isLogedIn"])
 console.log(JsUser["full-name"])
 console.log(JsUser["symb"])
 console.log(typeof symb)

//  JsUser.email="prem@chatgpt.com" // note :- change the value of email 
//  console.log(JsUser.email)
//  Object.freeze(JsUser)
//  JsUser.email="prem@microsoft.com"
//  console.log(JsUser.email)
 
JsUser.greeting=function(){
    console.log("Hello js user");  
}

JsUser.greetingTwo=function(){
    console.log(`Hello js user ${this.name}`);  
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

