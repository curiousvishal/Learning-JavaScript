// singleton
// object.create
// object literals

const mySym = Symbol("key1")


const jsuser ={
    name: "vishal",
    "full name": "vishal kumar shaw",// cannot access with dot operator
    //mySym: "mykey1", cannot use symbol like this. it is string 
    [mySym]: "myKey1",// in the form of symbol
     age: 18,
     location : "kolkata",
     email: "vishal@gmail.com",
     isloggedin: false,
     lastLoginDays: ["Monday", "saturday"]
}
console.log(jsuser.email)
console.log(jsuser["email"]);
console.log(jsuser["full name"])//cannot use dot operator

//console.log(jsuser.mySym)// gives undefined
console.log(jsuser[mySym]) //use symbol like this so that type is symbol

jsuser.email = "chatgpt@hotmail.com"
//Object.freeze(jsuser)// freezes object
jsuser.email = "copilot@hotmail.com"// no changes in the object
//console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello JS user");
}
jsuser.greeting2 = function(){
    console.log(`hello JS user ${this.name}`);// this is used to refer all elements of obj
}

console.log(jsuser.greeting());
console.log(jsuser.greeting); // this gives the reference of the function not execute it


