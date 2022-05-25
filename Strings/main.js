//find
var  text = document.getElementById("demo").innerHTML;
var result = text.includes("demo");

document.getElementById("demo").innerHTML = result;
//replace
var text = document.getElementById("demo").innerHTML;
 
document.getElementById("demo").innerHTML = text.replace("ipsum", "IPSUM");

//mark
