$(document).ready(function () {

var winCount = 0;
var guessCount = 0;
var lettersAlreadyGuessed = 0;

// word list
var words = ["Maine", "Texas", "Ohio", "Illinois", "Idaho", "Montana", "Florida"];

// choose a random word
var randomWord = words[Math.floor(Math.random() * words.length)];

//splits word into array
var wordArray = randomWord.split("");

console.log(wordArray);
console.log(wordArray.length);

// display "_ _ _ _ _"
var matchArray = [];
var guessArray = [];
var guessString = "";
var wordDisplay = document.getElementById("word-display");
var guessCountDisplay = document.getElementById("guesses-count");
var winDisplay = document.getElementById("wins-display");
var loseDisplay = document.getElementById("loses-display");
var lettersDisplay = document.getElementById("letters-display");

console.log(guessArray);

console.log(wordDisplay);

console.log(guessCount);
var found = false;
for (var i = 0; i < wordArray.length; i++) {
    guessArray.push(" _ ");
    guessString = guessString + " _ ";
}

//prints words to guessDisplay
console.log(guessString);

wordDisplay.textContent = guessString;

// captures key
document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();
    console.log(userGuess);


    //checks to see if letter chosen matches
    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray[i].toLowerCase() == userGuess) {
            guessArray[i] = userGuess;
            matchArray.push(userGuess);
            found = true;
            console.log("userGuess " + userGuess);

        }
        //var for capturing string to print from array  
        // //var to display string
        // var displayString = "";
        // guessDisplayArray[j] = userGuess;
        // found = true;

        //converts to string
        // for (var k = 0; k < guessDisplayArray.length; k++) {
        //     displayString = displayString + guessDisplayArray[k].toUpperCase();
        //     console.log(displayString);
        //     //prints string to jumbotron
        //     wordDisplay.textContent = displayString;
        // }

        //put wrong letter in letter display
        //     } else  {

        //  var spanElement = document.createElement("span");
        //   spanElement.textContent = userGuess;


        //  lettersDisplay.appendChild(spanElement);


        //     };

    }
    console.log("missed4" + found);
    if (!found) {
        guessCount++;

    }
    guessCountDisplay.textContent = guessCount;
    console.log(guessCount);

    if (guessCount = 10) {
        //you lose
        loseDisplay.textContent = "Sorry, you lose.";
        console.log(loseDisplay);


    }
    if (wordArray.length == matchArray.length) {
        ///you win
        winDisplay.textContent = "You win!";
        console.log(winDisplay);
    }
}


//  closing bracket for document ready      
})






//