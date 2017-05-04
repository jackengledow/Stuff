var clickCount = 0;
var columnObj = {
   "column1": 0,
   "column2": 0,
   "column3": 0,
   "column4": 0,
   "column5": 0,
   "column6": 0,
   "column7": 0
};
$(document).ready( function(){
   $("td").on("click", function(){
      var column = $(this).attr("class");
      var objKey = "column" + column;
      if(clickCount % 2 !== 0){
         switch(columnObj[objKey]){
            case 0:
               $("#" + column + "6").addClass("red");
               columnObj[objKey] = 1;
               break;
            case 1:
               $("#" + column + "5").addClass("red");
               columnObj[objKey] = 2;
               break;
            case 2:
               $("#" + column + "4").addClass("red");
               columnObj[objKey] = 3;
               break;
            case 3:
               $("#" + column + "3").addClass("red");
               columnObj[objKey] = 4;
               break;
            case 4:
               $("#" + column + "2").addClass("red");
               columnObj[objKey] = 5;
               break;
            case 5:
               $("#" + column + "1").addClass("red");
               columnObj[objKey] = 6;
               break;
            case 6:
               columnObj[objKey] = 7;
               break;
            default:
               console.log("sucks");
         }
      }
      else{
         switch(columnObj[objKey]){
            case 0:
               $("#" + column + "6").addClass("yellow");
               columnObj[objKey] = 1;
               break;
            case 1:
               $("#" + column + "5").addClass("yellow");
               columnObj[objKey] = 2;
               break;
            case 2:
               $("#" + column + "4").addClass("yellow");
               columnObj[objKey] = 3;
               break;
            case 3:
               $("#" + column + "3").addClass("yellow");
               columnObj[objKey] = 4;
               break;
            case 4:
               $("#" + column + "2").addClass("yellow");
               columnObj[objKey] = 5;
               break;
            case 5:
               $("#" + column + "1").addClass("yellow");
               columnObj[objKey] = 6;
               break;
            case 6:
               columnObj[objKey] = 7;
               break;
            default:
               console.log("sucks");
         }
      }
      clickCount++;
   });
});