var inspect = 15;
var space = 1;
var doops;
var poods = 0;
var interval;
var random;
var timeList = [];
var randomLength;
var scrambleArray = ["R ", "R2", "R'", "L ", "L2", "L'", "U ", "U2", "U'", "B ", "B2", "B'", "D ", "D2", "D'", "F ", "F2", "F'"];
var scramble =[];
var arr = [];

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
			$("#scramble").empty();
         var time = Number(document.getElementById("timer").innerHTML);
         timeList.push(time);
         $("#time-list").append("<p>" + poods + ": " + time + "</p>");
         avg5();
         generateScramble();
		}
		else{
			space = 2;
			clearInterval(interval);
			e.preventDefault();
			inspect = 15;
			$("#timer").html(inspect);
			doops = setInterval(decrement, 1000);
		}
	}
});
var decrement = function(){
	inspect--;
	if (inspect < 0 && inspect >= -2){
	   $("#timer").html("+2");
	}
	else if(inspect < -2){
	   $("#timer").html("DNF");
	}
	else{
	   $("#timer").html(inspect);
	}
}
var increment = function(){
	timeStart++;
	$("#timer").html(timeStart);
}
var generateScramble = function(){
   poods++;
   var final;
   scramble = [];
   var yus = 0;
	randomLength = Math.floor(Math.random() * 30);
	if (randomLength < 20){
		randomLength = 20;
	}
	while(yus <= randomLength){
	   random = Math.floor(Math.random() * 16);
	   scramble.push(scrambleArray[random]);
	   if (yus > 0){
	      if(scramble[yus][0] == scramble[yus - 1][0]){
	         var random2 = Math.floor(Math.random() * 16);
	         if (scrambleArray[random][0] != scrambleArray[random2][0]){
	            scramble[yus] = scrambleArray[random2];
	         }
	         else{
	            if(random2 > 13){
	               scramble[yus] = scrambleArray[random2 - 4];
	            }
	            else{
	               scramble[yus] = scrambleArray[random2 + 4];
	            }
	         }
	      }
	   }
	   final = scramble.join(" ");
	   yus++;
	}
	$("#scramble").html(final);
}

var avg5 = function(){
   var max = 0;
   var min = 100;
   var total = 0;
   if(timeList.length > 4){
      arr = timeList.slice(-5);
   }
   max = Math.max(...arr);
   min = Math.min.apply(Math, arr);
   for(i = 0; i < arr.length; i++){
      if(arr[i] != max && arr[i] != min){
         total = total + arr[i];
      }
   }
   console.log(total);
   var avg5 = total/3;
   if (avg5 > 0){
      $("#avg5").html(avg5.toFixed(2));
   }
}