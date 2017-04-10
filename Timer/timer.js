var inspect = 15;
var space = 1;
var doops;
var interval;
var startTime = Date.now();

$(document).on("keypress", function(e){
	if (e.keyCode == 32){
		if(space % 2 == 0){
			e.preventDefault();
			clearInterval(doops);
			interval = setInterval(function() {
			var elapsedTime = Date.now() - startTime;
			document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);
			}, 100);
			space++;
		}
		else{
			space++;
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