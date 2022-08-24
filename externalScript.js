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
        //get the outcome of the game, which could be player win, invalid, computer win, or draw
        let outcome = playRound(getPlayerChoice(), getComputerChoice());
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

//gets the player's choice
function getPlayerChoice() {
    let i = 0;
    //tries infinitely until the player enters a valid value
    while (i < 1) {
        let choice = prompt("What's your choice: Rock, Paper, or Scissors?");
        if (choice == null) {
            continue;
        }
        if (validSelection(choice.toString().toLowerCase())) {
            return choice.toString().toLowerCase()
        }
        else {
            console.log("Try picking again")
        }
    }

}

//runs when the game is over
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