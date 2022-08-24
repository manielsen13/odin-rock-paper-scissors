console.log("Hello World");

function getComputerChoice() {
    //generate random number between 0 and 100
    let randomNumber = (Math.random() * 100);

    //use random number to get a computer choice
    if (randomNumber < 33.33) {
        return "rock";
    }
    else if (randomNumber <= 66.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {

    //chewck for invalid player inputs
    if (!validSelection(playerSelection)) {
        return "invalidInput"
    }

    //check for possible scenarios and return outcomes
    if (playerSelection == computerSelection) {
        console.log("THAT ROUND IS A DRAW.");
        return "draw";
    }
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
        console.log("YOU WIN THAT ROUND!");
        console.log(playerSelection.toUpperCase() + " BEATS " + computerSelection.toUpperCase());
        return "playerWin";
    }
    else {
        console.log("YOU LOSE THAT ROUND.");
        console.log(computerSelection.toUpperCase() + " BEATS " + playerSelection.toUpperCase());
        return "computerWin";
    }
}

function game() {
    //score tallies
    let playerScore = 0;
    let computerScore = 0;




    for (let i = 0; i < 5; i++) {
        //get the outcome of the game, which could be player win, invalid, computer win, or draw
        let outcome = playRound();
        //awards popint to winner of round
        //resets game if 3/5 has been won
    }
}

//use prompt() to get values for the person




//checks to see if the player entered the correct value
function validSelection (selection) {
    if (selection != "rock" || selection != "paper" || selection != "scissors") {
        return false;
    }
    else {
        return true;
    }
}