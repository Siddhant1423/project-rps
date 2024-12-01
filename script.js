
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

function getHumanChoice(){
    let y = prompt("what is your choice : rock | paper | scissors")
    return y;
}

function playRound(x1, y1){

    if(x1=="rock" && y1=="paper")
        {
        console.log("Paper beats Rock. You win !!!")
        humanScore++;
    }
    else if(x1=="rock" && y1=="scissors")
        {
        console.log("Rock beats Scissors. Computer wins !!!")
        computerScore++;
    }
    else if(x1=="paper" && y1=="rock")
        {
        console.log("Paper beats rock. Computer wins !!!")
        computerScore++;
    }
    else if(x1=="paper" && y1=="scissors")
        {
        console.log("Scissors beats Paper. You win !!!")
        humanScore++;
    }
    else if(x1=="scissors" && y1=="rock")
        {
        console.log("Rock beats Scissors. You win !!!")
        humanScore++;
    }
    else if(x1=="scissors" && y1=="paper")
        {
        console.log("Scissors beat Paper. Computer wins !!!")
        computerScore++;
    }
    else{
        console.log("Draw !!!")
    }
}


function round(i)
{
console.log("ROUND "+i)
var HumanSelection = getHumanChoice()
let y1 = HumanSelection.toLowerCase()
console.log("player choice : " +y1)

var x1 = getComputerChoice()
console.log("computer choice: " +x1)

playRound(x1, y1)

console.log("Score: Player |"+humanScore+"| Computer |"+computerScore+"|")
}

for (i=1;i<=5;i++){
    round(i)
}
if(humanScore>computerScore){
    console.log("GAME OVER ! $ $ $ YOU WIN $ $ $")
}else{
    console.log("GAME OVER ! YOU LOST !!!")
}

