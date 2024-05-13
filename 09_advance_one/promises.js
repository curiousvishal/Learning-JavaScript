const promiseOne = new Promise(function(resolve, reject){
// Do an async task, network calls
setTimeout(function(){
    console.log('Async task is complete');
    resolve()
},1000)

})
promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async to resolve");
})

