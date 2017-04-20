<html>
   <head>
      <title>Cube Timer</title>
      <script src = "../jquery-3.0.0.min.js"></script>
      <link rel="stylesheet" href="http://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
      <script src="http://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
      <script src = "timer.js"></script>
      <style>
         #scramble > p {
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
		<div style = "font-size: 20px;" id = "scramble">Scramble</div>
		<div style = "width: 50%; height: 173px; font-size: 70px; display: inline-block; margin: 0px; vertical-align: top;"><p style = "vertical-align: middle" id = "timer">Ready?</p></div>
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
		<div id = "dataStuff" class = "ct-chart"></div>
		<!--<?php
		       $servername = "localhost";
		       $username = "username";
		       $password = "password";
		       $dbName = "times";
		       $time = int("32");
		       echo $time;
		       $conn = new mysqli($servername, $username, $password, $dbname);
		       if ($conn->connect_error){
		            die("connection failed: " . $conn->error);
		       }

		       $query = "INSERT INTO 3x3 (time, avg5, avg12, avg50, avg100, scramble) VALUES ($time, $avg5, $avg12, $avg50, $avg100)";
		       $conn->query($conn);
		       $conn->close();
          ?>-->
   </body>
</html>