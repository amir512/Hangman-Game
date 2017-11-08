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
			var songs = ["Holy Grail", "Tom Ford", "Young Forever", "Empire State of Mind", "99 Problems", "I Just Wanna Love U", "On to the Next One"];

			//Define a random song to use in Hangman
			var randomSong = songs[Math.floor(Math.random() * songs.length)];

			//Take song and split up into individual letters
			var arrayrandomSong = randomSong.split("");

			//Convert randomSong to a string???
			//var stringrandomSong = arrayRandomSong.toString();

			//Map split song to blanks
			var arrayOfBlanks = arrayrandomSong.map(a=>' _ ');
			//arrayOfBlanks.toString()replace(',','');
			arrayOfBlanks.toString().replace(',',' ');
			
			//Write blanks to the page
			document.getElementById("blanks").innerHTML = arrayOfBlanks;

			//Capture the user's input
			//var guess = 

		}
		
		else {
			alert("Wrong key! Press the spacebar to begin!");
		}
		
		
	}

}