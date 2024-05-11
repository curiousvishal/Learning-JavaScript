// reduce

 const myNums = [1,2,3]



//  const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc}, currval: ${currval}`);
//     return acc+currval
//  }, 0)


const myTotal = myNums.reduce((acc, currval)=>acc+currval,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemname: "js",
        price: 2999
    },
    {
        itemname: "java",
        price: 999
    },
    {
        itemname: "android",
        price: 1999
    }
]

const totalAmt = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalAmt);