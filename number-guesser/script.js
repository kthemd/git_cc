let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

getAbsoluteDiff = (num1, num2) => {
    return Math.abs(num1 - num2)
}

compareGuesses = (human, computer, target) => {
    const hDiff = getAbsoluteDiff(human - target);
    const cDiff = getAbsoluteDiff(computer - target);
    const result = cDiff >= hDiff ? true : false;
    if ((0 > human) || (human > 9)) {
        alert("Guess must be between 0 and 9, inclusive.");
    } else {
        return result
    }
}

updateScore = winner => {
    if (winner == "human") {
        humanScore += 1;
    } else if (winner == "computer") {
        computerScore += 1;
    }
}

advanceRound = () => {
    currentRoundNumber += 1;
}