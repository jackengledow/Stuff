var inspect = 15;
var space = 1;
var doops;
var interval;
var random;
var randomLength;
var scrambleArray = ["R", "R2", "R'", "L", "L2", "L'", "U", "U2", "U'", "B", "B2", "B'", "B", "D2", "D'", "F", "F2", "F'"];

$(document).on("keypress", function(e){
	if (e.keyCode == 32){
		if(space == 2){
			e.preventDefault();
			clearInterval(doops);
			var startTime = Date.now();
			interval = setInterval(function() {
			var elapsedTime = Date.now() - startTime;
			document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);
			}, 100);
			space = 3;
		}
		else if(space == 3){
			clearInterval(interval);
			space++;
			generateScramble();
		}
		else{
			space = 2;
			clearInterval(interval);
			e.preventDefault();
			inspect = 15;
			$("p").html(inspect);
			doops = setInterval(decrement, 1000);
		}
	}
});
var decrement = function(){
	inspect--;
	$("p").html(inspect);
}
var increment = function(){
	timeStart++;
	$("p").html(timeStart);
}
var getRandom = function(){
	random = Math.floor(Math.random() * 17);
}
var generateScramble(){
	getRandom();
	randomLength = Math.floor(Math.random() * 20);
	if (randomLength < 15){
		randomLength = 15;
	}	
}