//Immidiately invoked funciton expression (IIFE)

// function chai(){
//     console.log(`DB connected`);
// }
// chai()

//iife  to safeguard from global pollution
(function chai(){
    //named iife
    console.log(`DB connected`);
})(); //--- end function 

((name)=>{
    //unamed iife
    console.log(`DB connected two ${name}`);
})(`hitesh`)