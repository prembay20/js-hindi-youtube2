// const coding=["js","ruby","java","python","cpp"]

// const value =coding.forEach((item)=>{
//    console.log(item)
//  return item
// })
// console.log(value)

// // use of Filter
// const myNums =[1,2,3,4,5,6,7,8,9,10]
// const  newNums = myNums.filter((num) => num > 4 
// )
// console.log(newNums)


// const myNums =[1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) =>4)
// console.log(newNums)

const books=[
  {title:"book1",   genre:"fiction",        publish:"1981", edition:2003},
    {title:"book2",  genre:"non-fiction",    publish:"1982", edition:2004},
      {title:"book3",  genre:"History",       publish:"1983", edition:2005},
        {title:"book4",  genre:"fiction",      publish:"1984", edition:2006},
          {title:"book5",  genre:"non-fiction", publish:"1985", edition:2007},
            {title:"book6",  genre:"History",    publish:"1986", edition:2008},
              {title:"book7",  genre:"science",   publish:"1987", edition:2009},
                {title:"book8",  genre:"fiction",  publish:"1988", edition:2010},
                  {title:"book9",  genre:"Maths",     publish:"1989", edition:2011},
                    {title:"book10",  genre:"Computer",   publish:"1990", edition:2012},
                      {title:"book11",  genre:"English",   publish:"1991", edition:2013},
                        {title:"book12",  genre:"Computer", publish:"1993", edition:2014},
                          {title:"book13", genre:"Nepali",  publish:"1994", edition:2015},
];

// console.log(books)

// const userBooks=books.filter((bk)=> bk.genre === 'Computer')
// console.log(userBooks)

// const userBooks=books.filter((bk)=> bk.title === 'book13')
// console.log(userBooks)


const userBooks=books.filter((bk)=> bk.edition === 2015)
console.log(userBooks)