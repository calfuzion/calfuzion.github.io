var bingo = ["I'm on the dole", "Got a smoke", "I'm banned from ... Venue", "want a smoke", "By us a jug", "want a top up", "I get paid on tuesdays", "can i have some of that", "I live at home", "I'm off guys", "don't be a dick", "Shots", "I feel safe at The horn", "Its the only bar i drink at", "The he is the legend", "Tiger Tower please"];
var replaceData = document.querySelectorAll('table tr td');
// console.log(bingo.length);

// bingo.forEach(function(item, index, array){
// 	// console.log(item, index);
// 	console.log(Math.random(index, item));
// });
function shuffle(bingo){
	// var currentValue = bingo.length, newValue, newIndex;
	
	// while(0 !== currentValue){
	// 	randomIndex = Math.floor(Math.random()* currentValue);
	// 	currentValue -= 1;
	// 	newValue = array[currentValue];
	// 	array[currentValue] = array[randomIndex];
	// 	array[randomIndex] = newValue;
var currentIndex = bingo.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
  var  temporaryValue = bingo[currentIndex];
    bingo[currentIndex] = bingo[randomIndex];
    bingo[randomIndex] = temporaryValue;

	}
	return bingo;
};

shuffle(bingo);
// console.log(bingo);
// console.log(replaceData.length);
// replaceData.innerHTML = bingo[0];

// bingo.forEach(function(item){
// 	replaceData.innerHTML = bingo;
// });
for(let i = 0; i < replaceData.length; ++i){
	replaceData[i].innerHTML = bingo[i];

};
