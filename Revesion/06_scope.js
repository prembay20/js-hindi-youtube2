// Normal function and scope
// function one(){
//     const username="prem"

//     function two(){
//         const website="youtube"
//         console.log(website)
//         console.log(username)
//     }
//     two()
// }
// one()


// if statement and scope
if(true){
    const username ="hitesh"
    if(username === "hitesh"){
        const website =" youtube"
        console.log(username + website)
    }
    console.log(username)
}

// perameter function
console.log(addone(5))
function addone(num){
    return num + 1
}


// expression function
// it is hosting methods
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))