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