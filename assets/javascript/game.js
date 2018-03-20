$(document).ready(function () {
    var winCount = 0;
    var lossCount = 0;
    var guessCount = 0;
    var lettersAlreadyGuessed = 0;

    // word list
    var words = ["Maine", "Texas", "Ohio", "Illinois", "Idaho", "Montana", "Florida"];

    // choose a random word
    var randomWord = words[Math.floor(Math.random() * words.length)];

    //splits word into array
    var wordArray = randomWord.split("");
    console.log(wordArray);

    var matchArray = [];
    var guessArray = [];
    var guessString = "";
    var wordDisplay = document.getElementById("word-display");
    var guessDisplay = document.getElementById("guesses-count");
    var winDisplay = document.getElementById("wins-display");
    var loseDisplay = document.getElementById("loses-display");
    var lettersDisplay = document.getElementById("letters-display");

    for (var i = 0; i < wordArray.length; i++) {
        guessArray.push(" _ ");
        guessString = guessString + " _ ";
    }

    //prints words to guessDisplay
    console.log("guessString " + guessString);
    wordDisplay.textContent = guessString;

    // captures key
    document.onkeyup = function (event) {
        var found = false;
        var userGuess = event.key.toLowerCase();
        console.log("userGuess " + userGuess);

        //checks to see if letter chosen matches
        for (var i = 0; i < wordArray.length; i++) {
            if (wordArray[i].toLowerCase() == userGuess) {
                guessArray[i] = userGuess;
                matchArray.push(userGuess);
                found = true;
                console.log("userGuess " + userGuess);
            }
        }
        console.log("found" + found);
        if (!found) {
            guessCount++;
        }

        guessDisplay.textContent = guessCount;
        console.log(guessCount);

        var tempString = "";
        console.log("userGuess " + userGuess);
        for (var j = 0; j < wordArray.length; j++) {
            tempString = tempString + guessArray[j].toUpperCase();
        };

        wordDisplay.textContent = tempString;
        console.log("Guess Count " + guessCount);
        

        if (guessCount == 10) {
            //you lose
            lossCount++;
            loseDisplay.textContent = "Sorry, you lose. Loss Count: " + lossCount;
            
        }
        if (wordArray.length == matchArray.length) {
            ///you win
            winCount++;
            winDisplay.textContent = "You got it!  Win count: " + winCount;
             

            
        }

    }
    function myFunction() {
        location.reload();
    }
    //  closing bracket for document ready      
})
