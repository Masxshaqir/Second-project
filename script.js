let wins = 0;
let losses = 0;
let triesLeft = 6; 

function play(userChoice) {
    if (triesLeft === 0) {
        document.getElementById('result').innerText = 'Game over! Reload to play again';
        return;
    }