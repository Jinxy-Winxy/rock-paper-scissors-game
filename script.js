// step 2 
// get computer choice to randomly choice rock, paper, scissors

function getComputerChoice(){

    let i = Math.floor(Math.random() * 3);

    if (i == 0){
        return("rock");
    }
        else if (i == 1){
        return("paper");
    }
        else {
        return("scissors");
    }
}

// step 3
// get human choice return one choice depending on input

function getHumanChoice(){

    let a = prompt("Choice: Rock, Paper or Scissors?").toLowerCase();

    if (a == "rock"){
        return("rock");
    }
        else if (a == "paper"){
            return("paper");
    }
        else {
            return("scissors");
        }
}
// step 4

let humanScore = 0;
let computerScore = 0;

// step 5 
// write function takes computer and players score
// plays a single round
// increases score and logs a winner announcement

function playRound(humanChoice, computerChoice){

    if (humanChoice == "rock" && computerChoice == "rock"){
        console.log("Tie! Rock vs Rock");
    }
        else if (humanChoice == "paper" && computerChoice == "paper"){
        console.log("Tie! Paper vs Paper");
        }
        else if (humanChoice == "scissors" && computerChoice == "scissors"){
        console.log("Tie! Scissors vs Scissors");
        }
        else if (humanChoice == "rock" && computerChoice == "scissors"){
            console.log("Round Won! Rock beats Scissors");
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "rock"){
            console.log("Round Won! Paper beats Rock");
            humanScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper"){
            console.log("Round Won! Scissors beats Paper");
            humanScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "paper"){
            console.log("Round Lose! Paper beats Rock")
            computerScore++;
        } 
        else if (humanChoice == "paper" && computerChoice == "scissors"){
            console.log("Round Lose! Scissors beats Paper");
            computerScore++;
        }
        else {
            console.log("Round Lose! Rock beats Scissors");
            computerScore++;
        }

            console.log("Your score: ", humanScore);
            console.log("Computer Score: ", computerScore);
}

    
// step 6 
// write new function called playGame that calls playRound
// 5 rounds need to be played and to keep the score
// declare who is the winner at the end.

function playGame(){

    playRound(getHumanChoice(),getComputerChoice());
         playRound(getHumanChoice(),getComputerChoice());
            playRound(getHumanChoice(),getComputerChoice());
                 playRound(getHumanChoice(),getComputerChoice());
                    playRound(getHumanChoice(),getComputerChoice());
   


    if (humanScore > computerScore){
        console.log("You Win!");
    }
        else if (computerScore > humanScore){
            console.log("Computer Wins!");
        }
        else {
            console.log("Tie!")
        }
}

playGame();
