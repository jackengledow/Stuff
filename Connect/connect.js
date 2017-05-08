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

String.prototype.capitalize = function() {
   return this.charAt(0).toUpperCase() + this.slice(1);
}
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
      clickCount++;
      check();
   });
   var check = function(){
      var color = $("#" + id).attr('name');
      // Column/Row One
      if($("#11").attr("name") == color && $("#21").attr("name") == color && $("#31").attr("name") == color && $("#41").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#51").attr("name") == color && $("#21").attr("name") == color && $("#31").attr("name") == color && $("#41").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#51").attr("name") == color && $("#61").attr("name") == color && $("#31").attr("name") == color && $("#41").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#51").attr("name") == color && $("#61").attr("name") == color && $("#71").attr("name") == color && $("#41").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#11").attr("name") == color && $("#12").attr("name") == color && $("#13").attr("name") == color && $("#14").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#12").attr("name") == color && $("#13").attr("name") == color && $("#14").attr("name") == color && $("#15").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#13").attr("name") == color && $("#14").attr("name") == color && $("#15").attr("name") == color && $("#16").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      //Column/Row Two
      if($("#12").attr("name") == color && $("#22").attr("name") == color && $("#32").attr("name") == color && $("#42").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#52").attr("name") == color && $("#22").attr("name") == color && $("#32").attr("name") == color && $("#42").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#52").attr("name") == color && $("#62").attr("name") == color && $("#32").attr("name") == color && $("#42").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#52").attr("name") == color && $("#62").attr("name") == color && $("#72").attr("name") == color && $("#42").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#21").attr("name") == color && $("#22").attr("name") == color && $("#23").attr("name") == color && $("#24").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#22").attr("name") == color && $("#23").attr("name") == color && $("#24").attr("name") == color && $("#25").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#23").attr("name") == color && $("#24").attr("name") == color && $("#25").attr("name") == color && $("#26").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      //Column/Row 3
      if($("#13").attr("name") == color && $("#23").attr("name") == color && $("#33").attr("name") == color && $("#43").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#53").attr("name") == color && $("#23").attr("name") == color && $("#33").attr("name") == color && $("#43").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#53").attr("name") == color && $("#63").attr("name") == color && $("#33").attr("name") == color && $("#43").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#53").attr("name") == color && $("#63").attr("name") == color && $("#73").attr("name") == color && $("#43").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#31").attr("name") == color && $("#32").attr("name") == color && $("#33").attr("name") == color && $("#34").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#32").attr("name") == color && $("#33").attr("name") == color && $("#34").attr("name") == color && $("#35").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#33").attr("name") == color && $("#34").attr("name") == color && $("#35").attr("name") == color && $("#36").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      //Column/Row 4
      if($("#14").attr("name") == color && $("#24").attr("name") == color && $("#34").attr("name") == color && $("#44").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#54").attr("name") == color && $("#24").attr("name") == color && $("#34").attr("name") == color && $("#44").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#54").attr("name") == color && $("#64").attr("name") == color && $("#34").attr("name") == color && $("#44").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#54").attr("name") == color && $("#64").attr("name") == color && $("#74").attr("name") == color && $("#44").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#41").attr("name") == color && $("#42").attr("name") == color && $("#43").attr("name") == color && $("#44").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#42").attr("name") == color && $("#43").attr("name") == color && $("#44").attr("name") == color && $("#45").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#43").attr("name") == color && $("#44").attr("name") == color && $("#45").attr("name") == color && $("#46").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      //Column/Row 5
      if($("#15").attr("name") == color && $("#25").attr("name") == color && $("#35").attr("name") == color && $("#45").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#55").attr("name") == color && $("#25").attr("name") == color && $("#35").attr("name") == color && $("#45").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#55").attr("name") == color && $("#65").attr("name") == color && $("#35").attr("name") == color && $("#45").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#55").attr("name") == color && $("#65").attr("name") == color && $("#75").attr("name") == color && $("#45").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#51").attr("name") == color && $("#52").attr("name") == color && $("#53").attr("name") == color && $("#54").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#52").attr("name") == color && $("#53").attr("name") == color && $("#54").attr("name") == color && $("#55").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#53").attr("name") == color && $("#54").attr("name") == color && $("#55").attr("name") == color && $("#56").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      //Column/Row 6
      if($("#16").attr("name") == color && $("#26").attr("name") == color && $("#36").attr("name") == color && $("#46").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#56").attr("name") == color && $("#26").attr("name") == color && $("#36").attr("name") == color && $("#46").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#56").attr("name") == color && $("#66").attr("name") == color && $("#36").attr("name") == color && $("#46").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#56").attr("name") == color && $("#66").attr("name") == color && $("#76").attr("name") == color && $("#46").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#61").attr("name") == color && $("#62").attr("name") == color && $("#63").attr("name") == color && $("#64").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#62").attr("name") == color && $("#63").attr("name") == color && $("#64").attr("name") == color && $("#65").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#63").attr("name") == color && $("#64").attr("name") == color && $("#65").attr("name") == color && $("#66").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      //Column 7
      if($("#71").attr("name") == color && $("#72").attr("name") == color && $("#73").attr("name") == color && $("#74").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#72").attr("name") == color && $("#73").attr("name") == color && $("#74").attr("name") == color && $("#75").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
      if($("#73").attr("name") == color && $("#74").attr("name") == color && $("#75").attr("name") == color && $("#76").attr("name") == color){
         alert(color.capitalize() + " player wins!");
      }
   };
});