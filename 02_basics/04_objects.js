// const tinderUser = new Object() //singleton object
const tinderUser = {}// non singleton Object

 tinderUser.id = "123abc"
 tinderUser.name = "sammy"
 tinderUser.isloggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: " some@gmail.com",
    fullname : {
        userFullname :{
            firstname: "vishal",
            lastname : "kumar shaw"
        }
    }

}
//console.log(regularUser.fullname.userFullname.firstname)

const obj1 = {1:"a",2: "b"}
const obj2 = {3:"c", 4: "d"}

//const obj3 = Object.assign({},obj1, obj2)// parenthesis for target 
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user =[
    {
        id: 1,
        email: "vishal@gmail.com"
    },
    {
        id: 2,
        email: "vishal@gmail.com"
    }
]

console.log(tinderUser);
console.log(Object.keys(tinderUser));// makes an array of keys
console.log(Object.values(tinderUser));//  makes array of values

console.log(Object.entries(tinderUser));//make array pair

console.log(tinderUser.hasOwnProperty('isloggedIn'));// check if present

const course = {
    coursename : "javaScript",
price: "999",
courseInstructor: "hitesh"
}

// couse.courseInstructor

const {courseInstructor : instructor}= course
// console.log(courseInstructor);same
console.log(instructor);//same


//for react  destructuring
/* const navbar {company} {

 }
navbar(company = "hitesh")
*/

//JSON
// {
//     "name": "vishal",
//     "coursename": "js",
//     "price": "free"
// }