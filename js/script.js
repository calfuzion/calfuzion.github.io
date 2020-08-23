// Defining Responses
var responses = ["Your Future doesn't look to bright", "The Sky gods say its possible", "Try again Later", "Meow Meow... I'm a cat", "Yes I can confirm", "Are you really Taking advice from a magic 8 ball", "Your question is important to us please take a number and we will be with you shortly","Sorry your shit out of luck", "You're not alone on this one", "Fuck it go for it whats the worst that could happen"];
// Generating a random response from the array
function randomize(responses){
	var originalIndex = responses.length, NewIndex, randomIndex;
	// For number in array with out a randomised new index value 
	while(0 !== originalIndex){
		// Calcuates a new index number for item in array
		randomIndex = Math.floor(Math.random() * originalIndex);
		// Removes 1 value from responses.length
		originalIndex -= 1;
		var tempValue = responses[originalIndex];
		responses[originalIndex] = responses[randomIndex];
		responses[randomIndex] = tempValue;
	}
	// Returns new array with  new indexes;
	return responses
	
};
randomize(responses);

// appending response to html;
document.getElementById("output").innerHTML = responses[1];