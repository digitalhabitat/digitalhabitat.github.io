var randomNumber = Math.floor(Math.random() * 100) + 1;
// Math.floor() rounds down to nearest integer
// Multiply random number by 100 for 0-99
// Add 1 for 1-100 as a possible value

var guesses = document.querySelector('.guesses');
var lastResult =  document.querySelector('.lastResult');
var lowOrHi =  document.querySelector('.lowOrHi');
// References to the resuslts in the HTML
// <p class="guesses"></p>

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
// References to the form text input in the HTML
// <label for="guessField">Enter a guess: </label>
// <input type="text" id="guessfield" class="guessField">

var guessCount = 1;
var resetButton;

function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
  guesses.textContent = 'Previeous guesses: ';
  }
  guesses.textContent += userGuess + ' ';
  // initial formating for var guesses

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.texContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  // prevent additional sumbmissions

  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  // create new button to restart game

  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  // creates NodeList of p elements inside <div class="resultsParas"> 

  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  
 lastResult.style.backgroundColor = 'white';

 randomNumber = Math.floor(Math.random() * 100) + 1;
 
}

guessSubmit.addEventListener('click', checkGuess);

