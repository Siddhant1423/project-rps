
let humanScore = 0, computerScore = 0;

function getComputerChoice(){
let num = Math.random()
// console.log(num)
if (num<=0.34){
        // console.log('rocks')
        x = 'rock';
    } else if (0.34 < num && num < 0.67){
        // console.log('paper')
        x = 'paper';
    } else if(num >=0.67) {
        // console.log('scissors')
        x = 'scissors';
    }
    return x;
}

function playRound(x1, y1){

    if(x1=="rock" && y1=="paper")
        {
        mainInfo.textContent = "Paper beats Rock. You win !!!";
        humanScore++;
        PlayerCounter.textContent = humanScore;
    }
    else if(x1=="rock" && y1=="scissors")
        {
        mainInfo.textContent = "Rock beats Scissors. Computer wins !!!";
        computerScore++;
        ComputerCounter.textContent = computerScore;
    }
    else if(x1=="paper" && y1=="rock")
        {
        mainInfo.textContent = "Paper beats rock. Computer wins !!!";
        computerScore++;
        ComputerCounter.textContent = computerScore;
    }
    else if(x1=="paper" && y1=="scissors")
        {
        mainInfo.textContent = "Scissors beats Paper. You win !!!";
        humanScore++;
        PlayerCounter.textContent = humanScore;
    }
    else if(x1=="scissors" && y1=="rock")
        {
        mainInfo.textContent = "Rock beats Scissors. You win !!!";
        humanScore++;
        PlayerCounter.textContent = humanScore;
    }
    else if(x1=="scissors" && y1=="paper")
        {
        mainInfo.textContent = "Scissors beat Paper. Computer wins !!!";
        computerScore++;
        ComputerCounter.textContent = computerScore;
    }
    else{
        mainInfo.textContent = "DRAW ! Try Again ";
    }
}


function round(getHumanChoice)
{
var y1 = getHumanChoice;
console.log("player choice: " +y1)
var x1 = getComputerChoice()
console.log("computer choice: " +x1)

playRound(x1, y1)

outcome.textContent = humanScore > 5 ? "Congratulations !!! YOU WIN !!!" : computerScore > 5 ? "GAME LOST !!!":"final result pending ..."; 
}

/* DOM */

const headingDiv = document.querySelector("#heading");
headingDiv.setAttribute('style','padding:16px; max-width:fit-content; margin-inline: auto;')
const heading = document.createElement("h1");
heading.textContent = "Rock Paper Scissors Game"
heading.setAttribute('style', 'display:grid; justify-content:center;')
const headingTwo = document.createElement("h4");
headingTwo.textContent = "Select any one. If you score more than 5 points you win. GOOD LUCK !";


const div = document.querySelector("#container");
div.setAttribute('style','padding:48px; display:flex; gap:16px;')
div.style.justifyContent = "center";

// DOM - BUTTONS

const rockBtn = document.createElement("button");
rockBtn.textContent = "ROCK";
rockBtn.addEventListener('click',()=>{round('rock')});
const scissorBtn = document.createElement("button");
scissorBtn.textContent = "SCISSOR";
scissorBtn.addEventListener('click',()=>{round('scissors')});
const paperBtn = document.createElement("button"); 
paperBtn.textContent = "PAPER";
paperBtn.addEventListener('click',()=>{round('paper')});

const info = document.createElement("div");
document.body.appendChild(info);
info.setAttribute('style','padding:16px; max-width:300px; margin-inline: auto; display:flex; justify-content:space-around;')
const mainInfo = document.createElement("p");

const label = document.createElement("div");
document.body.appendChild(label);
label.setAttribute('style','padding:16px; max-width:200px; margin-inline: auto; display:flex; justify-content:space-around; gap:24px;')
const para = document.createElement("p");
para.textContent = "Computer";
const paraOne = document.createElement("p");
paraOne.textContent = "Player";

const counter = document.createElement("div");
document.body.appendChild(counter);
counter.setAttribute('style','padding:16px; max-width:200px; margin-inline: auto; display:flex; justify-content:space-around; gap:24px;')
const ComputerCounter = document.createElement("p");
ComputerCounter.textContent = 0;
const PlayerCounter = document.createElement("p");
PlayerCounter.textContent = 0;

const result = document.createElement("div");
document.body.appendChild(result);
result.setAttribute('style','padding:16px; max-width:250px; margin-inline: auto; display:grid; justify-content:center;')
const outcome = document.createElement("p");



headingDiv.appendChild(heading);
headingDiv.appendChild(headingTwo);

div.appendChild(rockBtn);
div.appendChild(scissorBtn);
div.appendChild(paperBtn);

info.appendChild(mainInfo);

label.appendChild(para);
label.appendChild(paraOne);

counter.appendChild(ComputerCounter);
counter.appendChild(PlayerCounter);

result.appendChild(outcome)