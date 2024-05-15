/* jshint esversion: 6 */ 
let wins = 0;
let losses = 0;
let triesLeft = 6;
let difficultyLevel = 1;

const resultDiv = document.getElementById('result');
resultDiv.style.visibility = "hidden"; 

function play(userChoice) {
  if (triesLeft === 0) {
      return; 
  }

  const computerChoice = getComputerChoice();
  const resultText = determineWinner(userChoice, computerChoice);

  document.getElementById('player-choice').children[0].src = `assets/images/${userChoice}.webp`;
  document.getElementById('computer-choice').children[0].src = `assets/images/${computerChoice}.webp`;

  updateResult(`You chose ${userChoice}. Computer chose ${computerChoice}. ${resultText}`);
  document.getElementById('win').innerText = wins;
  document.getElementById('loss').innerText = losses;
  document.getElementById('tries-left').innerText = --triesLeft;

  if (triesLeft === 0) {
      endGame();
  }
}

function updateResult(text) {
  resultDiv.innerText = text;
}

function endGame() {
  resultDiv.innerHTML = '<h3>Game over! Reload to play again</h3>' + 
                        '<button onclick="window.location.reload();">New Game</button>';
  resultDiv.style.visibility = "visible"; 
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);
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
