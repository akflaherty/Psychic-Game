// initialize wins, losses, and guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Randomly generate the answer letter
// function randomIndex(choiceList) {
// 	var randIndex = Math.floor(Math.random()*choiceList.length);
// 	return choiceList[randIndex]
// }


function updateScore (won, lost, remain) {
	document.getElementById("winDiv").innerHTML = won;
	document.getElementById("lossDiv").innerHTML = lost;
	document.getElementById("guessLeftDiv").innerHTML = remain;
}

function displayGuesses(guessList) {
	document.getElementById("lettersDiv").innerHTML = '';
	for (var i = 0; i < guessList.length; i++) {
		// $('.lettersDiv').append(guessList[i]);
		document.getElementById("lettersDiv").innerHTML = document.getElementById("lettersDiv").innerHTML + ' ' + guessList[i];
	}
}

function updateGuesses(guess) {
	document.getElementById("lettersDiv").innerHTML = document.getElementById("lettersDiv").innerHTML + ' ' + guess;
}

function resetGame () {
	guessesLeft = 9;
	lettersGuessed = [];	// reset letters guessed
	updateScore(wins, losses, guessesLeft);	// update display score
	displayGuesses(lettersGuessed);	// update displayed letters guessed
}

function resetAll() {
	wins = 0;
	losses = 0;
	resetGame();
}

$(document).ready(function() {
	var answer = letters[Math.floor(Math.random()*letters.length)];	// randomly select a letter
	document.onkeyup = function(event) {
		var userGuess = event.key;
		userGuess = userGuess.toUpperCase();	// make the guess upper case
		// check if the user entered a letter
		if (letters.indexOf(userGuess) < 0) {
			alert('Invalid choice of letter.');
		} else {
			if (userGuess === answer) {
				// user guessed correctly
				wins = wins + 1;	// increment wins
				alert('You won!');
				resetGame();
			} else {
				// user guessed incorrectly
				guessesLeft = guessesLeft - 1;	// decrease number of guesses left
				lettersGuessed.push(userGuess);	// add guess to array of letters guessed
				// updateGuesses(lettersGuessed);	// update the display of letters guessed so far
				updateGuesses(userGuess);
				updateScore(wins, losses, guessesLeft)
				// check how many guesses remain
				if (guessesLeft <= 0) {
					alert("You lost.");
					losses = losses + 1;
					resetGame();
				}
			}
		}
	}
});

