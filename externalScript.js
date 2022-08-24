console.log("Hello World");

game();

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
    //check for invalid player inputs
    if (!validSelection(playerSelection)) {
        console.log("YOU HAD A SPELLING ERROR IN YOUR CHOICE AND WASTED A ROUND. TRY AGAIN.")
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
    //start of game
    console.log("Welcome to a game of Rock, Paper, Scissors. There will be 5 rounds!")

    //scoreboard
    let playerScore = 0;
    let computerScore = 0;

    //play 5 rounds
    for (let i = 0; i < 5; i++) {
        //get player's choice
        let playerChoice = prompt("What's your choice: Rock, Paper, or Scissors?").toLowerCase()
        //get the outcome of the game, which could be player win, invalid, computer win, or draw
        let outcome = playRound(playerChoice, getComputerChoice());
        //give a point to the winner
        if (outcome == "computerWin") {
            computerScore++;
        }
        if (outcome == "playerWin") {
            playerScore++;
        }
        //announce the game score
        console.log("THE SCORE IS");
        console.log("PLAYER: " + playerScore);
        console.log ("COMPUTER: " + computerScore);
    }

    //announce final outcome
    announceGameOutcome(playerScore, computerScore);
}

//use prompt() to get values for the person








function announceGameOutcome (playerFinal, computerFinal) {
    console.log("THE GAME IS OVER! THE FINAL SCORE IS");
    console.log("PLAYER: " + playerFinal);
    console.log ("COMPUTER: " + computerFinal);

    if (playerFinal > computerFinal) {
        console.log("YOU WIN! CONGRATULATIONS!")
    }
    else if (computerFinal > playerFinal) {
        console.log("YOU LOSE. BETTER LUCK NEXT TIME.")
    }
    else {
        console.log("IT'S A TIE.")
    }
}


//checks to see if the player entered the correct value
function validSelection (selection) {
    if (selection == "rock" || selection == "paper" || selection == "scissors") {
        return true;
    }
    else {
        return false;
    }
}