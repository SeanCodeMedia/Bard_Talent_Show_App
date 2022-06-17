// JavaScript Document

//lets talk to php

var checkStorage = false; 


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var IDnumber = getParameterByName("ID");



if(typeof(Storage) !== "undefined") {

 checkStorage = true; 

} else {
    console.log (" no storage ") 
}


if (IDnumber == 1 ) {
	
	voted = $.parseJSON(localStorage.getItem("act1"))
	liked = $.parseJSON(localStorage.getItem("like1"))
	disliked = $.parseJSON(localStorage.getItem("dislike1"))
}

if (IDnumber == 2 ) {
	
	voted = $.parseJSON(localStorage.getItem("act2"))
	liked = $.parseJSON(localStorage.getItem("like2"))
	disliked = $.parseJSON(localStorage.getItem("dislike2"))
}


if (IDnumber == 3 ) {
		
	voted = $.parseJSON(localStorage.getItem("act3"))
	liked = $.parseJSON(localStorage.getItem("like3"))
	disliked = $.parseJSON(localStorage.getItem("dislike3"))
}

if (IDnumber == 4 ) {
	
	voted = $.parseJSON(localStorage.getItem("act4"))
	liked = $.parseJSON(localStorage.getItem("like4"))
	disliked = $.parseJSON(localStorage.getItem("dislike4"))
}


if (IDnumber == 5 ) {
	
	voted = $.parseJSON(localStorage.getItem("act5"))
	liked = $.parseJSON(localStorage.getItem("like5"))
	disliked = $.parseJSON(localStorage.getItem("dislike5"))
}

if (IDnumber == 6 ) {
	
	voted = $.parseJSON(localStorage.getItem("act6"))
	liked = $.parseJSON(localStorage.getItem("like6"))
	disliked = $.parseJSON(localStorage.getItem("dislike6"))
}

if (IDnumber == 7 ) {
	
	voted = $.parseJSON(localStorage.getItem("act7"))
	liked = $.parseJSON(localStorage.getItem("like7"))
	disliked = $.parseJSON(localStorage.getItem("dislike7"))
}


if (IDnumber == 8 ) {
	
	voted = $.parseJSON(localStorage.getItem("act8"))
	liked = $.parseJSON(localStorage.getItem("like8"))
	disliked = $.parseJSON(localStorage.getItem("dislike8"))
}

if (IDnumber == 9 ) {
	
	voted = $.parseJSON(localStorage.getItem("act9"))
	liked = $.parseJSON(localStorage.getItem("like9"))
	disliked = $.parseJSON(localStorage.getItem("dislike9"))
}


if (IDnumber == 10 ) {
	
	voted = $.parseJSON(localStorage.getItem("act10"))
	liked = $.parseJSON(localStorage.getItem("like10"))
	disliked = $.parseJSON(localStorage.getItem("dislike10"))
}

if (IDnumber == 11 ) {
	
	voted = $.parseJSON(localStorage.getItem("act11"))
	liked = $.parseJSON(localStorage.getItem("like11"))
	disliked = $.parseJSON(localStorage.getItem("dislike11"))
}

// new vars chaning these
//var voted = $.parseJSON(v1) ///localStorage.getItem("act1");
//var liked = false //localStorage.getItem("like1");
//var disliked = false //localStorage.getItem("dislike1");
	
var infoReady = false;
var perentVote = false; 
var preventLikes = false; 
var preventDislikes = false;


var JsonTabe = {}; 

var votes = 0; 
var likes = 0; 
var dislikes = 0;
var talent = "N/A"

var Sendvote; 
var SendLikes;
var SendDislikes;

function fireOut (operation) {
	// save info
	// votes 
	if (IDnumber == 1 && operation == "votes" ) {
		
		console.log (localStorage.getItem("act1"))
		localStorage.setItem("act1",true);
		console.log (localStorage.getItem("act1"))
		
	} 
	
		if (IDnumber == 2 && operation == "votes" ) {
		
		console.log (localStorage.getItem("act2"))
		localStorage.setItem("act2",true);
		console.log (localStorage.getItem("act2"))
		
	} 
	
		if (IDnumber == 3 && operation == "votes" ) {
		
		console.log (localStorage.getItem("act3"))
		localStorage.setItem("act3",true);
		console.log (localStorage.getItem("act3"))
		
	} 
	
		if (IDnumber == 4 && operation == "votes" ) {
			
		console.log (localStorage.getItem("act4"))
		localStorage.setItem("act4",true);
		console.log (localStorage.getItem("act4"))
	} 
	
	
		if (IDnumber == 5 && operation == "votes" ) {
			
		console.log (localStorage.getItem("act5"))
		localStorage.setItem("act5",true);
		console.log (localStorage.getItem("act5"))
	} 
	

		if (IDnumber == 6 && operation == "votes" ) {
			
		console.log (localStorage.getItem("act6"))
		localStorage.setItem("act6",true);
		console.log (localStorage.getItem("act6"))
	} 
	
		if (IDnumber == 7 && operation == "votes" ) {
			
		console.log (localStorage.getItem("act7"))
		localStorage.setItem("act7",true);
		console.log (localStorage.getItem("act7"))
	} 
	
		if (IDnumber == 8 && operation == "votes" ) {
			
		console.log (localStorage.getItem("act8"))
		localStorage.setItem("act8",true);
		console.log (localStorage.getItem("act8"))
	} 
	
		if (IDnumber == 9 && operation == "votes" ) {
		console.log (localStorage.getItem("act9"))
		localStorage.setItem("act9",true);
		console.log (localStorage.getItem("act9"))
	} 
	
		if (IDnumber == 10 && operation == "votes" ) {
		console.log (localStorage.getItem("act10"))
		localStorage.setItem("act10",true);
		console.log (localStorage.getItem("act10"))
	}
	
	
		if (IDnumber == 11 && operation == "votes" ) {
		console.log (localStorage.getItem("act11"))
		localStorage.setItem("act11",true);
		console.log (localStorage.getItem("act11"))
	}
	
	   /// likes 
		if (IDnumber == 1 && operation == "likes" ) {
		
		console.log (localStorage.getItem("like1"))
		localStorage.setItem("like1",true);
		console.log (localStorage.getItem("like1"))
		
	} 
	
		if (IDnumber == 2 && operation == "likes" ) {
		
		console.log (localStorage.getItem("like2"))
		localStorage.setItem("like2",true);
		console.log (localStorage.getItem("like2"))
		
	} 
	
		if (IDnumber == 3 && operation == "likes" ) {
		
		console.log (localStorage.getItem("like3"))
		localStorage.setItem("like3",true);
		console.log (localStorage.getItem("like3"))
		
	} 
	
		if (IDnumber == 4 && operation == "likes" ) {
			
		console.log (localStorage.getItem("like4"))
		localStorage.setItem("like4",true);
		console.log (localStorage.getItem("like4"))
	} 
	
	
		if (IDnumber == 5 && operation == "likes" ) {
			
		console.log (localStorage.getItem("like5"))
		localStorage.setItem("like5",true);
		console.log (localStorage.getItem("like5"))
	} 
	

		if (IDnumber == 6 && operation == "likes" ) {
			
		console.log (localStorage.getItem("like6"))
		localStorage.setItem("like6",true);
		console.log (localStorage.getItem("like6"))
	} 
	
		if (IDnumber == 7 && operation == "likes" ) {
			
		console.log (localStorage.getItem("like7"))
		localStorage.setItem("like7",true);
		console.log (localStorage.getItem("like7"))
	} 
	
		if (IDnumber == 8 && operation == "likes" ) {
			
		console.log (localStorage.getItem("like8"))
		localStorage.setItem("like8",true);
		console.log (localStorage.getItem("like8"))
	} 
	
		if (IDnumber == 9 && operation == "likes" ) {
		console.log (localStorage.getItem("like9"))
		localStorage.setItem("like9",true);
		console.log (localStorage.getItem("like9"))
	} 
	
		if (IDnumber == 10 && operation == "likes" ) {
		console.log (localStorage.getItem("like10"))
		localStorage.setItem("like10",true);
		console.log (localStorage.getItem("like10"))
	} 
	
		if (IDnumber == 11 && operation == "likes" ) {
		console.log (localStorage.getItem("like11"))
		localStorage.setItem("like11",true);
		console.log (localStorage.getItem("like11"))
	} 
	
	 /// dislikes 
			if (IDnumber == 1 && operation == "dislikes" ) {
		
		console.log (localStorage.getItem("dislike1"))
		localStorage.setItem("dislike1",true);
		console.log (localStorage.getItem("dislike1"))
		
	} 
	
		if (IDnumber == 2 && operation == "dislikes" ) {
		
		console.log (localStorage.getItem("dislike2"))
		localStorage.setItem("dislike2",true);
		console.log (localStorage.getItem("dislike2"))
		
	} 
	
		if (IDnumber == 3 && operation == "dislikes" ) {
		
		console.log (localStorage.getItem("dislike3"))
		localStorage.setItem("dislike3",true);
		console.log (localStorage.getItem("dislike3"))
		
	} 
	
		if (IDnumber == 4 && operation == "dislikes" ) {
			
		console.log (localStorage.getItem("dislike4"))
		localStorage.setItem("dislike4",true);
		console.log (localStorage.getItem("dislike4"))
	} 
	
	
		if (IDnumber == 5 && operation == "dislikes" ) {
			
		console.log (localStorage.getItem("dislike5"))
		localStorage.setItem("dislike5",true);
		console.log (localStorage.getItem("dislike5"))
	} 
	

		if (IDnumber == 6 && operation == "dislikes" ) {
			
		console.log (localStorage.getItem("dislike6"))
		localStorage.setItem("dislike6",true);
		console.log (localStorage.getItem("dislike6"))
	} 
	
		if (IDnumber == 7 && operation == "dislikes" ) {
			
		console.log (localStorage.getItem("dislike7"))
		localStorage.setItem("dislike7",true);
		console.log (localStorage.getItem("dislike7"))
	} 
	
		if (IDnumber == 8 && operation == "dislikes" ) {
			
		console.log (localStorage.getItem("dislike8"))
		localStorage.setItem("dislike8",true);
		console.log (localStorage.getItem("dislike8"))
	} 
	
		if (IDnumber == 9 && operation == "dislikes" ) {
		console.log (localStorage.getItem("dislike9"))
		localStorage.setItem("dislike9",true);
		console.log (localStorage.getItem("dislike9"))
	} 
	
		if (IDnumber == 10 && operation == "dislikes" ) {
		console.log (localStorage.getItem("dislike10"))
		localStorage.setItem("dislike10",true);
		console.log (localStorage.getItem("dislike10"))
	} 
	
		if (IDnumber == 11 && operation == "dislikes" ) {
		console.log (localStorage.getItem("dislike11"))
		localStorage.setItem("dislike11",true);
		console.log (localStorage.getItem("dislike11"))
	}
	
	
} 



function sendlikes () {
	
	if (liked == false && infoReady == true && preventLikes == false) {

likes = likes + 1;
var likes01 = document.getElementById("com2").innerHTML = likes;
preventLikes  = true;
fireOut("likes");

	}
	
	else if (liked == true) {
		
		alert ("Sorry you have liked already");	
	
		
		}
		
		else if ( preventLikes == true ) {
		
		alert ("Sorry you have liked already");	
			
			
			}

}




function sendInfo (){
 if (voted  == false && infoReady == true && perentVote == false ) {
votes = votes + 1 ;
var vote01 = document.getElementById("com").innerHTML = votes;
perentVote = true;
 fireOut ("votes");
 
}


else if (voted == true) {

alert ("Sorry you have voted already");	
	
}

else if (perentVote == true) {
	
	alert ("Sorry you have voted already");	
	
	}


}
 


function initzalize (ID) {
	// seting up data
	if (ID == 1 ) {
$.get("index.php",
  {
	  //no info need to be sent here
	},
		
  function (data01)
{
			
	JsonTable = jQuery.parseJSON(data01); 
	//console.log(JsonTable.Actors1[1]);
	$("#com").html(JsonTable.Actors1[4])
	$("#com2").html(JsonTable.Actors1[3])
	$("#com3").html(JsonTable.Actors1[2])
	$("#com4").html(JsonTable.Actors1[5])
	$("#com5").html(JsonTable.Actors1[6])
	$("#name").html(JsonTable.Actors1[1])

		 

//	console.log (JsonTable.Actors1[4])
	 
	 likes = parseInt(JsonTable.Actors1[3]);
	 dislikes = parseInt(JsonTable.Actors1[2]);
	 votes = parseInt(JsonTable.Actors1[4]);
	 
	 infoReady = true;
	 
	
	
	} );
	}
	
 else if (ID == 2 ) {
$.get("index.php",
  {
	  //no info need to be sent here
	},
		
  function (data01)
{
			
	JsonTable = jQuery.parseJSON(data01); 
	console.log(JsonTable.Actors2[1]);
	$("#com").html(JsonTable.Actors2[4])
	$("#com2").html(JsonTable.Actors2[3])
	$("#com3").html(JsonTable.Actors2[2])
	$("#com4").html(JsonTable.Actors2[5])
	$("#com5").html(JsonTable.Actors2[6])
	$("#name").html(JsonTable.Actors2[1])
	
	console.log (JsonTable.Actors2[4])
	 
	 likes = parseInt(JsonTable.Actors2[3]);
	 dislikes = parseInt(JsonTable.Actors2[2]);
	 votes = parseInt(JsonTable.Actors2[4]);
	 
	infoReady = true;
	
	} );
	}
	

else if (ID == 3 ) {
$.get("index.php",
  {
	  //no info need to be sent here
	},
		
  function (data01)
{
			
	JsonTable = jQuery.parseJSON(data01); 
	console.log(JsonTable.Actors3[1]);
	$("#com").html(JsonTable.Actors3[4])
	$("#com2").html(JsonTable.Actors3[3])
	$("#com3").html(JsonTable.Actors3[2])
	$("#com4").html(JsonTable.Actors3[5])
	$("#com5").html(JsonTable.Actors3[6])
	$("#name").html(JsonTable.Actors3[1])
	
	console.log (JsonTable.Actors3[4])
	 
	 likes = parseInt(JsonTable.Actors3[3]);
	 dislikes = parseInt(JsonTable.Actors3[2]);
	 votes = parseInt(JsonTable.Actors3[4]);
	 
	infoReady = true;
	
	} );
	}
	

else if (ID == 4 ) {
$.get("index.php",
  {
	  //no info need to be sent here
	},
		
  function (data01)
{
			
	JsonTable = jQuery.parseJSON(data01); 
	console.log(JsonTable.Actors4[1]);
	$("#com").html(JsonTable.Actors4[4])
	$("#com2").html(JsonTable.Actors4[3])
	$("#com3").html(JsonTable.Actors4[2])
	$("#com4").html(JsonTable.Actors4[5])
	$("#com5").html(JsonTable.Actors4[6])
	$("#name").html(JsonTable.Actors4[1])
	
	console.log (JsonTable.Actors4[4])
	 
	 likes = parseInt(JsonTable.Actors4[3]);
	 dislikes = parseInt(JsonTable.Actors4[2]);
	 votes = parseInt(JsonTable.Actors4[4]);
	 
	 infoReady = true;
	
	
	} );
	}
	
else if (ID == 5 ) {
$.get("index.php",
  {
	  //no info need to be sent here
	},
		
  function (data01)
{
			
	JsonTable = jQuery.parseJSON(data01); 
	console.log(JsonTable.Actors5[1]);
	$("#com").html(JsonTable.Actors5[4])
	$("#com2").html(JsonTable.Actors5[3])
	$("#com3").html(JsonTable.Actors5[2])
	$("#com4").html(JsonTable.Actors5[5])
	$("#com5").html(JsonTable.Actors5[6])
	$("#name").html(JsonTable.Actors5[1])
	
	console.log (JsonTable.Actors5[4])
	 
	 likes = parseInt(JsonTable.Actors5[3]);
	 dislikes = parseInt(JsonTable.Actors5[2]);
	 votes = parseInt(JsonTable.Actors5[4]);
	 
	infoReady = true;
	
	} );
	}
	
	else if (ID == 6 ) {
$.get("index.php",
  {
	  //no info need to be sent here
	},
		
  function (data01)
{
			
	JsonTable = jQuery.parseJSON(data01); 
	console.log(JsonTable.Actors6[1]);
	$("#com").html(JsonTable.Actors6[4])
	$("#com2").html(JsonTable.Actors6[3])
	$("#com3").html(JsonTable.Actors6[2])
	$("#com4").html(JsonTable.Actors6[5])
	$("#com5").html(JsonTable.Actors6[6])
	$("#name").html(JsonTable.Actors6[1])
	
	console.log (JsonTable.Actors6[4])
	 
	 likes = parseInt(JsonTable.Actors6[3]);
	 dislikes = parseInt(JsonTable.Actors6[2]);
	 votes = parseInt(JsonTable.Actors6[4]);
	 
	infoReady = true;
	
	} );
	}
	
	
	else if (ID == 7 ) {
$.get("index.php",
  {
	  //no info need to be sent here
	},
		
  function (data01)
{
			
	JsonTable = jQuery.parseJSON(data01); 
	console.log(JsonTable.Actors7[1]);
	$("#com").html(JsonTable.Actors7[4])
	$("#com2").html(JsonTable.Actors7[3])
	$("#com3").html(JsonTable.Actors7[2])
	$("#com4").html(JsonTable.Actors7[5])
	$("#com5").html(JsonTable.Actors7[6])
	$("#name").html(JsonTable.Actors7[1])
	
	
	console.log (JsonTable.Actors7[4])
	 
	 likes = parseInt(JsonTable.Actors7[3]);
	 dislikes = parseInt(JsonTable.Actors7[2]);
	 votes = parseInt(JsonTable.Actors7[4]);
	 
	infoReady = true;
	
	} );
	}
	
	else if (ID == 8 ) {
$.get("index.php",
  {
	  //no info need to be sent here
	},
		
  function (data01)
{
			
	JsonTable = jQuery.parseJSON(data01); 
	console.log(JsonTable.Actors8[1]);
	$("#com").html(JsonTable.Actors8[4])
	$("#com2").html(JsonTable.Actors8[3])
	$("#com3").html(JsonTable.Actors8[2])
	$("#com4").html(JsonTable.Actors8[5])
	$("#com5").html(JsonTable.Actors8[6])
	$("#name").html(JsonTable.Actors8[1])
	
	console.log (JsonTable.Actors8[4])
	 
	 likes = parseInt(JsonTable.Actors8[3]);
	 dislikes = parseInt(JsonTable.Actors8[2]);
	 votes = parseInt(JsonTable.Actors8[4]);
	 
	infoReady = true;
	
	} );
	}
	
	else if (ID == 9 ) {
$.get("index.php",
  {
	  //no info need to be sent here
	},
		
  function (data01)
{
			
	JsonTable = jQuery.parseJSON(data01); 
	console.log(JsonTable.Actors9[1]);
	$("#com").html(JsonTable.Actors9[4])
	$("#com2").html(JsonTable.Actors9[3])
	$("#com3").html(JsonTable.Actors9[2])
	$("#com4").html(JsonTable.Actors9[5])
	$("#com5").html(JsonTable.Actors9[6])
	$("#name").html(JsonTable.Actors9[1])
	
	console.log (JsonTable.Actors5[4])
	 
	 likes = parseInt(JsonTable.Actors9[3]);
	 dislikes = parseInt(JsonTable.Actors9[2]);
	 votes = parseInt(JsonTable.Actors9[4]);
	 
	infoReady = true;
	
	} );
	}
	
	else if (ID == 10 ) {
$.get("index.php",
  {
	  //no info need to be sent here
	},
		
  function (data01)
{
			
	JsonTable = jQuery.parseJSON(data01); 
	console.log(JsonTable.Actors10[1]);
	$("#com").html(JsonTable.Actors10[4])
	$("#com2").html(JsonTable.Actors10[3])
	$("#com3").html(JsonTable.Actors10[2])
	$("#com4").html(JsonTable.Actors10[5])
	$("#com5").html(JsonTable.Actors10[6])
	$("#name").html(JsonTable.Actors10[1])
	
	console.log (JsonTable.Actors10[4])
	 
	 likes = parseInt(JsonTable.Actors10[3]);
	 dislikes = parseInt(JsonTable.Actors10[2]);
	 votes = parseInt(JsonTable.Actors10[4]);
	 
	infoReady = true;
	
	} );
	}
	
   else if (ID == 11 ) {
$.get("index.php",
  {
	  //no info need to be sent here
	},
		
  function (data01)
{
			
	JsonTable = jQuery.parseJSON(data01); 
	console.log(JsonTable.Actors11[1]);
	$("#com").html(JsonTable.Actors11[4])
	$("#com2").html(JsonTable.Actors11[3])
	$("#com3").html(JsonTable.Actors11[2])
	$("#com4").html(JsonTable.Actors11[5])
	$("#com5").html(JsonTable.Actors11[6])
	$("#name").html(JsonTable.Actors11[1])
	
	console.log (JsonTable.Actors11[4])
	 
	 likes = parseInt(JsonTable.Actors11[3]);
	 dislikes = parseInt(JsonTable.Actors11[2]);
	 votes = parseInt(JsonTable.Actors11[4]);
	 
	infoReady = true;
	
	} );
	}
   	

	
}

initzalize (IDnumber);


function sendDislikes() {
	
	if (disliked == false && infoReady == true && preventDislikes ==  false) {
		
	dislikes = dislikes +1
	var vote03 = document.getElementById("com3").innerHTML = dislikes;
	
	preventDislikes = true;
    fireOut("dislikes");
	
	
		}
		
   else if (disliked == true ) {
			
	alert ("Sorry you have disliked already");	
		
			
	}
	
	else if (preventDislikes == true) {
		
	 alert ("Sorry you have disliked already");	
		
		
		}
	
}

if (IDnumber == 1 ) {

$(document).ready( function (){
	$("#vote").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				votes01 : window.btoa(votes)
			},
		
		function (data)
		{
			//$("#com").html(data)
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		})
	
});


$(document).ready( function (){
	
	$("#Likes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				Likes01: window.btoa(likes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});


$(document).ready( function (){
	
	$("#Dislikes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				dislikes01 : window.btoa(dislikes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});

}

////actor2///////////////////////////////////////////////////////////////////////////////

if (IDnumber == 2 ) {

$(document).ready( function (){
	$("#vote").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				votes02 : window.btoa(votes)
			},
		
		function (data)
		{
			//$("#com").html(data)
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		})
	
});


$(document).ready( function (){
	
	$("#Likes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				Likes02: window.btoa(likes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});


$(document).ready( function (){
	
	$("#Dislikes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				dislikes02 : window.btoa(dislikes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});

}


////////////////////////////////actor3//////////////////////////////////////


if (IDnumber == 3 ) {

$(document).ready( function (){
	$("#vote").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				votes03 : window.btoa(votes)
			},
		
		function (data)
		{
			//$("#com").html(data)
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		})
	
});


$(document).ready( function (){
	
	$("#Likes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				Likes03: window.btoa(likes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});


$(document).ready( function (){
	
	$("#Dislikes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				dislikes03 : window.btoa(dislikes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});

}

///////////////////////////////////////////////actor4/////////////////////////////////////////


if (IDnumber == 4 ) {

$(document).ready( function (){
	$("#vote").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				votes04 : window.btoa(votes)
			},
		
		function (data)
		{
			//$("#com").html(data)
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		})
	
});


$(document).ready( function (){
	
	$("#Likes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				Likes04: window.btoa(likes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});


$(document).ready( function (){
	
	$("#Dislikes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				dislikes04 : window.btoa(dislikes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});

}

///////////////////////////////////////////////actor5/////////////////////////////////////////


if (IDnumber == 5 ) {

$(document).ready( function (){
	$("#vote").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				votes05 : window.btoa(votes)
			},
		
		function (data)
		{
			//$("#com").html(data)
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		})
	
});


$(document).ready( function (){
	
	$("#Likes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				Likes05: window.btoa(likes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});


$(document).ready( function (){
	
	$("#Dislikes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				dislikes05 : window.btoa(dislikes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});

}

///////////////////////////////////////////////actor6/////////////////////////////////////////


if (IDnumber == 6 ) {

$(document).ready( function (){
	$("#vote").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				votes06 : window.btoa(votes)
			},
		
		function (data)
		{
			//$("#com").html(data)
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		})
	
});


$(document).ready( function (){
	
	$("#Likes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				Likes06: window.btoa(likes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});


$(document).ready( function (){
	
	$("#Dislikes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				dislikes06 : window.btoa(dislikes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});

}

///////////////////////////////////////////////actor7/////////////////////////////////////////


if (IDnumber == 7 ) {

$(document).ready( function (){
	$("#vote").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				votes07 : window.btoa(votes)
			},
		
		function (data)
		{
			//$("#com").html(data)
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		})
	
});


$(document).ready( function (){
	
	$("#Likes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				Likes07: window.btoa(likes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});


$(document).ready( function (){
	
	$("#Dislikes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				dislikes07 : window.btoa(dislikes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});

}

///////////////////////////////////////////////actor8/////////////////////////////////////////


if (IDnumber == 8 ) {

$(document).ready( function (){
	$("#vote").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				votes08 : window.btoa(votes)
			},
		
		function (data)
		{
			//$("#com").html(data)
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		})
	
});


$(document).ready( function (){
	
	$("#Likes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				Likes08: window.btoa(likes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});


$(document).ready( function (){
	
	$("#Dislikes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				dislikes08 : window.btoa(dislikes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});

}

///////////////////////////////////////////////actor9/////////////////////////////////////////


if (IDnumber == 9 ) {

$(document).ready( function (){
	$("#vote").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				votes09 : window.btoa(votes)
			},
		
		function (data)
		{
			//$("#com").html(data)
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		})
	
});


$(document).ready( function (){
	
	$("#Likes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				Likes09: window.btoa(likes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});


$(document).ready( function (){
	
	$("#Dislikes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				dislikes09 : window.btoa(dislikes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});

}


///////////////////////////////////////////////actor10/////////////////////////////////////////


if (IDnumber == 10 ) {

$(document).ready( function (){
	$("#vote").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				votes010 : window.btoa(votes)
			},
		
		function (data)
		{
			//$("#com").html(data)
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		})
	
});


$(document).ready( function (){
	
	$("#Likes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				Likes010: window.btoa(likes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});


$(document).ready( function (){
	
	$("#Dislikes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				dislikes010 : window.btoa(dislikes)
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});

}
////////////////////////////////////////////////////actor11//////////////////////////////////////////////////////////////

if (IDnumber == 11 ) { // left off here 

$(document).ready( function (){
	$("#vote").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				votes011 : window.btoa(votes) // sender to index.php 
			},
		
		function (data)
		{
			//$("#com").html(data)
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		})
	
});


$(document).ready( function (){
	
	$("#Likes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				Likes011: window.btoa(likes) // sender to index.php
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});


$(document).ready( function (){
	
	$("#Dislikes").click(function (){
		console.log("button");
		$.get("index.php",
		    {
				dislikes011: window.btoa(dislikes) // sender to index. php 
			},
		
		function (data02)
		{
			//$("#com").html(data)
			
			JsonTable = jQuery.parseJSON(data); 
			console.log(JsonTable.Actors1[1]);
			
		}
		);
		
		
		})
	
});

}
