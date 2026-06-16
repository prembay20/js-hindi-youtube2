// forEach Loop
const  coding =["js","java","c","python","cpp"]

// coding.forEach( function (val){
//     console.log(val)
// })

// forEach Arrow function
// coding.forEach(  (val)=>{
//     console.log(val)
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
} )

const myCoding =[
    {
        languageName:"javaScript",
        languageFileName:"js"
    },
     {
        languageName:"python",
        languageFileName:"py"
    },
     {
        languageName:"java",
        languageFileName:"java"
    },
]

myCoding.forEach( (item) => {
    // console.log(item.languageName)
    console.log(item.languageFileName)

})

const user_data=[
    {
        name:"ram",
        class:"12",
        course:"computer"
    },
      {
        name:"shyam",
        class:"12",
        course:"js"
    },
      {
        name:"sita",
        class:"12",
        course:"python"
    },
      {
        name:"sam",
        class:"12",
        course:"web devlopment"
    }
]

user_data.forEach((user_value) => {
    console.log(user_value.course)
})