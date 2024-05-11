let randomNumber = parseInt(Math.random()*100+1)
console.log(randomNumber);
const submit =document.querySelector('#subt')
const userInput =document.querySelector('#guessfield')
const guessSlot = document.querySelector('.guesses')
const remaing = document.querySelector('.lastResult')
const lowOrhi = document.querySelector('.lowOrhi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numOfGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateguess(guess)
    })
}
function validateguess(guess){
        if(isNaN(guess)){
            alert("please enter a valid number")
        }else if(guess<1){
            alert("enter valid number")
        }else if(guess>100){
            alert("enter valid number")
        }else{
            prevGuess.push(guess)
            if(numOfGuess === 11){
                displayGuess(guess)
                displayMessage(`Game Over RAndom number was ${randomNumber}`)
                endGame()
            }else{
                displayGuess(guess)
                checkGuess(guess)
            }
        }
}

function checkGuess(guess){
if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
}else if(guess<randomNumber){
    displayMessage(`Number is low`)
}else if(guess>randomNumber){
    displayMessage(`guess is high`)
}
}

function displayGuess(guess){
userInput.value = ``
guessSlot.innerHTML +=`${guess}, `
numOfGuess++
remaing.innerHTML = `${10-numOfGuess}`
}


function displayMessage(message){
lowOrhi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
userInput.validateguess =  ``
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML = `<h2 id = "newGame"> start new game </h2>`
startOver.appendChild(p)
playGame = false
newGame()
}

function newGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click', function(e){
randomNumber =  parseInt(Math.random()*100+1)
prevGuess =[]
numOfGuess = 1
guessSlot.innerHTML = ''
remaing.innerHTML = `${10-numOfGuess}`
userInput.removeAttribute('disabled')
startOver.removeChild(p)

    playGame = true
})
}

