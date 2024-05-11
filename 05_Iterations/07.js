const myNums = [1,2,3,4,5,6,7]

// const newNums = myNums.map((num)=>num+10)// maps return value without scope

// chaining
const newNums = myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num%11==0)
console.log(newNums)