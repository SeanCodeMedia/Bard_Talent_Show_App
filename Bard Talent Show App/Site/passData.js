// JavaScript Document

// written by sean peart 

var JsonTable = []

var insertActor1 = false;
var insertActor2 = false;
var insertActor3 = false;
var insertActor4 = false;
var insertActor5 = false;
var insertActor6 = false;
var insertActor7 = false;
var insertActor8 = false;
var insertActor9 = false;
var insertActor10 = false;
var insertActor11 = false;

// not mine 
function findIndexOfGreatest(array) {
  var greatest;
  var indexOfGreatest;
  for (var i = 0; i < array.length; i++) {
    if (!greatest || array[i] > greatest) {
      greatest = array[i];
      indexOfGreatest = i;
    }
  }
  return indexOfGreatest;
}
///not my function 

 Array.max = function(array){
  return Math.max.apply( Math, array )
}


function pullData () {
	
	$.get("index.php",
  {
	  //no info need to be sent here
	},
		
  function (data01)
{
			
	JsonTable = jQuery.parseJSON(data01); 
	$("#text1").html(JsonTable.Actors1[1])
	$("#text2").html(JsonTable.Actors2[1])
	$("#text3").html(JsonTable.Actors3[1])
	$("#text4").html(JsonTable.Actors4[1])
	$("#text5").html(JsonTable.Actors5[1])
	$("#text6").html(JsonTable.Actors6[1])
	$("#text7").html(JsonTable.Actors7[1])
	$("#text8").html(JsonTable.Actors8[1])
	$("#text9").html(JsonTable.Actors9[1])
	$("#text10").html(JsonTable.Actors10[1])
	$("#text12").html(JsonTable.Actors11[1])
	 
	 // grabing informaton for the vote display section with then names ect.... 
	
	/// determine the largest and smallest numbers in array./ //
	
	
    var winnerable = [
	
	JsonTable.Actors1[4],
	JsonTable.Actors2[4],
	JsonTable.Actors3[4],
	JsonTable.Actors4[4],
	JsonTable.Actors5[4],
	JsonTable.Actors6[4],
	JsonTable.Actors7[4],
	JsonTable.Actors8[4],
	JsonTable.Actors9[4],
	JsonTable.Actors10[4],
	JsonTable.Actors11[4]
     
	]



//var  storeWinner = Array.max(winnerable)

var loopCount;



 for  ( loopCount = 1; loopCount <= 11; loopCount++ ) {
	
	 console.log (loopCount)
	 
 var  storeWinner = Array.max(winnerable)
 

 console.log ("max index is "+ findIndexOfGreatest (winnerable) )
 console.log ("max value  is "+storeWinner )
 
 var  maxindex = findIndexOfGreatest (winnerable) 


 if ( parseInt (JsonTable.Actors1[4]) ==  storeWinner && insertActor1 == false ) {
		   
	 console.log ("winner is " + JsonTable.Actors1[1])
	 

	 console.log (winnerable);
	 	
		
	 winnerable.splice (maxindex,1);
	 
	 
 //loopCount =  loopCount +1 ; 
	 console.log (loopCount)
	 
	 
	 console.log (winnerable);
	 
	
	
	if (loopCount == 1 && insertActor1 == false ){
		 
		 $("#textOut01").html("1st "+JsonTable.Actors1[1]+ " -votes - " + JsonTable.Actors1[4])
		 
		 insertActor1 = true
		 
      }
	 
	
	else if (loopCount == 2 && insertActor1 == false ){
		 
		 $("#textOut02").html("2rd "+JsonTable.Actors1[1]+ " - votes - " + JsonTable.Actors1[4])
		 
		 insertActor1 = true 
	
		 
		 }
	 
	else if (loopCount == 3 && insertActor1 == false ){
		 
		 $("#textOut03").html("3rd "+JsonTable.Actors1[1]+ " - votes - " + JsonTable.Actors1[4])
		 
		 insertActor1 = true 
		 
		 }
		 
	 else  if (loopCount == 4 && insertActor1 == false ){
		 
		 $("#textOut04").html("4th "+JsonTable.Actors1[1] + " - votes - " + JsonTable.Actors1[4])
		 
		  insertActor1 = true 
		 
		 
		 }
		 
		else if (loopCount == 5  && insertActor1 == false ){
		 
		 $("#textOut05").html("5th "+JsonTable.Actors1[1]+ " - votes - " + JsonTable.Actors1[4])
		 
		 insertActor1 = true 
		 
		 }
		 
		else if (loopCount == 6 && insertActor1 == false ){
		 
		 $("#textOut06").html("6th "+JsonTable.Actors1[1]+ " - votes - " + JsonTable.Actors1[4])
		 
		  insertActor1 = true 
		 
		 }
		 
		 else if (loopCount == 7  && insertActor1 == false){
		 
		 $("#textOut07").html("7th "+JsonTable.Actors1[1]+ " - votes - " + JsonTable.Actors1[4])
		 
		 insertActor1 = true 
		 
		 }
		 
		 else if (loopCount == 8 && insertActor1 == false ){
		 
		 $("#textOut08").html("8th "+JsonTable.Actors1[1]+ " - votes - " + JsonTable.Actors1[4])
		 
		 insertActor1 = true 
		 
		 }
		 
		  else if (loopCount == 9 && insertActor1 == false  ){
		 
		 $("#textOut09").html("9th "+JsonTable.Actors1[1]+ "- votes - " + JsonTable.Actors1[4])
		 
		 insertActor1 = true 
		 
		 
		 }
		 
		 else  if (loopCount == 10 && insertActor1 == false ){
		 
		 $("#textOut10").html("10th "+JsonTable.Actors1[1]+ " - votes - " + JsonTable.Actors1[4])
		 
		  insertActor1 = true 
		 
		 }
		 
		  else  if (loopCount == 11 && insertActor1 == false ){
		 
		 $("#textOut11").html("11th "+JsonTable.Actors1[1]+ " - votes - " + JsonTable.Actors1[4])
		 
		  insertActor1 = true 
		 
		 }
	
	
	 // check if winner if true then cut your self from array// also loop through ten times *10
		   
	  }
		   
  else if ( parseInt (JsonTable.Actors2[4]) ==  storeWinner && insertActor2 == false) {
		   
	 console.log ( "winner is " + JsonTable.Actors2[1])
	
	
	console.log (winnerable);
	 
	winnerable.splice (maxindex,1); 
	
	 
	 console.log (winnerable);
	 
	// 	 loopCount =  loopCount +1 ; 
	 console.log (loopCount)
	 
	 
	 if (loopCount == 1 && insertActor2 == false ){
		 
		 $("#textOut01").html("1st "+JsonTable.Actors2[1]+ " - votes - " + JsonTable.Actors2[4])
		 
		 insertActor2 = true;
		 
		 
      }
	 
	
	else if (loopCount == 2 && insertActor2 == false ){
		 
		 $("#textOut02").html("2rd "+JsonTable.Actors2[1]+ " - votes - " + JsonTable.Actors2[4])
		 
		 insertActor2 = true; 
		 
		 
		 }
	 
	 else if (loopCount == 3 && insertActor2 == false ){
		 
		 $("#textOut03").html("3rd "+JsonTable.Actors2[1] + " - votes - " + JsonTable.Actors2[4])
		 
		  insertActor2 = true; 
		 
		 }
		 
	   else if (loopCount == 4 && insertActor2 == false ){
		 
		 $("#textOut04").html("4th "+JsonTable.Actors2[1]+ " - votes - " + JsonTable.Actors2[4])
		 
		 insertActor2 = true;
		 
		 }
		 
		 else if (loopCount == 5 && insertActor2 == false  ){
		 
		 $("#textOut05").html("5th "+JsonTable.Actors2[1]+ " - votes - " + JsonTable.Actors2[4])
		 
		 insertActor2 = true;
		 
		 
		 }
		 
		else  if (loopCount == 6 && insertActor2 == false  ){
		 
		 $("#textOut06").html("6th "+JsonTable.Actors2[1]+ " - votes - " + JsonTable.Actors2[4])
		 
		 
		 insertActor2 = true;
		 
		 }
		 
		  else if (loopCount == 7 && insertActor2 == false ){
		 
		 $("#textOut07").html("7th "+JsonTable.Actors2[1]+ " - votes - " + JsonTable.Actors2[4])
		 
		 insertActor2 = true;
		 
		 
		 }
		 
		 else if (loopCount == 8 && insertActor2 == false ){
		 
		 $("#textOut08").html("8th "+JsonTable.Actors2[1]+ " - votes - " + JsonTable.Actors2[4])
		 
		   	 insertActor2 = true;
		  
		 }
		 
		  else if (loopCount == 9  && insertActor2 == false ){
		 
		 $("#textOut09").html("9th "+JsonTable.Actors2[1]+ " - votes - " + JsonTable.Actors2[4])	
		 
		   insertActor2 == true;
		 
		 
		 }
		 
		 else  if (loopCount == 10 && insertActor2 == false ){
		 
		 $("#textOut10").html("10th "+JsonTable.Actors2[1]+ " - votes - " + JsonTable.Actors2[4])
		 
		 insertActor2 == true;
		 
		 
		 }
		 
		 else  if (loopCount == 11 && insertActor2 == false ){
		 
		 $("#textOut11").html("10th "+JsonTable.Actors2[1]+ " - votes - " + JsonTable.Actors2[4])
		 
		 insertActor2 == true;
		 
		 
		 }
	 
	 
		 }		
		 

else if ( parseInt (JsonTable.Actors3[4]) ==  storeWinner && insertActor3 == false) {
		   
	 console.log ("winner is " + JsonTable.Actors3[1])
	 
	 console.log (winnerable);
	 
	winnerable.splice (maxindex,1); 
	
	
	 
	 console.log (winnerable);
	 
	 //	 loopCount =  loopCount +1 ; 
	 console.log (loopCount)
	 
	 
	 if (loopCount == 1 && insertActor3 == false){
		 
		 $("#textOut01").html("1st "+JsonTable.Actors3[1]+ " - votes - " + JsonTable.Actors3[4])
		 
		 insertActor3 = true
		 
		 
      }
	 
	
	else if (loopCount == 2 && insertActor3 == false ){
		 
		 $("#textOut02").html("2rd "+JsonTable.Actors3[1]+ " - votes - " + JsonTable.Actors3[4])
		    
			insertActor3 =  true 
		   
		 }
	 
	  else if (loopCount == 3 && insertActor3 == false){
		 
		 $("#textOut03").html("3rd "+JsonTable.Actors3[1]+ " - votes - " + JsonTable.Actors3[4])
		 
		 insertActor3 = true;
		 
		 
		 }
		 
	else if (loopCount == 4 && insertActor3 == false){
		 
		 $("#textOut04").html("4th "+JsonTable.Actors3[1]+ " - votes - " + JsonTable.Actors3[4])
		   
		    insertActor3 = true;
		 
		 }
		 
		else if (loopCount == 5 && insertActor3 == false ){
		 
		 $("#textOut05").html("5th "+JsonTable.Actors3[1]+ " - votes - " + JsonTable.Actors3[4])
		  
		  insertActor3 = true;
		 
		 }
		 
		 else if (loopCount == 6 && insertActor3 == false ){
		 
		 $("#textOut06").html("6th "+JsonTable.Actors3[1]+ " - votes - " + JsonTable.Actors3[4])
		  
		  insertActor3 = true;
		 
		 }
		 
		  else if (loopCount == 7  && insertActor3 == false){
		 
		 $("#textOut07").html("7th "+JsonTable.Actors3[1]+ " - votes - " + JsonTable.Actors3[4])
		   
		   insertActor3 = true;
		 
		 }
		 
		 else if (loopCount == 8 && insertActor3 == false ){
		 
		 $("#textOut08").html("8th "+JsonTable.Actors3[1]+ " - votes - " + JsonTable.Actors3[4])
		   
		   insertActor3 = true;
		 
		 }
		 
		else if (loopCount == 9 && insertActor3 == false ){
		 
		 $("#textOut09").html("9th "+JsonTable.Actors3[1]+ " - votes - " + JsonTable.Actors3[4])
		   
		   insertActor3 = true;
		 
		 }
		 
		  if (loopCount == 10 && insertActor3 == false){
		 
		 $("#textOut10").html("10th "+JsonTable.Actors3[1]+ " - votes - " + JsonTable.Actors3[4])
		 	 
			 insertActor3 = true;
		   
		 }
		 
		 if (loopCount == 11 && insertActor3 == false){
		 
		 $("#textOut11").html("11th "+JsonTable.Actors3[1]+ " - votes - " + JsonTable.Actors3[4])
		 	 
			 insertActor3 = true;
		   
		 }
	  
	
	  }
		   
 else if ( parseInt (JsonTable.Actors4[4]) ==  storeWinner && insertActor4 == false) {
		   
	 console.log ( "winner is " + JsonTable.Actors4[1]+ " - votes - " + JsonTable.Actors4[4])
	 
	 
	  console.log (winnerable);
	 
	winnerable.splice (maxindex,1);
	
	
	 console.log (winnerable);
	 
	 	// loopCount =  loopCount +1 ; 
	 console.log (loopCount)
	 
	 if (loopCount == 1 && insertActor4 == false){
		 
		 $("#textOut01").html("1st "+JsonTable.Actors4[1]+ " - votes - " + JsonTable.Actors4[4])
		   
		   insertActor4 = true;
		 
      }
	 
	
	else if (loopCount == 2  && insertActor4 == false ){
		 
		 $("#textOut02").html("2rd "+JsonTable.Actors4[1]+ " - votes - " + JsonTable.Actors4[4])
		  
		   insertActor4 = true;
		   
		 }
	 
	   else if (loopCount == 3 && insertActor4 == false ){
		 
		 $("#textOut03").html("3rd "+JsonTable.Actors4[1]+ " - votes - " + JsonTable.Actors4[4])
		   
		    insertActor4 = true;
		 
		 }
		 
	  else if (loopCount == 4 && insertActor4 == false ){
		 
		 $("#textOut04").html("4th "+JsonTable.Actors4[1]+ " - votes - " + JsonTable.Actors4[4])
		  
		  insertActor4 = true;
		 
		 }
		 
		else if (loopCount == 5 && insertActor4 == false ){
		 
		 $("#textOut05").html("5th "+JsonTable.Actors4[1]+ " - votes - " + JsonTable.Actors4[4])
		  
		  insertActor4 = true;
		  
		 }
		 
		  else if (loopCount == 6 && insertActor4 == false ){
		 
		 $("#textOut06").html("6th "+JsonTable.Actors4[1]+ " - votes - " + JsonTable.Actors4[4])
		 
		 insertActor4 = true;
		 
		 
		 }
		 
		 else  if (loopCount == 7 && insertActor4 == false ){
		 
		 $("#textOut07").html("7th "+JsonTable.Actors4[1]+ " - votes - " + JsonTable.Actors4[4])
		  
		  insertActor4 = true;
		 
		 }
		 
		  else if (loopCount == 8  && insertActor4 == false ){
		 
		 $("#textOut08").html("8th "+JsonTable.Actors4[1]+ " - votes - " + JsonTable.Actors4[4])
		 
		  insertActor4 = true;
		 
		 }
		 
		else if (loopCount == 9  && insertActor4 == false ){
		 
		 $("#textOut09").html("9th "+JsonTable.Actors4[1]+ " - votes - " + JsonTable.Actors4[4])
		  
		  insertActor4 = true;
		 
		 }
		 
		  else if (loopCount == 10  && insertActor4 == false ){
		 
		 $("#textOut10").html("10th "+JsonTable.Actors4[1]+ " - votes - " + JsonTable.Actors4[4])
		 
		 insertActor4 = true;
		 
		 
		 }
		 
		else if (loopCount == 11  && insertActor4 == false ){
		 
		 $("#textOut11").html("10th "+JsonTable.Actors4[1]+ " - votes - " + JsonTable.Actors4[4])
		 
		 insertActor4 = true;
		 
		 
		 }


		 }	
		 
else if ( parseInt (JsonTable.Actors5[4]) ==  storeWinner && insertActor5 == false ) {
		   
	 console.log ("winner is " + JsonTable.Actors5[1]+ " - votes - " + JsonTable.Actors5[4])
	 
	
	 console.log (winnerable);
	 
	 winnerable.splice (maxindex,1); // not correct 
	
//	winnerable.delete[4]
	 
	 console.log (winnerable);
	 
	 	 //loopCount =  loopCount +1 ; 
	 console.log (loopCount)
	 
	 
	 if (loopCount == 1 && insertActor5 == false){
		 
		 $("#textOut01").html("1st "+JsonTable.Actors5[1]+ " - votes - " + JsonTable.Actors5[4])
		  
		  insertActor5 = true;
		 
      }
	 
	
	 else if (loopCount == 2 && insertActor5 == false ){
		 
		 $("#textOut02").html("2rd "+JsonTable.Actors5[1]+ " - votes - " + JsonTable.Actors5[4])
		  
		  insertActor5 = true;
		 
		 }
	 
	else if (loopCount == 3 && insertActor5 == false ){
		 
		 $("#textOut03").html("3rd "+JsonTable.Actors5[1]+ " - votes - " + JsonTable.Actors5[4])
		  
		  insertActor5 = true;
		 
		 }
		 
	  else if (loopCount == 4 && insertActor5 == false ){
		 
		 $("#textOut04").html("4th "+JsonTable.Actors5[1]+ " - votes - " + JsonTable.Actors5[4])
		  
		  insertActor5 = true;
		  
		 }
		 
	else if (loopCount == 5 && insertActor5 == false ){
		 
		 $("#textOut05").html("5th "+JsonTable.Actors5[1]+ " - votes - " + JsonTable.Actors5[4])
		  
		  insertActor5 = true;
		 
		 }
		 
		 else if (loopCount == 6  && insertActor5 == false){
		 
		 $("#textOut06").html("6th "+JsonTable.Actors5[1]+ " - votes - " + JsonTable.Actors5[4])
		  
		  insertActor5 = true;
		  
		 }
		 
		 else if (loopCount == 7 && insertActor5 == false ){
		 
		 $("#textOut07").html("7th "+JsonTable.Actors5[1]+ " - votes - " + JsonTable.Actors5[4])
		  
		  insertActor5 = true;
		  
		 }
		 
		 else if (loopCount == 8 && insertActor5 == false ){
		 
		 $("#textOut08").html("8th "+JsonTable.Actors5[1]+ " - votes - " + JsonTable.Actors5[4])
		  
		  insertActor5 = true;
		 
		 }
		 
		else if (loopCount == 9 && insertActor5 == false ){
		 
		 $("#textOut09").html("9th "+JsonTable.Actors5[1]+ " - votes - " + JsonTable.Actors5[4])
		  
		  insertActor5 = true;
		 
		 }
		 
		 else if (loopCount == 10 && insertActor5 == false ){
		 
		 $("#textOut10").html("10th "+JsonTable.Actors5[1]+ " - votes - " + JsonTable.Actors5[4])
		 
		  
		  insertActor5 = true;
		  
		 }
		 
		 	 else if (loopCount == 11 && insertActor5 == false ){
		 
		 $("#textOut11").html("11th "+JsonTable.Actors5[1]+ " - votes - " + JsonTable.Actors5[4])
		 
		  
		  insertActor5 = true;
		  
		 }
	
	
		   
	  }
		   
 else if ( parseInt (JsonTable.Actors6[4]) ==  storeWinner && insertActor6 == false) {
	  
	  
	 console.log ("winner is " + JsonTable.Actors6[1]+ " - votes - " + JsonTable.Actors6[4])
		   
	  console.log (winnerable);
	 
	 winnerable.splice (maxindex,1); 
	
 
	 console.log (winnerable);
	 
	 	 //loopCount =  loopCount +1 ; 
	 console.log (loopCount)
	 
	 	 if (loopCount == 1 && insertActor6 == false ){
		 
		 $("#textOut01").html("1st "+JsonTable.Actors6[1]+ " - votes - " + JsonTable.Actors6[4])
		 
		 insertActor6 = true;
		 
      }
	 
	
	else if (loopCount == 2 && insertActor6 == false ){
		 
		 $("#textOut02").html("2rd "+JsonTable.Actors6[1]+ " - votes - " + JsonTable.Actors6[4])
		  
		  insertActor6 = true;
		  
		 }
	 
     else if (loopCount == 3 && insertActor6 == false ){
		 
		 $("#textOut03").html("3rd "+JsonTable.Actors6[1]+ " - votes - " + JsonTable.Actors6[4])
		  
		  insertActor6 = true;
		 
		 
		 }
		 
	 else if (loopCount == 4  && insertActor6 == false){
		 
		 $("#textOut04").html("4th "+JsonTable.Actors6[1]+ " - votes - " + JsonTable.Actors6[4])
		  
		  insertActor6 = true;
		 
		 }
		 
		else if (loopCount == 5 && insertActor6 == false ){
		 
		 $("#textOut05").html("5th "+JsonTable.Actors6[1]+ " - votes - " + JsonTable.Actors6[4])
		  
		  insertActor6 = true;
		  
		 }
		 
		else if (loopCount == 6 && insertActor6 == false ){
		 
		 $("#textOut06").html("6th "+JsonTable.Actors6[1]+ " - votes - " + JsonTable.Actors6[4])
		 
		  insertActor6 = true;
		 
		 }
		 
		else if (loopCount == 7 && insertActor6 == false ){
		 
		 $("#textOut07").html("7th "+JsonTable.Actors6[1]+ " - votes - " + JsonTable.Actors6[4])
		  
		  insertActor6 = true;
		 
		 }
		 
		 else if (loopCount == 8 && insertActor6 == false ){
		 
		 $("#textOut08").html("8th "+JsonTable.Actors6[1]+ " - votes - " + JsonTable.Actors6[4])
		  
		  insertActor6 = true;
		  
		 }
		 
		 else if (loopCount == 9 && insertActor6 == false ){
		 
		 $("#textOut09").html("9th "+JsonTable.Actors6[1]+ " - votes - " + JsonTable.Actors6[4])
		  
		  insertActor6 = true;
		 
		 }
		 
		 else if (loopCount == 10 && insertActor6 == false ){
		 
		 $("#textOut10").html("10th "+JsonTable.Actors6[1]+ " - votes - " + JsonTable.Actors6[4])
		  
		  insertActor6 = true;
		   
		 }
		 
		  else if (loopCount == 11 && insertActor6 == false ){
		 
		 $("#textOut11").html("11th "+JsonTable.Actors6[1]+ " - votes - " + JsonTable.Actors6[4])
		  
		  insertActor6 = true;
		   
		 }
	
	 
		 
		 }	

 else if ( parseInt (JsonTable.Actors7[4]) ==  storeWinner && insertActor7 == false ) {
	 
	 console.log ("winner is " + JsonTable.Actors7[1]+ " - votes - " + JsonTable.Actors7[4])
	
	 console.log (winnerable);
	
	 winnerable.splice (maxindex,1); 

	 
	 console.log (winnerable);
	 
	 	  //loopCount =  loopCount +1 ; 
	 console.log (loopCount)
	 
	 	 if (loopCount == 1 && insertActor7 == false ){
		 
		 $("#textOut01").html("1st "+JsonTable.Actors7[1]+ " - votes - " + JsonTable.Actors7[4])
		 
		 insertActor7 = true;
		 
      }
	 
	
	else if (loopCount == 2 && insertActor7 == false ){
		 
		 $("#textOut02").html("2rd "+JsonTable.Actors7[1]+ " - votes - " + JsonTable.Actors7[4])
		  
		  insertActor7 = true;
		  
		 }
	 
	 else if (loopCount == 3 && insertActor7 == false ){
		 
		 $("#textOut03").html("3rd "+JsonTable.Actors7[1]+ " - votes - " + JsonTable.Actors7[4])
		  
		  insertActor7 = true;
		  
		 }
		 
	  else if (loopCount == 4 && insertActor7 == false ){
		 
		 $("#textOut04").html("4th "+JsonTable.Actors7[1]+ " - votes - " + JsonTable.Actors7[4])
		  
		  insertActor7 = true;
		 
		 }
		 
		else if (loopCount == 5 && insertActor7 == false){
		 
		 $("#textOut05").html("5th "+JsonTable.Actors7[1]+ " - votes - " + JsonTable.Actors7[4])
		  
		  insertActor7 = true;
		 
		 }
		 
		  else if (loopCount == 6 && insertActor7 == false){
		 
		 $("#textOut06").html("6th "+JsonTable.Actors7[1]+ " - votes - " + JsonTable.Actors7[4])
		  
		  insertActor7 = true;
		 
		 }
		 
		  else if (loopCount == 7 && insertActor7 == false){
		 
		 $("#textOut07").html("7th "+JsonTable.Actors7[1]+ " - votes - " + JsonTable.Actors7[4])
		  
		  insertActor7 = true;
		 
		 }
		 
		 else if (loopCount == 8 && insertActor7 == false){
		 
		 $("#textOut08").html( "8th "+JsonTable.Actors7[1]+ " - votes - " + JsonTable.Actors7[4])
		 
		 insertActor7 = true;
		 
		 }
		 
		else if (loopCount == 9 && insertActor7 == false){
		 
		 $("#textOut09").html("9th "+JsonTable.Actors7[1]+ " - votes - " + JsonTable.Actors7[4])
		  
		  insertActor7 = true;
		 
		 }
		 
		  else if (loopCount == 10 && insertActor7 == false){
  		 
		 $("#textOut10").html("10th "+JsonTable.Actors7[1]+ " - votes - " + JsonTable.Actors7[4])
		  
		  insertActor7 = true;
		 
		 }
		 
		 else if (loopCount == 11 && insertActor7 == false){
  		 
		 $("#textOut11").html("11th "+JsonTable.Actors7[1]+ " - votes - " + JsonTable.Actors7[4])
		  
		  insertActor7 = true;
		 
		 }
	

	  }
		   
 else if ( parseInt (JsonTable.Actors8[4]) ==  storeWinner && insertActor8 == false) {
	
  console.log ("winner is " + JsonTable.Actors8[1]+ " - votes - " + JsonTable.Actors8[4])	
		
	console.log (winnerable);
	 
	 winnerable.splice (maxindex,1); 
	 

	 console.log (winnerable);
	 
	 	  //loopCount =  loopCount +1 ; 
	 console.log (loopCount)
	
	
		 if (loopCount == 1 && insertActor8 == false ){
		 
		 $("#textOut01").html("1st "+JsonTable.Actors8[1]+ " - votes - " + JsonTable.Actors8[4])
		  
		  insertActor8 = true 
		 
      }
	 
	
	 else if (loopCount == 2 && insertActor8 == false ){
		 
		 $("#textOut02").html("2rd "+JsonTable.Actors8[1]+ " - votes - " + JsonTable.Actors8[4])
		  
		   insertActor8 = true 
		 
		 }
	 
	 else if (loopCount == 3 && insertActor8 == false ){
		 
		 $("#textOut03").html("3rd "+JsonTable.Actors8[1]+ " - votes - " + JsonTable.Actors8[4])
		  
		   insertActor8 = true 
		  
		 }
		 
	   else if (loopCount == 4 && insertActor8 == false){
		 
		 $("#textOut04").html("4th "+JsonTable.Actors8[1]+ " - votes - " + JsonTable.Actors8[4])
		  
		   insertActor8 = true 
		 
		 }
		 
		 else if (loopCount == 5 && insertActor8 == false){
		 
		 $("#textOut05").html("5th "+JsonTable.Actors8[1]+ " - votes - " + JsonTable.Actors8[4])
		 
		    insertActor8 = true 
		  
		 }
		 
		  else if (loopCount == 6 && insertActor8 == false){
		 
		 $("#textOut06").html("6th "+JsonTable.Actors8[1]+ " - votes - " + JsonTable.Actors8[4])
		  
		   insertActor8 = true 
		 
		 }
		 
		  else if (loopCount == 7 && insertActor8 == false){
		 
		 $("#textOut07").html("7th "+JsonTable.Actors8[1]+ " - votes - " + JsonTable.Actors8[4])
		  
		   insertActor8 = true 
		 
		 }
		 
		 else if (loopCount == 8 && insertActor8 == false){
		 
		 $("#textOut08").html("8th "+JsonTable.Actors8[1]+ " - votes - " + JsonTable.Actors8[4])
		  
		   insertActor8 = true 
		 
		 }
		 
		  else if (loopCount == 9 && insertActor8 == false){
		 
		 $("#textOut09").html("9th "+JsonTable.Actors8[1]+ " - votes - " + JsonTable.Actors8[4])
		  
		   insertActor8 = true 
		 
		 }
		 
		  else if (loopCount == 10 && insertActor8 == false){
		 
		 $("#textOut10").html("10th "+JsonTable.Actors8[1]+ " - votes - " + JsonTable.Actors8[4])
		   
		    insertActor8 = true 
		  
		 
		 }
		 
		 	  else if (loopCount == 11 && insertActor8 == false){
		 
		 $("#textOut11").html("11th "+JsonTable.Actors8[1]+ " - votes - " + JsonTable.Actors8[4])
		   
		    insertActor8 = true 
		  
		 
		 }
	
		 
		 }	

 else if ( parseInt (JsonTable.Actors9[4]) ==  storeWinner && insertActor9 == false ) {
	 
	 
	 console.log ("winner is " + JsonTable.Actors9[1]+ " - votes - " + JsonTable.Actors9[4])
		 
	 console.log (winnerable);
	 
	winnerable.splice (maxindex,1); 

	 console.log (winnerable);
	 
	 	 //loopCount =  loopCount +1 ; 
	 console.log (loopCount)
	 
	 
	 	 if (loopCount == 1 && insertActor9 == false ){
		 
		 $("#textOut01").html("1st "+JsonTable.Actors9[1]+ " - votes - " + JsonTable.Actors9[4])
		  
		  insertActor9 = true 
		 
      }
	 
	
	 else if (loopCount == 2 && insertActor9 == false ){
		 
		 $("#textOut02").html("2rd "+JsonTable.Actors9[1]+ " - votes - " + JsonTable.Actors9[4])
		 
		 insertActor9 = true
		 
		 }
	 
	 else if (loopCount == 3 && insertActor9 == false ){
		 
		 $("#textOut03").html("3rd "+JsonTable.Actors9[1]+ " - votes - " + JsonTable.Actors9[4])
		  
		  insertActor9 = true
		 
		 }
		 
	   else if (loopCount == 4 && insertActor9 == false){
		 
		 $("#textOut04").html("4th "+JsonTable.Actors9[1]+ " - votes - " + JsonTable.Actors9[4])
		  
		  insertActor9 = true
		 
		 }
		 
		 else if (loopCount == 5 && insertActor9 == false){
		 
		 $("#textOut05").html("5th "+JsonTable.Actors9[1]+ " - votes - " + JsonTable.Actors9[4])
		  
		  insertActor9 = true
		 
		 }
		 
		  else if (loopCount == 6 && insertActor9 == false){
		 
		 $("#textOut06").html("6th "+JsonTable.Actors9[1]+ " - votes - " + JsonTable.Actors9[4])
		  
		  insertActor9 = true
		 
		 }
		 
		  else if (loopCount == 7 && insertActor9 == false){
		 
		 $("#textOut07").html("7th "+JsonTable.Actors9[1]+ " - votes - " + JsonTable.Actors9[4])
		  
		  insertActor9 = true
		 
		 }
		 
		  else if (loopCount == 8 && insertActor9 == false ){
		 
		 $("#textOut08").html("8th "+JsonTable.Actors9[1]+ " - votes - " + JsonTable.Actors9[4])
		  
		  insertActor9 = true
		 
		 }
		 
		  else if (loopCount == 9 && insertActor9 == false){
		 
		 $("#textOut09").html("9th "+JsonTable.Actors9[1]+ " - votes - " + JsonTable.Actors9[4])
		 
		 insertActor9 = true 
		 
		 }
		 
		  else if (loopCount == 10 && insertActor9 == false){
		 
		 $("#textOut10").html("10th "+JsonTable.Actors9[1]+ " - votes - " + JsonTable.Actors9[4])
		  
		  insertActor9 = true
		 
		 }
		 
		 
		 else if (loopCount == 11 && insertActor9 == false){
		 
		 $("#textOut11").html("11th "+JsonTable.Actors9[1]+ " - votes - " + JsonTable.Actors9[4])
		  
		  insertActor9 = true
		 
		 }
	
	 
		   
	  }
		   
 else if ( parseInt (JsonTable.Actors10[4]) ==  storeWinner && insertActor10 == false) {
		   
	 console.log ("winner is " + JsonTable.Actors10[1])
	 
	 console.log (winnerable);
	 
	winnerable.splice (maxindex,1); 
	 
	 console.log (winnerable);
	 
	// 	 loopCount =  loopCount +1 ; 
	 console.log (loopCount)
	 
	 
	 	 if (loopCount == 1 && insertActor10 == false ){
		 
		 $("#textOut01").html("1st "+JsonTable.Actors10[1])
		  
		  insertActor10 = true
		 
      }
	 
	
	 else if (loopCount == 2  && insertActor10 == false ){
		 
		 $("#textOut02").html("2rd "+JsonTable.Actors10[1]+ " - votes - " + JsonTable.Actors10[4])
		 
		  
		  insertActor10 = true
	       
		   	 
		 }
	 
	 else if (loopCount == 3  && insertActor10 == false){
		 
		 $("#textOut03").html("3rd "+JsonTable.Actors10[1]+ " - votes - " + JsonTable.Actors10[4])
		  
		  
		  insertActor10 = true
		 
		 }
		 
	  else if (loopCount == 4  && insertActor10 == false ){
		 
		 $("#textOut04").html("4th "+JsonTable.Actors10[1]+ " - votes - " + JsonTable.Actors10[4])
		  
		  
		  insertActor10 = true
		 
		 }
		 
		 else if (loopCount == 5   && insertActor10 == false){
		 
		 $("#textOut05").html("5th "+JsonTable.Actors10[1]+ " - votes - " + JsonTable.Actors10[4])
		  
		  
		  insertActor10 = true
		 
		 }
		 
		 else if (loopCount == 6   && insertActor10 == false){
		 
		 $("#textOut06").html("6th "+JsonTable.Actors10[1]+ " - votes - " + JsonTable.Actors10[4])
		  
		  
		  insertActor10 = true
		 
		 }
		 
		 else if (loopCount == 7   && insertActor10 == false){
		 
		 $("#textOut07").html("7th "+JsonTable.Actors10[1]+ " - votes - " + JsonTable.Actors10[4])
		  
		  
		  insertActor10 = true
		 
		 }
		 
		   else if (loopCount == 8  && insertActor10 == false){
		 
		 $("#textOut08").html("8th "+JsonTable.Actors10[1]+ " - votes - " + JsonTable.Actors10[4])
		  
		  
		  insertActor10 = true
		  
		 }
		 
		  else if (loopCount == 9  && insertActor10 == false){
		 
		 $("#textOut09").html("9th "+JsonTable.Actors10[1]+ " - votes - " + JsonTable.Actors10[4])
		  
		  
		  insertActor10 = true
		 
		 }
		 
	    else  if (loopCount == 10  && insertActor10 == false){
		 
		 $("#textOut10").html("10th "+JsonTable.Actors10[1]+ " - votes - " + JsonTable.Actors10[4])
		  
		  
		  insertActor10 = true
		 
		 }
		 
		  else  if (loopCount == 11  && insertActor10 == false){
		 
		 $("#textOut11").html("11th "+JsonTable.Actors10[1]+ " - votes - " + JsonTable.Actors10[4])
		  
		  
		  insertActor10 = true
		 
		 }
	
		 
		 }
		 
		  else if ( parseInt (JsonTable.Actors11[4]) ==  storeWinner && insertActor11 == false) {
		   
	 console.log ("winner is " + JsonTable.Actors11[1])
	 
	 console.log (winnerable);
	 
	winnerable.splice (maxindex,1); 
	 
	 console.log (winnerable);
	 
	// 	 loopCount =  loopCount +1 ; 
	 console.log (loopCount)
	  // CHECK TWICE
	 
	 	 if (loopCount == 1 && insertActor11 == false ){
		 
		 $("#textOut01").html("1st "+JsonTable.Actors11[1])
		  
		  insertActor11 = true
		 
      }
	 
	
	 else if (loopCount == 2  && insertActor11 == false ){
		 
		 $("#textOut02").html("2rd "+JsonTable.Actors11[1]+ " - votes - " + JsonTable.Actors11[4])
		 
		  
		  insertActor11 = true
	       
		   	 
		 }
	 
	 else if (loopCount == 3  && insertActor11 == false){
		 
		 $("#textOut03").html("3rd "+JsonTable.Actors11[1]+ " - votes - " + JsonTable.Actors11[4])
		  
		  
		  insertActor11 = true
		 
		 }
		 
	  else if (loopCount == 4  && insertActor11 == false ){
		 
		 $("#textOut04").html("4th "+JsonTable.Actors11[1]+ " - votes - " + JsonTable.Actors11[4])
		  
		  
		  insertActor11 = true
		 
		 }
		 
		 else if (loopCount == 5   && insertActor11 == false){
		 
		 $("#textOut05").html("5th "+JsonTable.Actors11[1]+ " - votes - " + JsonTable.Actors11[4])
		  
		  
		  insertActor11 = true
		 
		 }
		 
		 else if (loopCount == 6   && insertActor11 == false){
		 
		 $("#textOut06").html("6th "+JsonTable.Actors11[1]+ " - votes - " + JsonTable.Actors11[4])
		  
		  
		  insertActor11 = true
		 
		 }
		 
		 else if (loopCount == 7   && insertActor11 == false){
		 
		 $("#textOut07").html("7th "+JsonTable.Actors11[1]+ " - votes - " + JsonTable.Actors11[4])
		  
		  
		  insertActor11 = true
		 
		 }
		 
		   else if (loopCount == 8  && insertActor11 == false){
		 
		 $("#textOut08").html("8th "+JsonTable.Actors11[1]+ " - votes - " + JsonTable.Actors11[4])
		  
		  
		  insertActor11 = true
		  
		 }
		 
		  else if (loopCount == 9  && insertActor11 == false){
		 
		 $("#textOut09").html("9th "+JsonTable.Actors11[1]+ " - votes - " + JsonTable.Actors11[4])
		  
		  
		  insertActor11 = true
		 
		 }
		 
		   else  if (loopCount == 10  && insertActor11 == false){
		 
		 $("#textOut10").html("10th "+JsonTable.Actors11[1]+ " - votes - " + JsonTable.Actors11[4])
		  
		  
		  insertActor11 = true
		 
		 }
		 
		 
	    else  if (loopCount == 11  && insertActor11 == false){
		 
		 $("#textOut11").html("11th "+JsonTable.Actors11[1]+ " - votes - " + JsonTable.Actors11[4])
		  
		  
		  insertActor11 = true
		 
		 }
	
		 
		 }	

 }

	} );
	}
	
   
  function winner() {
	
	document.getElementById("cover").style.display = "block";
	document.getElementById("page").style.display = "block";
	document.getElementById("button").style.display = "block";
	document.getElementById("innerButton").style.display = "block";
	
	$("#page").animate({
		
top: '-=700'
		
},1000,function () {
	
	
})
	
	
	
	  } 
   
   

function killBlock() {
	
	 	 $("#page").css({top: '800px'})
		 
	document.getElementById("cover").style.display = "none";
	document.getElementById("page").style.display = "none";
	document.getElementById("button").style.display = "none";
	document.getElementById("innerButton").style.display = "none";
	
    
		// console.log("working")

}


   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   