<?php
   $time;
   function getDefault() {
      if(isset($POST_["time"])){
         $time = $POST_["time"];
      }
   }
   echo "submitted";
   echo "$time";
?>