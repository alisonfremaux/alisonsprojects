console.log("test.....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//create the image 
var flying = new Image();
// set source 
flying.src = "flying.jpg"; 

flying.onload = function(){
	ctx.drawImage(flying, 150,150, 100,100);
}

//create the image 
var floating = new Image();
// set source 
floating.src = "floating.jpg"; 

floating.onload = function(){
	ctx.drawImage(floating, 100,100, 100,100);
}

//new one dont use above 

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

ctx2.fillStyle = "black"; 
ctx2.fillRect(0,0,800,350);

ctx2.fillStyle = "grey"; 
ctx2.fillRect(0,350,800,150);


