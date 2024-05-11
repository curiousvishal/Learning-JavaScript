const buttons = document.querySelectorAll('.button')// select all necessary elements in variables
const body = document.querySelector('body')
buttons.forEach(function(btn){
    console.log(btn);
    btn.addEventListener('click',function(e){
console.log(e);// registers the click and stores in e
console.log(e.target);// takes full tag
if(e.target.id === 'grey'){
    body.style.backgroundColor = e.target.id
}else if(e.target.id ==='white'){
    body.style.backgroundColor = e.target.id
}else if(e.target.id=== 'blue'){
    body.style.backgroundColor = e.target.id
}else if(e.target.id === 'yellow'){
    body.style.backgroundColor = e.target.id
}
    })
})