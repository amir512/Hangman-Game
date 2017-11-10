window.addEventListener("load", hangmanStart);

function hangmanStart() {

var name //user's name
var NumberofGuesses = 10; //Number of times a user can guess a letter
var lettersGuessed = []; //array to hold the letters already guessed
var wins = []; //Number of times the user has won

var songs = ["clique", "dirt off your shoulder", "drunk in love", "empire state of mind", "99 problems", "izzo", "bonnie and clyde"]; //Define an array of songs

var randomSong = songs[Math.floor(Math.random() * songs.length)]; //Pick a random song to use in Hangman

var arrayrandomSong = randomSong.split(""); //Take random song and split up into individual letters
console.log(arrayrandomSong);

var stringrandomSongNoCommas = arrayrandomSong.join(""); //Take random song and remove the commas
console.log(stringrandomSongNoCommas);

var answerArray = []; //Create an array of blanks for the random song
	for (i = 0; i < stringrandomSongNoCommas.length; i++) {
		answerArray[i] = "_";
		console.log(answerArray);
		//var newAnswerArray = answerArray.join(" ");
	}
	//console.log(newAnswerArray);

var remainingLetters = arrayrandomSong.length; //Number of letters remaining that need to be guessed

var guess = event.key; //Define a variable to capture the user's guess



//Start the game when user presses START
document.getElementById("startButton").addEventListener("click", function() {
			//Ask the user's name
			var name = prompt("Hi there, what's your name?");
			//Greet the user and give instructions
			alert("Hi " + name);
			alert("Can you guess the name of the JAY Z song?");
			alert("To guess a letter, simply press that letter on the keyboard");
			alert("Good luck!"); 

			//Write blanks to the document
			//document.getElementById("blanks").innerHTML = newAnswerArray;
			document.getElementById("blanks").innerHTML = answerArray.join(" ");

			//This code captures the keypress and prints it out on the screen
			document.onkeypress = function(keyPressed) {
  				var keyPressed = keyPressed || window.event,
    				charCode = keyPressed.keyCode || keyPressed.which,
   					lettersGuessed = String.fromCharCode(charCode);
			}

			//Get a user's guess
			//document.onkeypress = function(event) {
			//	var guess = event.key;

			for (i = 0; i < arrayrandomSong; i++) {

					if (guess == arrayrandomSong[i]) {
						guess == answerArray[i];
						guess == lettersGuessed[i];
						remainingLetters --;
						document.getElementById("blanks").innerHTML = answerArray.join(" ");
						document.getElementById("lettersRemaining").innerHTML = "Number of reamaining letters: " +remainingLetters;
					}

					//else (guess !== arrayrandomSong[i]) {
					//	alert("Wrong letter!"); //alert the user that the letter is wrong
					//	guess == lettersGuessed[i]; //add the letter to array of guessed letters
					//	NumberofGuesses --; //decrease the number of guesses the user has left
					//}

					document.getElementById("guessed").innerHTML = "Letters Guessed: " + lettersGuessed.join(" ");
			}

			//	}



			//for (i = 0; i < arrayrandomSong.length; i++) {
			//	if (guess == arrayrandomSong[i]) { //check to see if the user's guess matches any elements in the array of the random song
			//		guess == answerArray[i];        //add the user's guess to the answer array
			//		remainingLetters --;           //decrease the number of remaining letters by 1
			//		document.getElementById("blanks").innerHTML = answerArray.join(" ");
			//		document.getElementById("lettersRemaining").innerHTML = "Number of remaining letters: " + remainingLetters;
			//}
			//}


});

}