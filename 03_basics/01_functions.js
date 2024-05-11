function saymyname(){
    console.log("vishal")
}
saymyname // reference
saymyname()// execution

 function addTwoNumbers(n1, n2){
    return(n1+n2)
 }
const result =  addTwoNumbers(3,5)
console.log(`result : ${result}`);
//addTwoNumbers()
// if no parameter is passes it is undefined

//shopping cart not known number of parameters

function calculateCartPrice(...num1){// ... => rest operator
return num1
}
console.log(calculateCartPrice(200,400,500))

const user ={
    name: "vishal",
    price: "199"
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    name: "sam",
    price: "300"
})

const newArray = [200,300,50,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray));