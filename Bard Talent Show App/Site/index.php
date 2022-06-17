
<?php
/*

$host="mysql3.000webhost.com";    //replace with your hostname 
$username="a9626870_BardSt";     //replace with your username 
$password="site01";             //replace with your password 
$db_name="a9626870_Bard";

*/

$host="fdb5.awardspace.net";                 
$username="1804084_bard";    
$password="bard100^";            
$db_name="1804084_bard";            
$con=mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_select_db("$db_name") or die ("cannot select DB"); 
$sql = "select * from Actors";    //replace with your table name 
$result = mysql_query($sql); 
$json = array(); 
$count=0; 
if(mysql_num_rows($result)){ 
while($row=mysql_fetch_row($result)) { 
$count = $count+1; 
$json["Actors".$count]=$row; 
} 

//$openWindow = "<script>window.open('home.html','_self')</script>";

//echo $openWindow;


} 
//mysql_close($db_name); 
echo json_encode($json); 
/////////////geting infomation back/////////////////////////////

if (isset($_POST)){
//echo "Hellow";
$mydata = $_POST['vote001'];
//echo $mydata;
}



//echo($votes01);
/// get the votes #1 //////////////////

if (isset($_GET)){

$votes01 = base64_decode($_GET["votes01"]);

echo ($votes01);


mysql_query("UPDATE Actors SET votes = $votes01 WHERE id = 1");


}


if (isset($_GET)){

$Likes01 = base64_decode($_GET["Likes01"]);

echo ($Likes01);


mysql_query("UPDATE Actors SET likes = $Likes01 WHERE id = 1");


}


if (isset($_GET)){

$dislikes01 = base64_decode($_GET["dislikes01"]);

echo ($dislikes01);


mysql_query("UPDATE Actors SET dislikes = $dislikes01 WHERE id = 1");


}
//////////#person02///////////


if (isset($_GET)){

$votes02 = base64_decode($_GET["votes02"]);

echo ($dislikes01);


mysql_query("UPDATE Actors SET votes = $votes02 WHERE id = 2");


}

if (isset($_GET)){

$Likes02 = base64_decode($_GET["Likes02"]);

echo ($Likes02);


mysql_query("UPDATE Actors SET likes = $Likes02 WHERE id = 2");


}


if (isset($_GET)){

$dislikes02 = base64_decode($_GET["dislikes02"]);

echo ($dislikes02);


mysql_query("UPDATE Actors SET dislikes = $dislikes02 WHERE id = 2");


}
/////////person 3 ///////////////


if (isset($_GET)){

$votes03 = base64_decode($_GET["votes03"]);

//echo ($dislikes01);


mysql_query("UPDATE Actors SET votes = $votes03 WHERE id = 3");


}

if (isset($_GET)){

$Likes03 = base64_decode($_GET["Likes03"]);

echo ($Likes03);


mysql_query("UPDATE Actors SET likes = $Likes03 WHERE id = 3");


}


if (isset($_GET)){

$dislikes03 = base64_decode($_GET["dislikes03"]);

echo ($dislikes03);


mysql_query("UPDATE Actors SET dislikes = $dislikes03 WHERE id = 3");


}


///////////////////person4////////////////////////////


if (isset($_GET)){

$votes04 = base64_decode($_GET["votes04"]);

echo ($dislikes04);


mysql_query("UPDATE Actors SET votes = $votes04 WHERE id = 4");


}

if (isset($_GET)){

$Likes04 = base64_decode($_GET["Likes04"]);

echo ($Likes04);


mysql_query("UPDATE Actors SET likes = $Likes04 WHERE id = 4");


}


if (isset($_GET)){

$dislikes04 = base64_decode($_GET["dislikes04"]);

echo ($dislikes01);


mysql_query("UPDATE Actors SET dislikes = $dislikes04 WHERE id = 4");


}

/////////////////////person5///////////////////////////////


if (isset($_GET)){

$votes05 = base64_decode($_GET["votes05"]);

echo ($dislikes05);


mysql_query("UPDATE Actors SET votes = $votes05 WHERE id = 5");


}

if (isset($_GET)){

$Likes05 = base64_decode($_GET["Likes05"]);

echo ($Likes06);


mysql_query("UPDATE Actors SET likes = $Likes05 WHERE id = 5");


}


if (isset($_GET)){

$dislikes05 = base64_decode($_GET["dislikes05"]);

echo ($dislikes05);


mysql_query("UPDATE Actors SET dislikes = $dislikes05 WHERE id = 5");


}


////////////////////person6//////////////////////////////////////


if (isset($_GET)){

$votes06 = base64_decode($_GET["votes06"]);

echo ($dislikes06);


mysql_query("UPDATE Actors SET votes = $votes06 WHERE id = 6");


}

if (isset($_GET)){

$Likes06 = base64_decode($_GET["Likes06"]);

echo ($Likes06);


mysql_query("UPDATE Actors SET likes = $Likes06 WHERE id = 6");


}


if (isset($_GET)){

$dislikes06 = base64_decode($_GET["dislikes06"]);

echo ($dislikes06);


mysql_query("UPDATE Actors SET dislikes = $dislikes06 WHERE id = 6");


}
///////////////////////person07////////////////////////////////////////



if (isset($_GET)){

$votes07 = base64_decode($_GET["votes07"]);

echo ($dislikes07);


mysql_query("UPDATE Actors SET votes = $votes07 WHERE id = 7");


}

if (isset($_GET)){

$Likes07 = base64_decode($_GET["Likes07"]);

echo ($Likes07);


mysql_query("UPDATE Actors SET likes = $Likes07 WHERE id = 7");


}


if (isset($_GET)){

$dislikes07 = base64_decode($_GET["dislikes07"]);

echo ($dislikes07);


mysql_query("UPDATE Actors SET dislikes = $dislikes07 WHERE id = 7");


}


////////////////////////person8///////////////////////////////////



if (isset($_GET)){

$votes08 = base64_decode($_GET["votes08"]);

echo ($dislikes08);


mysql_query("UPDATE Actors SET votes = $votes08 WHERE id = 8");


}

if (isset($_GET)){

$Likes08 = base64_decode($_GET["Likes08"]);

echo ($Likes08);


mysql_query("UPDATE Actors SET likes = $Likes08 WHERE id = 8");


}


if (isset($_GET)){

$dislikes08 = base64_decode($_GET["dislikes08"]);

echo ($dislikes08);


mysql_query("UPDATE Actors SET dislikes = $dislikes08 WHERE id = 8");


}



/////////////////////person9////////////////////////////////////////////


if (isset($_GET)){

$votes09 = base64_decode($_GET["votes09"]);

echo ($dislikes09);


mysql_query("UPDATE Actors SET votes = $votes09 WHERE id = 9");


}

if (isset($_GET)){

$Likes09 = base64_decode($_GET["Likes09"]);

echo ($Likes06);


mysql_query("UPDATE Actors SET likes = $Likes09 WHERE id = 9");


}


if (isset($_GET)){

$dislikes09 = base64_decode($_GET["dislikes09"]);

echo ($dislikes09);


mysql_query("UPDATE Actors SET dislikes = $dislikes09 WHERE id = 9");


}

//////////////////////////////////person10/////////////////////////////////

if (isset($_GET)){

$votes010 = base64_decode($_GET["votes010"]);

echo ($dislikes010);


mysql_query("UPDATE Actors SET votes = $votes010 WHERE id = 10");


}

if (isset($_GET)){

$Likes010 = base64_decode($_GET["Likes010"]);

echo ($Likes010);


mysql_query("UPDATE Actors SET likes = $Likes010 WHERE id = 10");


}


if (isset($_GET)){

$dislikes010 = base64_decode($_GET["dislikes010"]);

echo ($dislikes010);


mysql_query("UPDATE Actors SET dislikes = $dislikes010 WHERE id = 10");


}

/////////////////////////////////person011/////////////////////////////////////////////


if (isset($_GET)){

$votes011 = base64_decode($_GET["votes011"]);

echo ($dislikes011);


mysql_query("UPDATE Actors SET votes = $votes011 WHERE id = 11");


}

if (isset($_GET)){

$Likes011 = base64_decode($_GET["Likes011"]);

echo ($Likes011);


mysql_query("UPDATE Actors SET likes = $Likes011 WHERE id = 11");


}


if (isset($_GET)){

$dislikes011 = base64_decode($_GET["dislikes011"]);

echo ($dislikes011);


mysql_query("UPDATE Actors SET dislikes = $dislikes011 WHERE id = 11");


}
 /// insertion into the server/// 



?> 