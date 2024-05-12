let wins = 0;
let losses = 0;
let triesLeft = 5;
let difficultyLevel = 1;  

function play(userChoice) {
    if (triesLeft === 0) {
        document.getElementById('result').innerText = 'Game over! Reload to play again';
        return;
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    document.getElementById('result').innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
    document.getElementById('win').innerText = wins;
    document.getElementById('loss').innerText = losses;
    document.getElementById('tries-left').innerText = --triesLeft;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    }
    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        wins++;
        return "WoW You win!";
    } else {
        losses++;
        return "You lose try Again!";
    }
}

function setDifficulty() {
    const select = document.getElementById('difficulty');
    difficultyLevel = parseInt(select.value, 10);   
}
