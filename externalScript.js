console.log("Hello World");


//core components for scoreboard functionality
let playerScore = 0;
let computerScore = 0;

const computerScoreValueDisplay = document.querySelector(".computerScoreValue");
const playerScoreValueDisplay = document.querySelector(".playerScoreValue");



//core components for announcer functionality
const gameStartText = "Welcome to Rock, Paper, Scissors! You're playing against the computer. First to 5 wins!";
const gameEndText = "That's the game! Press any of the three buttons to reset and play again";

const announcerText = document.querySelector(".announcerText");

//button functionality
const choiceBtns = document.querySelectorAll(".choiceBtn");

//round is played when buttons are pressed
for (const choiceBtn of choiceBtns) {
    choiceBtn.addEventListener("click", (e) => {
        console.log(e.target.id);
        console.log(playRound(e.target.id, getComputerChoice()))
    });
}

function getComputerChoice() {
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
    //check for possible game scenarios and determine round outcomes. Update scoreboard.
    if (playerSelection == computerSelection) {
        announcerText.textContent = "That round is a draw!";
    }
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
        announcerText.textContent = "You win that round!";
        playerScore++;
        console.log(playerScore)
        playerScoreValueDisplay.textContent = playerScore.toString();
    }
    else {
        announcerText.textContent = ("You lose that round.");
        computerScore++;
        console.log(computerScore)
        computerScoreValueDisplay.textContent = computerScore.toString();
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
        let outcome = playRound(getPlayerChoice(), getComputerChoice());

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

    announceGameOutcome(playerScore, computerScore);
}

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