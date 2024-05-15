/* jshint esversion: 6 */ 
// Initialize game state variables
let wins = 0; // Number of wins
let losses = 0; // Number of losses
let triesLeft = 6; // Number of tries left
let difficultyLevel = 1; // Game difficulty level

// Get the result div and hide it initially
const resultDiv = document.getElementById('result');
resultDiv.style.visibility = "hidden"; 

/**
 * This function plays a round of Rock, Paper, Scissors.
 * @param {string} userChoice - The user's choice (rock, paper, or scissors).
 */

function play(userChoice) {
    // Check if there are no tries left
  if (triesLeft === 0) {
      return; 
  }

  // Get the computer's choice and determine the winner
  const computerChoice = getComputerChoice();
  const resultText = determineWinner(userChoice, computerChoice);

  // Update the images to show the choices
  document.getElementById('player-choice').children[0].src = `assets/images/${userChoice}.webp`;
  document.getElementById('computer-choice').children[0].src = `assets/images/${computerChoice}.webp`;

  // Update the result display
  updateResult(userChoice, computerChoice, resultText);

  // Update the scoreboard
  document.getElementById('win').innerText = wins;
  document.getElementById('loss').innerText = losses;
  document.getElementById('tries-left').innerText = --triesLeft;

  // Check if the game should end
  if (triesLeft === 0) {
      endGame();
  }
}


/**
 * This function updates the result display with the choices and result text.
 * @param {string} text - The result text to display.
 */

function updateResult(userChoice, computerChoice, resultText) {
  resultDiv.innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. ${resultText}`;
  resultDiv.style.visibility = "visible"; // Make the result div visible
}

/**
 * This function ends the game and displays the game over message.
 */

function endGame() {
  resultDiv.innerHTML = '<h3>Game over! Reload to play again</h3>' + 
                        '<button onclick="window.location.reload();">New Game</button>';
  resultDiv.style.visibility = "visible"; // Make the result div visible
}

/**
 * This function gets the computer's choice randomly.
 * @returns {string} - The computer's choice (rock, paper, or scissors).
 */

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3); // Random index between 0 and 2
    return choices[index];
}

/**
 * This function determines the winner of a round.
 * @param {string} userChoice - The user's choice.
 * @param {string} computerChoice - The computer's choice.
 * @returns {string} - The result of the round (win, lose, or draw).
 */

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
        return "You lose, try again!";
    }
}

/**
 * This function sets the difficulty level based on the user's selection.
 */

function setDifficulty() {
    const select = document.getElementById('difficulty');
    difficultyLevel = parseInt(select.value, 10);   
}
