const arr =[1,2,3,4,5]

//for of
/*
for (const num of arr) {
    console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
*/

//maps

const map = new Map()// map is not iterable
map.set('IN', "india")
map.set('usa', "United s america")
map.set('fr', "france")
console.log(map);

for (const [key,value] of  map) {
    console.log(key, ':-' , value);
}
const myObject ={
    'game1': 'nfs',
    'game2': 'spiderman'
}
// for (const [key,value] of myObject) { object is not iterable
//     console.log(key, ':-' , value);
// }

