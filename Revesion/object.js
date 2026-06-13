
const mySym=Symbol("key1")

const JsUser={
     name:"prem",
     age:18,
     [mySym]:"mykey1",
     location:"ktm",
     email:"prem@google.com",
     isLoggedIn:false,
     lastLoginDays:["monday","saturday"]

}

// console.log(JsUser)

// console.log(JsUser.name)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])

// JsUser.email="prem@chatgpt.com"
// console.log(JsUser.email)
// Object.freeze(JsUser)
// JsUser.email="prem@microsoft.com"
// console.log(JsUser.email)

JsUser.greeting=function(){
    console.log("hello js user")
}

console.log(JsUser.greeting());


JsUser.greetingTwo=function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(JsUser.greetingTwo())