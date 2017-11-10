window.onload = function() {

	//Global variables
	var name //user's name
	var songs = ["clique", "dirt off your shoulder", "drunk in love", "empire state of mind", "99 problems", "izzo", "bonnie and clyde"]; //Define an array of songs
	var guessesRemaining = 10; //number of guesses user has left
	var alreadyGuessed = []; // letters already guessed by the user

	//Start the game when user presses the START button
	//var body = document.querySelector("body");
	document.getElementById("startButton").onclick = function() {
	//document.body.onkeydown = function(e) {
		//if (e.keyCode == 32) {
		
			//Ask the user's name
			var name = prompt("Hi there, what's your name?");

			//Greet the user and give instructions
			alert("Hi " + name);
			alert("Can you guess the name of the JAY Z song?");
			alert("To guess, simply press the letter on the keyboard");
			alert("Good luck!"); 

			//Pick a random song to use in Hangman
			var randomSong = songs[Math.floor(Math.random() * songs.length)];
			console.log(randomSong);

			//Take random song and split up into individual letters
			var arrayrandomSong = randomSong.split("");
			console.log(arrayrandomSong);


			//Convert randomSong to a string???
			//var stringrandomSong = arrayRandomSong.toString();

			//Map split song to blanks
			var blankWord = []
			var blank = "___&nbsp;";
				for (i = 0; i < randomSong.length; i++) {
					blankWord.push(blank);

				}
				//return the blank word
				console.log(blankWord);
			//var arrayOfBlanks = arrayrandomSong.map(a=>' _ ');
			//var arrayOfBlanksNoCommas = arrayOfBlanks.join();
			//arrayOfBlanks.toString()replace(',','');
			//arrayOfBlanks.toString().replace(',',' '); 
			
			//Write blanks to the page
			//document.getElementById("blanks").innerHTML = arrayOfBlanks;
			document.getElementById("blanks").innerHTML = blankWord;

			//Capture the user's input
			//document.onkeyup = function(event) {
			//	var guess = event.key.toLowerCase();
			//	var isLetter = "";
			//	console.log(isLetter);

			//}

			//Define a function to check the letter guessed by the user
			//var guess;
			//function checkLetter() {
			//	document.onkeyup = function(event) {
			//		guess = event.key.toLowerCase();
			//		for (i = 0; i < arrayrandomSong.length; i++) {
			//			if (guess === arrayrandomSong[i] {
			//				arrayOfBlanks[i] = guess;
			//				document.getElementById("blanks")innerHTML = arrayOfBlanks.join(" ";)
			//			})
			//		}

			//	}

			//} 

		//}
		
		//else {
		//	alert("Wrong key! Press the spacebar to begin!");
		//}
		
		
	//}

	}

}