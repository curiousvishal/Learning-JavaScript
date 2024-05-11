const userEmail = "vishal@gmail.com"
//

if(userEmail){
    console.log(`got usr email`);
}else{
    console.log(`dont get user email`);
}
//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//[], "0", 'false', " ", {}, function(){}empty function,  

if(userEmail.length===0){
    console.log(`array is empty`);
}
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    log("object is empty")
}

//Nullish Coalescing Operator (???): null undefined

let val1 ;
// val1 = 5 ?? 10   //---5

// val1 = null ?? 10 // ---10

// val1 = undefined ?? 15 // --- 15

// val1 = null ?? 10 ?? 20  ----10

//ternary operator and Nullish operator are different

// condithion ? true: flase

const price = 100

price>= 80 ? console.log("greater than 80") : console.log("less than 80");;

