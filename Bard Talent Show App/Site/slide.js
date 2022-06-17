// JavaScript Document


//localStorage.clear();

function visitedBefore () {

if (localStorage.key("visit") ==  null ) {
	    
		console.log ("Now I will remember this browser")
		localStorage.setItem("visit", true);
		localStorage.setItem("act1", false);
		localStorage.setItem("act2", false);
		localStorage.setItem("act3", false);
		localStorage.setItem("act4", false);
		localStorage.setItem("act5", false);
		localStorage.setItem("act6", false);
		localStorage.setItem("act7", false);
		localStorage.setItem("act8", false);
		localStorage.setItem("act9", false);
		localStorage.setItem("act10", false);
		localStorage.setItem("act11", false);
		localStorage.setItem("like1", false);
		localStorage.setItem("like2", false);
		localStorage.setItem("like3", false);
		localStorage.setItem("like4", false);
		localStorage.setItem("like5", false);
		localStorage.setItem("like6", false);
		localStorage.setItem("like7", false);
		localStorage.setItem("like8", false);
		localStorage.setItem("like9", false);
		localStorage.setItem("like10", false);
		localStorage.setItem("like11", false);
		localStorage.setItem("dislike1", false);
		localStorage.setItem("dislike2", false);
		localStorage.setItem("dislike3", false);
		localStorage.setItem("dislike4", false);
		localStorage.setItem("dislike5", false);
		localStorage.setItem("dislike6", false);
		localStorage.setItem("dislike7", false);
		localStorage.setItem("dislike8", false);
		localStorage.setItem("dislike9", false);
		localStorage.setItem("dislike10", false);
		localStorage.setItem("dislike11", false);



	
	}
	
 else {
	  
	 // console.log ( "hellow I am here " + localStorage.setItem("like1", false));
	// console.log("visiting again " + localStorage.getItem("visit"));
	// localStorage.removeItem("visit")
	// localStorage.clear();
	 
	console.log("visiting again " + localStorage.getItem("visit"));
 	console.log (localStorage.length)
	
	 
	 
	 }

} 

visitedBefore ();




var imageNumber = 1 ;

function checkPoll() {

var currentTime  = new Date()

if (  currentTime.getHours() <= 15 || currentTime.getHours() >= 21 ){
	

	alert ("Sorry the polls are close :( ")
	
	}
	
	
else {

	window.open("vote.html","_self");	

}
	
	
}



function slideObject2() {
	
	if (imageNumber == 1) {	
	
	$("#image01").fadeTo(5000,1);
	
	$("#image01").animate({
		
		left: '-=1190'
		
		},5000,function () {
			imageNumber = 2 
			slideObject2( );
			
			$("#image01").css("opacity",0);
			$("#image01").css("left",0);
			
			
			
			});
	
		
}

else if (imageNumber == 2) {	

$("#image02").fadeTo(5000,1);
	
$("#image02").animate({
		
left: '-=1190'
		
},5000,function () {
	
imageNumber = 3	
slideObject2();

$("#image02").css("opacity",0);
$("#image02").css("left",0);
			
});
	
	}
	

else if (imageNumber == 3  ) {
	
	$("#image03").fadeTo(5000,1);
	
$("#image03").animate({
		
		left: '-=1190'
		
			},5000,function () {
	
					imageNumber = 4
					slideObject2();
					
			$("#image03").css("opacity",0);
			$("#image03").css("left",0);
			
							});
	
	
	}
	
	
	else if (imageNumber == 4) {	
	
	$("#image04").fadeTo(5000,1);
	
	$("#image04").animate({
		
		left: '-=1190'
		
		},5000,function () {
			imageNumber = 5
			
			slideObject2( );
			
			$("#image04").css("opacity",0);
			$("#image04").css("left",0);
			
			});
	
		
}	


else if (imageNumber ==  5 ) {	
	
	$("#image05").fadeTo(5000,1);
	
	$("#image05").animate({
		
		left: '-=1190'
		
		},5000,function () {
			imageNumber = 6
			
			slideObject2( );
			
			$("#image05").css("opacity",0);
			$("#image05").css("left",0);
			
			});
	
		
}

else if (imageNumber ==  6 ) {	
	
	$("#image06").fadeTo(5000,1);
	
	$("#image06").animate({
		
		left: '-=1190'
		
		},5000,function () {
			imageNumber = 1
			
			slideObject2( );
			
			$("#image06").css("opacity",0);
			$("#image06").css("left",0);
			
			});
	
		
}



}

$(document).ready( function() {

console.log("ready!");
	
slideObject2();

	
	
});