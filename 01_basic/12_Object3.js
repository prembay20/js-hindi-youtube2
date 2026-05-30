
const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"prem"    
}


// Object De-stracturted 

// const {courseInstructor} = course        // De-stracturted   object → value extract
// console.log(courseInstructor)

const {courseInstructor:Instructor} = course // object → rename + extract
console.log(Instructor)