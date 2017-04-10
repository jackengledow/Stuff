var decider = 1;
var p1;
var p2;

var playerSet = function(){
  p1 = document.getElementById("p1").value;
  p2 = document.getElementById("p2").value;
  console.log(p1 + ", " + p2);
}
var change = function(x){
	if (decider % 2 == 1){
		$(x).css("backgroundImage", 'url("xv2.jpg")');
	}
	else{
		$(x).css("backgroundImage", 'url("o.jpg")');
	}
	decider++;
}