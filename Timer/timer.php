<html>
   <head>
      <title>Cube Timer</title>
      <script src = "../jquery-3.0.0.min.js"></script>
      <link rel="stylesheet" href="http://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
      <script src="http://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
      <script src = "timer2.js"></script>
      <style>
         #scramble > input {
            display: inline-block;
         }
         #time-list > p{
            display: inline-block;
            margin-right: 8px;
         }
        span{
			font-weight: bold;
			font-size:  20px;
        }
        .ct-series-a .ct-line {
			stroke: red;
			stroke-width: 2px;
        }
		.ct-series-a .ct-point {
			stroke: red;
			stroke-width: 5px;
		}
        .ct-series-b .ct-line {
            stroke: blue;
            stroke-width: 2px;
        }
        .ct-series-c .ct-line {
            stroke: black;
            stroke-width: 2px;
        }
        .ct-series-d .ct-line {
            stroke: green;
            stroke-width: 2px;
        }
		button:focus {
			outline: none;
		}
      </style>
   </head>
   <body onload = "generateScramble()" id = "body">
      <form action = "submit.php" method = "post" id = "myForm">
   		<div style = "font-size: 20px;" id = "scramble">Scramble</div>
   		<div style = "width: 50%; height: 173px; font-size: 70px; display: inline-block; margin: 0px; vertical-align: top;"><p style = "vertical-align: middle" id = "timer">Ready?</p></div><input type = "number" style = "display: none" name = "time" id = "hiddenTime"/>
   		<div id = "time-list" style = "display: inline-block; text-align: right; overflow-y: auto; overflow-x: hidden; width: 40%; height: 173px;"></div>
   		<div id = "avg">
   		   <p id = "avgAll">Average: </p>
   		   <input type = "hidden" name = "time" id = "actualTime">
   		   <p id = "avg5">Average of 5: </p>
   		   <input type = "hidden" name = "avg5" id = "average5">
   		   <p id = "avg12">Average of 12: </p>
   		   <input type = "hidden" name = "avg12" id = "average12">
   		   <input type = "hidden" name = "avg100" id = "avg100">
   		   <input type = "hidden" name = "avg50" id = "avg50">
   		   <button id = "button">Delete Last Solve</button>
   		</div>
   	</form>
		<div id = "dataStuff" class = "ct-chart"></div>
   </body>
</html>