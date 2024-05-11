const user = {
    username: "vishal",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},  welcome to website`);//current context
        console.log(this);
    }
    
}
 user.welcomeMessage()
// user.username = "sam"// context changed
// user.welcomeMessage()
console.log(this)

/*
this
inside
Browser global object = window object
Node = empty object
*/
// this is used in object not in function
// function chai(){
//     let username = "cat"
//     console.log(this.username)// undefined
// }
// chai()

// const chai = function(){
//     let name = "dog"
//     console.log(this.name)// undefined in function
// }


const chai = () => {
    let name = "dog"
    console.log(this.name)// undefined in arrow function also
}


// const addtwo = (num1, num2) =>{
// return num1 + num2
// }
// console.log(addtwo(2,5))

//inplicit arrow function  {return}     (no return keyword)
//const addtwo = (num1, num2) => ( num1 + num2)


    //to return object wrap the object in ( )brackets
const addtwo = (num1, num2)=>({username: "hitesh"})

console.log(addtwo(2,5))

