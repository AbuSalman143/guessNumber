// creat random number
let randomNumber=parseInt(Math.random()*100+1);
if(randomNumber===100){
    randomNumber=randomNumber-1
}
console.log(randomNumber);

const submitButton=document.querySelector("#submitButton");
const userInput=document.querySelector("#guessFeild");
const guesses=document.querySelector(".guesses");
const reaming=document.querySelector(".reaming");
const loworhig=document.querySelector(".output");
const resultPara=document.querySelector(".result");

const p=document.createElement("p");


let preGuess=[];
let numGuess=1;

let playGame=true;


if(playGame){
    submitButton.addEventListener("click" ,function(e){
        e.preventDefault()// form ke action ko rokne k liye 
        const guess=parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    })
}
// guess value 1 to 100 hai ki nhi value Nan to nhi hai  
function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please enter a valid number`);
    } else if(guess<1){
        alert(`Please enter a number Greater than 1 `);
    }
    else if(guess>100){
        alert(`Please enter a number Less than 1 `);
    } else{
        preGuess.push(guess)
        if(numGuess===10){
            displayguess(guess);
            displayMessage(`Ohh...Sorry You Loss The Game . Game Over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayguess(guess);
            checkGuess(guess);
        }
    }
}

//  guess number low / high / equal hai to msg diplay krenge 
function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You Won ,You gussed it right `);
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`Number is low or is Too low`);
    }else{
        displayMessage(`Number is High or is Too High`);
    }
}
// value ko clean krega ,array ko update krega 
function displayguess(guess){
    userInput.value="";
    guesses.innerHTML+=`${guess}, `
    numGuess++;
    reaming.innerHTML=`${11-numGuess}`;

}
// msg ko display krega 
function displayMessage(message){
    
loworhig.innerHTML=`<h2 id="LossGame">${message}</h2>`;
const guess=parseInt(userInput.value);
if(numGuess===11){
    let lossGame=document.querySelector("#LossGame");
    lossGame.style.backgroundColor="red";
    loworhig.style.color="white";   
}else if(message===`You Won ,You gussed it right `){
    let lossGame=document.querySelector("#LossGame");
    lossGame.style.backgroundColor="green";
    loworhig.style.color="white";
} else{
    let lossGame=document.querySelector("#LossGame");
    lossGame.style.backgroundColor="orange";
    loworhig.style.color="white";
}

}

function endGame(message){
    userInput.value="";
    userInput.setAttribute("disabled","");
    p.classList.add("button");
    p.innerHTML=`<h5 id="newGame">Start new Game</h5>`;
    p.style.color="white";
    resultPara.appendChild(p)
    playGame=false
    newGame();
}
function newGame(message){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener("click",function(e){
        randomNumber=parseInt(Math.random()*100+1);
        preGuess = [];
        numGuess = 1;
        guesses.innerHTML = '';
        reaming.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        resultPara.removeChild(p);
        playGame = true;
    })
}


