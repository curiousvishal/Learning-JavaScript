//for each

const coding = ['js', "ruby", "java",'python']
coding.forEach(item => {
    console.log(item);
});

function printMe(item){
    console.log(item);

}
coding.forEach(printMe)// function 

coding.forEach((item, index, arr)=>{
console.log(item, index, arr);// each has full array data
})

const myCoding = [
    {
        languageName: "js",
        languagefilename: '.js'
    },
    {
        languageName: "python",
        languagefilename: '.py'
    },
    {
        languageName: "java",
        languagefilename: '.java'
    }
]

myCoding.forEach((item)=>{
console.log(item.languageName);
})
