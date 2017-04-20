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
var yas;
var numSolves = [];
var avg5Array = [null, null, null, null];
var avg12Array = [null, null, null, null, null, null, null, null, null, null, null];
var body = document.getElementById("body");
var avgOverall = [null, null];
var booyah = $("body");

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
		yas = poods + 1;
        $("#time-list").append("<p id = " + yas + ">" + "<span>" + yas + "</span>: " + time + "</p>");
        poods++;
        numSolves.push(poods);
        if(poods != 5){
			avgAny(5);
        }
        if(poods != 12){
			avgAny(12);
        }
        avgAny(poods);
        var graphs = {
			labels: numSolves,
            series: [{
				name: "average",
				data: timeList
			},
               timeList,
               avgOverall,
               avg5Array,
               avg12Array
            ]
        };
         var options = {
            height: 300,
            lineSmooth: false,
			showPoint: false
         };
		 var chart = new Chartist.Line('.ct-chart', {
			  labels: numSolves,
			  series: [{
				name: 'time',
				data: timeList
			  }, {
				name: 'avgOverall',
				data: avgOverall
			  }, {
				name: 'avg5',
				data: avg5Array
			  }, {
				name: 'avg12',
				data: avg12Array
			  }]
			},
			{
			height: 300,
			series: {
				'time': {
					showPoint: true,
					lineSmooth: false
				},
				'avgOverall': {
					showPoint: false,
					lineSmooth: false
				},
				'avg5': {
					showPoint: false,
					lineSmooth: false
				},
				'avg12': {
					showPoint: false,
					lineSmooth: false
				}
			  }
			});
		 $("window").scrollTop(0);
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
$(document).ready(function(){
	$("#button").one("click", function(){
		console.log("ran");
		timeList.pop();
		avg5Array.pop();
		avg12Array.pop();
		avgOverall.pop();
		numSolves.pop();
		$("#" + yas).remove();
		if(poods !== 0){
			poods--;
		}
	 var chart = new Chartist.Line('.ct-chart', {
		  labels: numSolves,
		  series: [{
			name: 'time',
			data: timeList
		  }, {
			name: 'avgOverall',
			data: avgOverall
		  }, {
			name: 'avg5',
			data: avg5Array
		  }, {
			name: 'avg12',
			data: avg12Array
		  }]
		},
		{
		height: 300,
		series: {
			'time': {
				showPoint: true,
				lineSmooth: false
			},
			'avgOverall': {
				showPoint: false,
				lineSmooth: false
			},
			'avg5': {
				showPoint: false,
				lineSmooth: false
			},
			'avg12': {
				showPoint: false,
				lineSmooth: false
			}
		  }
		});
	});
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
//window.onscroll = function () {
	//window.scrollTo(0,0);
//}
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
   if(numSolves.length >= 3 && size == poods){
      $("#avgAll").html("Average: " + avg.toFixed(2));
      avgOverall.push(avg);
   }
   if(numSolves.length >= 5 && size == 5){
      $("#avg5").html("Average of 5: " + avg.toFixed(2));
      avg5Array.push(avg);
   }
   if(numSolves.length >= 12 && size == 12){
      $("#avg12").html("Average of 12: " + avg.toFixed(2));
      avg12Array.push(avg);
      console.log(avg12Array);
   }
   yaboy = document.getElementById("time-list");
   if(yaboy.scrollHeight - yaboy.clientHeight >= yaboy.scrollTop){
	   yaboy.scrollTop = yaboy.scrollHeight - yaboy.clientHeight;
   }
};