/**
 GAME FUNCTION
 -Player must guess a number between the min and max
 -Player gets a certain amount of guessess
 -Notify player of guesses remaining
 -Let player choose to play again
 */

//  Game Values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 4;

// UI Elements
const game = document.getElementById("game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen for guess btn
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // Check if won
  if (guess === winningNum) {
    // Game Over - Won
    gameOver(true, `${winningNum} is correct! You Win!`);
  } else {
    // Subtract 1 from guesses left
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game Over - Lost
      gameOver(
        false,
        `Game Over, You Lost. The correct answer was ${winningNum}`
      );
    } else {
      // Game continues - answer wrong
      // Change border color
      guessInput.style.borderColor = "red";
      // Set Text Color
      message.style.color = "red";
      // Clear input
      guessInput.value = "";
      // Tell user wrong number guesses
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`);
    }
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set Text Color
  message.style.color = color;
  // Set message for winning
  setMessage(msg);

  // Play Again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

// Get winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
