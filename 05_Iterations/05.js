//const coding = ["js", "ruby", "java",'python']

// const values = coding.forEach((item)=>{
// console.log(item);
// return item // for each cant return value
// })

// console.log(values);

const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums1 = myNums.filter((num)=>num>4) //{ }curly braces dont return because of scope
// console.log(newNums1);

// const newNums = myNums.filter((num)=>{// filter returns the filtered values
//     return num>4
// }) //return manually
// console.log(newNums);

const newNums = []

myNums.forEach((num)=>{
    if(num>4 ){
        newNums.push(num)
    }
})
console.log(newNums);
