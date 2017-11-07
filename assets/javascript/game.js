//Start the game when user presses the spacebar
document.onkeydown = function() {

//Define an array of songs of songs
var songs = ["Holy Grail", "Tom Ford", "Young Forever", "Empire State of Mind", "99 Problems", "I Just Wanna Love U", "On to the Next One"];

//Define a random song to use in Hangman
var randomSong = songs[Math.floor(Math.random() * songs.length)];

//Take song and split up into individual letters
var arrayrandomSong = randomSong.split("");

//Map split song to blanks
var arrayOfBlanks = arrayrandomSong.map(a=>'_ ');


//Write blanks to the page
document.getElementById("blanks").innerHTML = arrayOfBlanks;

};