var inspect = 15;
var space = 1;
var doops;
var poods = 0;
var interval;
var random;
var timeList = [];
var randomLength;
var scrambleArray = ["R ", "R2", "R'", "L ", "L2", "L'", "U ", "U2", "U'", "B ", "B2", "B'", "D ", "D2", "D'", "F ", "F2", "F'"];
var scramble = [];
var yaboy;
var numSolves = [];
var avg5Array = [null, null, null, null];
var avg12Array = [null, null, null, null, null, null, null, null, null, null, null];
var body = document.getElementById("body");

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
         $("#time-list").append("<p id = " + poods + ">" + "<span>" + poods + "</span>: " + time + "</p>");
         avgAny(5);
         avgAny(12);
         generateScramble();
         var data = {
            labels: numSolves,
            series: [
               timeList,
               avg5Array,
               avg12Array
            ]
         };
         var options = {
            height: 300,
            lineSmooth: false
         }
         new Chartist.Line("#dataStuff", data, options);
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
};
var increment = function(){
	timeStart++;
	$("#timer").html(timeStart);
};
var generateScramble = function(){
   poods++;
   numSolves.push(poods);
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
};

var avgAny = function(size){
   var max = 0;
   var arr = [];
   var min = 100;
   var total = 0;
   if(timeList.length >= size){
      arr = timeList.slice(-size);
   }
   max = Math.max(...arr);
   min = Math.min.apply(Math, arr);
   for(i = 0; i < arr.length; i++){
      if(arr[i] != max && arr[i] != min){
         total = total + arr[i];
      }
   }
   var avg = total/(size - 2);
   if(size == 5){
      if (avg > 0){
         $("#avg5").html("Average of 5: " + avg.toFixed(2));
         avg5Array.push(avg);
      }
   }
   else if (size == 12){
      if (avg > 0){
         $("#avg12").html("Average of 12: " + avg.toFixed(2));
         avg12Array.push(avg);
      }
   }
   yaboy = document.getElementById("time-list");
   if(yaboy.scrollHeight - yaboy.clientHeight >= yaboy.scrollTop){
	   yaboy.scrollTop = yaboy.scrollHeight - yaboy.clientHeight;
   }
};