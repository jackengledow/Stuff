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
var id;

$(document).ready( function(){
   $("td").on("click", function(){
      var column = $(this).attr("class");
      var objKey = "column" + column;
      if(clickCount % 2 !== 0){
         switch(columnObj[objKey]){
            case 0:
               $("#" + column + "6").addClass("red").attr("name", "red");
               columnObj[objKey] = 1;
               id = column + "6";
               break;
            case 1:
               $("#" + column + "5").addClass("red").attr("name", "red");
               columnObj[objKey] = 2;
               id = column + "5";
               break;
            case 2:
               $("#" + column + "4").addClass("red").attr("name", "red");
               columnObj[objKey] = 3;
               id = column + "4";
               break;
            case 3:
               $("#" + column + "3").addClass("red").attr("name", "red");
               columnObj[objKey] = 4;
               id = column + "3";
               break;
            case 4:
               $("#" + column + "2").addClass("red").attr("name", "red");
               columnObj[objKey] = 5;
               id = column + "2";
               break;
            case 5:
               $("#" + column + "1").addClass("red").attr("name", "red");
               columnObj[objKey] = 6;
               id = column + "1";
               break;
            case 6:
               columnObj[objKey] = 7;
               break;
            default:
               console.log("SUCKS");
         }
      }
      else {
         switch(columnObj[objKey]){
            case 0:
               $("#" + column + "6").addClass("yellow").attr("name", "yellow");
               columnObj[objKey] = 1;
               id = column + "6";
               break;
            case 1:
               $("#" + column + "5").addClass("yellow").attr("name", "yellow");
               columnObj[objKey] = 2;
               id = column + "5";
               break;
            case 2:
               $("#" + column + "4").addClass("yellow").attr("name", "yellow");
               columnObj[objKey] = 3;
               id = column + "4";
               break;
            case 3:
               $("#" + column + "3").addClass("yellow").attr("name", "yellow");
               columnObj[objKey] = 4;
               id = column + "3";
               break;
            case 4:
               $("#" + column + "2").addClass("yellow").attr("name", "yellow");
               columnObj[objKey] = 5;
               id = column + "2";
               break;
            case 5:
               $("#" + column + "1").addClass("yellow").attr("name", "yellow");
               columnObj[objKey] = 6;
               id = column + "1";
               break;
            case 6:
               columnObj[objKey] = 7;
               break;
            default:
               console.log("sucks");
         }
      }
      check();
      clickCount++;
   });
   var check = function(){
      var color = $("#" + id).attr('name');
      switch(parseInt(id)){
         case 11:
            break;
         case 12:
            break;
         case 13:
            break;
         case 14:
            break;
         case 15:
            break;
         case 16:
            break;
         case 21:
            break;
         case 22:
            break;
         case 23:
            break;
         case 24:
            break;
         case 25:
            break;
         case 36:
            break;
         case 31:
            break;
         case 32:
            break;
         case 33:
            break;
         case 34:
            break;
         case 35:
            break;
         case 36:
            break;
         case 41:
            break;
         case 42:
            break;
         case 43:
            break;
         case 44:
            break;
         case 45:
            break;
         case 46:
            break;
         case 51:
            break;
         case 52:
            break;
         case 53:
            break;
         case 54:
            break;
         case 55:
            break;
         case 56:
            break;
         case 61:
            break;
         case 62:
            break;
         case 63:
            break;
         case 64:
            break;
         case 65:
            break;
         case 66:
            break;
         case 71:
            break;
         case 72:
            break;
         case 73:
            break;
         case 74:
            break;
         case 75:
            break;
         case 76:
            break;
         default:
            console.log("sucks");
      }
   }
});