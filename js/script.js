// The unordered list where the player's guessed letters will appear.
const guessedLetters = document.querySelector(".guessed-letters");

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

// Event Listener for the button
guessBtn.addEventListener("click", function (e) {
    //TIP: code below to prevent the default behavior of the form submitting, and then reloading the page. 
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});

  