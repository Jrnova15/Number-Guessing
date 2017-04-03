// Sal DeMarco
// Write an application that plays the guessing game "Higher/Lower".
// The game is as follows: Your program chooses the number to be guessed
// by selecting a random integer in the range 1 to 1000. The user guesses the number.
// If the player's guess is incorrect, the user is told either "Too high" or "Too low".
// When the user enters the correct answer, the user is congratulated. The game tallies
// the number of guesses it takes the user to "find" the number. Classify the user's find as Brilliant
// (under 6 guesses), Average (under 12 guesses) and Needs Improvement otherwise.
// Author: Salvatore DeMarco, Jr.
// Date last modified: 18-March-2015

//Declare Global Varible
var num,
    answer,
    attempts = 0;

// prompt the user about the chances of getting a good score
alert("Try to guess the right number from 0 to 1000! \nTry to answer under 12 guesses to get a better outcome.");

// declare a varible to radom the numbers
answer = Math.floor(0 + Math.random() * 1000);

// declare varibles to a parseInt
num = parseInt(num);

function enterNum() {

	//User inputs the number
	num = document.guessing.input.value;
	document.getElementById("number").innerHTML = num;

	// if num is too high
	if (num > answer) {
		document.getElementById("result").innerHTML = "Too HIGH!";
		attempts++;
		document.getElementById("attempts").innerHTML = attempts;
		// make it low
	} else {
		document.getElementById("result").innerHTML = "Too LOW!";
		attempts++;
		document.getElementById("attempts").innerHTML = attempts;
	}
	// match under-equal 6
	if (num == answer && attempts <= 6) {
		alert("Correct!!! The hidden number was " + answer + ". Your attempts at guessing the right number was " + attempts + ". That makes you Brillant at guessing the right number.");
		location.reload();
		// match between 7 & 12
	} else if (num == answer && attempts <= 12 && attempts >= 7) {
		alert("Correct!!! The hidden number was " + answer + ". Your attempts of guessing the right number was " + attempts + ". That makes you Average at guessing the right number.");
		location.reload();
		//over 12
	} else if (num == answer && attempts > 12) {
		alert("Correct!!! The hidden number was " + answer + ". However, your attempt of guessing the number was " + attempts + ". That means you need improvement");
		location.reload();
	}
}

//close