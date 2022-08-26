//core components for scoreboard functionality
let playerScore = 0;
let computerScore = 0;

const computerScoreValueDisplay = document.querySelector(".computerScoreValue");
const playerScoreValueDisplay = document.querySelector(".playerScoreValue");

//core components for announcer functionality
const gameStartText = "Welcome to Rock, Paper, Scissors! You're playing against the computer. First to a score of 5 wins!";
const gameEndText = "That's the game! Press the reset button to play again!";

const announcerText = document.querySelector(".announcerText");

//player choice buttons functionality
const choiceBtns = document.querySelectorAll(".choiceBtn");

//round is played when buttons are pressed, unless a player has reached 5--then it resets
for (const choiceBtn of choiceBtns) {
    choiceBtn.addEventListener("click", (e) => {
        if (playerScore == 5 || computerScore == 5) {
            return;
        }
        playRound(e.target.id, getComputerChoice())
    });
}

//reset button + functionality
const resetButton = document.createElement("button");

resetButton.textContent = "Reset"
resetButton.addEventListener("click", (e) => {
    window.location.reload();
})

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
        playerScoreValueDisplay.textContent = playerScore.toString();
        checkForWin();
    }
    else {
        announcerText.textContent = ("You lose that round.");
        computerScore++;
        computerScoreValueDisplay.textContent = computerScore.toString();
        checkForWin();
    }
}

function checkForWin () {
    if (playerScore > 4 || computerScore > 4) {
        announcerText.textContent = gameEndText;
        document.body.appendChild(resetButton);
    }
}

