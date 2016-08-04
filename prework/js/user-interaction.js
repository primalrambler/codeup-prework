"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

var response = ""

while (response === "") {
	var response = prompt('What is your name?');
}

// TODO: Show an alert message that welcomes the user based on their input.

alert('Welcome ' + response + " to the future!");

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var pizzaResponse = prompt('Do you like pizza?');

switch (pizzaResponse) {
	case "Yes" :
	case "Y" :
	case "yes":
	case "y":
		alert('Great let\'s order some');
	break;

	case "No" :
	case "no" :
	case "N" :
	case "n" :
		alert('What? Are you serious?!');
	break;
	default :
		alert('I don\'t get what you\'re trying to tell me.');

}
