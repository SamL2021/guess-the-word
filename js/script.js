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
  const remainingGuessesSpan = document.querySelector(".remaining span");
  
  // The empty paragraph where messages will appear when the player guesses a letter.
  const message = document.querySelector(".message");
  
  // The hidden button that will appear prompting the player to play again.
  const playAgain = document.querySelector(".play-again");
  
  // Magnolia was the starting word to test out the game but I changed to hibiscus
  let word = "hibiscus"
  
  // Adding new var with empty array 
  const guessedLetters = [];
  
  // Global variable for the number of Guesses
  let remainingGuesses = 8;
  
  // Fetch words to use 
  const getWord = async function () {
    const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await response.text();
    const wordArray = words.split("\n");
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    placeholder(word);
  };
  
  // Start the game
  getWord();
  
  //Display circle symbols as placeholders 
  const placeholder = function (word) {
      const placeholderLetters = [];
      for (const letter of word) {
        // console.log(letter);
        placeholderLetters.push("●");
      }
      wordInProgress.innerText = placeholderLetters.join("");
  };
  
  // placeholder(word);
  
  
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
  
  // Function to Capture Input
  
  const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
      message.innerText = "You've already guessed that letter, try again!";
   } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    updateGuessesRemaining(guess);
    showGuessedLetters();
    updateWordInProgress(guessedLetters);
    }
    };
  
  
  // Function to show guessed letters
  const showGuessedLetters = function () {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
      const li = document.createElement("li");
      li.innerText = letter;
      guessedLettersElement.append(li);
    }
  };
  
  // Function to Update the Word in Progress
  const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
      if (guessedLetters.includes(letter)) {
        revealWord.push(letter.toUpperCase());
      } else {
        revealWord.push("●");
      }
    }
    // console.log(revealWord);
    wordInProgress.innerText = revealWord.join("");
    playerWon();
  };
  
  // Function to Count Guesses Remaining
  const updateGuessesRemaining = function (guess) {
    const upperWord = word.toUpperCase();
    if (!upperWord.includes(guess)) {
      message.innerText = `Guess again, the word has no ${guess}.`;
      remainingGuesses -= 1;
    } else {
      message.innerText = `Good choice! The word has the letter ${guess}.`;
    }
  
    if (remainingGuesses === 0) {
      message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`;
    } else if (remainingGuesses === 1) {
      remainingGuessesSpan.innerText = `${remainingGuesses} guess`;
    } else {
      remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
    }
  };
  
  // Function to Check If the Player Won
  const playerWon = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
      message.classList.add("win");
      message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
  };