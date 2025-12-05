const buttons = document.querySelector(".choices");
const playerName = document.querySelector(".player-name");
const playerScore = document.querySelector(".player-score");
const cpuScore = document.querySelector(".computer-score");
const roundResult = document.querySelector(".round-result");
const matchResult = document.querySelector(".match-result");

playerName.textContent = prompt("What's your name?");
(playerName.textContent) ? null : playerName.textContent = "Player";

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function capitalize(word) {
    return word.at(0).toUpperCase() + word.slice(1);
}

let humanScore = 0;
let computerScore = 0;

function playGame() {

    let humanSelection;
    let computerSelection;

    buttons.addEventListener('click', (e) => {
        humanSelection = e.target;
        computerSelection = getComputerChoice();

        (matchResult.textContent) ? matchResult.style.cssText = "background-color: none;" : null;
        (matchResult.textContent) ? matchResult.textContent = "" : null;

        roundResult.textContent = playRound(humanSelection.className, computerSelection);
        playerScore.textContent = `${humanScore}`;
        cpuScore.textContent = `${computerScore}`;

        if (humanScore === 5) {
            matchResult.textContent = "Congratulations! You're the ultimate champion!";
            matchResult.style.cssText = "background: #008000; border: 4px solid #006400; box-shadow: 0px 0px 4px #1f1f1f;";
            humanScore = 0;
            computerScore = 0;

        } else if (computerScore === 5) {
            matchResult.textContent = "You've been defeated! The computer reigns supreme.";
            matchResult.style.cssText = "background: #ff0000; border: 4px solid #8f0000; box-shadow: 0px 0px 4px #1f1f1f;";
            humanScore = 0;
            computerScore = 0;
        }
    });

    function playRound(humanChoice, computerChoice) {

        if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')) {
                humanScore++;
                roundResult.style.cssText = "color: white; background: #008000; border: 4px solid #006400;";
                return `You win! ${capitalize(humanChoice)} beats ${computerChoice}.`;

        } else if ((humanChoice === 'rock' && computerChoice === 'paper') ||
                   (humanChoice === 'paper' && computerChoice === 'scissors') ||
                   (humanChoice === 'scissors' && computerChoice === 'rock')) {
            computerScore++;
            roundResult.style.cssText = "color: white; background: #ff0000; border: 4px solid #8b0000;";
            return `You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`;

        } else {
            roundResult.style.cssText = "color: white; background: #a9a9a9; border: 4px solid #808080;";
            return "It's a tie!";
        }
    }
}

playGame();