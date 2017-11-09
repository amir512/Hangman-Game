window.onload = function() {

	//Start the game when user presses the spacebar
	var body = document.querySelector("body");

	document.body.onkeydown = function(e) {
		if (e.keyCode == 32) {
		
			//Ask the user's name
			var name = prompt("Hi there, what's your name?");

			//Greet the user
			alert("Hi " + name);
			alert("Can you guess the name of the JAY Z song?");
			alert("To guess, simply press the letter on the keyboard");
			alert("Good luck!"); 

			//Define an array of songs
			var songs = ["holy grail", "tom ford", "young forever", "empire state of mind", "99 problems", "i just wanna love u", "on to the next one"];

			//Pick a random song to use in Hangman
			var randomSong = songs[Math.floor(Math.random() * songs.length)];

			//Take random song and split up into individual letters
			var arrayrandomSong = randomSong.split("");

			//Convert randomSong to a string???
			//var stringrandomSong = arrayRandomSong.toString();

			//Map split song to blanks
			var arrayOfBlanks = arrayrandomSong.map(a=>' _ ');
			//var arrayOfBlanksNoCommas = arrayOfBlanks.join();
			//arrayOfBlanks.toString()replace(',','');
			//arrayOfBlanks.toString().replace(',',' '); 
			
			//Write blanks to the page
			document.getElementById("blanks").innerHTML = arrayOfBlanks;

			//Capture the user's input
			//var guess =

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

		}
		
		else {
			alert("Wrong key! Press the spacebar to begin!");
		}
		
		
	}

}