$(document).ready(function(){
   $(document).keypress(function (e) {
      if (e.keyCode == 32) {
         e.preventDefault()
         console.log('Space pressed');
         }
      else{
         console.log("fail");
      }
   });
});