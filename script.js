function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt("What's your choice?");
    return choice;
}

function capitalize(word) {
    return word.at(0).toUpperCase() + word.slice(1);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let lowerCase = humanChoice.toLowerCase();

        if ((lowerCase === 'rock' && computerChoice === 'scissors') ||
            (lowerCase === 'paper' && computerChoice === 'rock') ||
            (lowerCase === 'scissors' && computerChoice === 'paper')) {
                humanScore++;
                return `You win! ${capitalize(lowerCase)} beats ${computerChoice}.`;

        } else if ((lowerCase === 'rock' && computerChoice === 'paper') ||
                   (lowerCase === 'paper' && computerChoice === 'scissors') ||
                   (lowerCase === 'scissors' && computerChoice === 'rock')) {
            computerScore++;
            return `You lose! ${capitalize(computerChoice)} beats ${lowerCase}.`;

        } else {
            return "It's a tie!";
        }
    }

    let humanSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }

    let gameResult;

    if (humanScore > computerScore) {
        gameResult = "Congratulations! You're the ultimate champion!";
    } else if (humanScore < computerScore) {
        gameResult = "You've been defeated! The computer reigns supreme.";
    } else {
        gameResult = "It's a draw! A well-fought match by both sides."
    }

    return gameResult;
}

console.log(playGame());