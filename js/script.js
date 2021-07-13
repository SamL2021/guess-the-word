  // The unordered list where the player's guessed letters will appear.
const guessedLettersElement = document.querySelector(".guessed-letters");

// The button with the text "Guess!" in it.
const guessBtn = document.querySelector(".guess");

// The text input where the player will guess a letter.
const letterInput = document.querySelector(".letter");

// The empty paragraph where the word in progress will appear.
const wordInProgress = document.querySelector(".word-in-progress");

// The paragraph where the remaining guesses will display.
const remainingText = document.querySelector(".remaining");

// The span inside the paragraph where the remaining guesses will display.
const remainingNumber = document.querySelector(".remaining span");

// The empty paragraph where messages will appear when the player guesses a letter.
const message = document.querySelector(".message");

// The hidden button that will appear prompting the player to play again.
const playAgain = document.querySelector(".play-again");

// Magnolia is your starting word to test out the game
const word = "magnolia"

// Adding new var with empty array 
const guessedLetters = [];

//Display circle symbols as placeholders for the chosen word's letters - Code inserted from solution code
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
      console.log(letter);
      placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);


guessBtn.addEventListener("click", function (e) {
  e.preventDefault();
  message.innerText = "";
  const guess = letterInput.value;
  const goodGuess = validateInput(guess);

  if (goodGuess) {
    makeGuess(guess);
  }
  letterInput.value = "";
});


 const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    message.innerText = "Try adding a letter";
   } else if (input.length > 1) {
    message.innerText ="One at a time please";
   } else if (!input.match(acceptedLetter)) {
    message.innerText ="Please enter a letter from A - Z only";
   } else {
     return input;
  }
};

// Create a Function to Capture Input

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You've already guessed that letter, try again!";
 } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
};


  