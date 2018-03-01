console.log("test.....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var WIDTH = 600;
var HEIGHT = 400; 

var x, y; // coordinates x and y of the ball 
var mx, my; // movement in x and y directions for the ball 

// Initilization of the animation = kick start the updates 
function init(){
	x = 300; 
	y= 200;
	mx = 3; 
	my = 4; 
	setInterval(update, 10);
}

// Draw the circle on the screen 
function drawCircle(x, y, r){
	// draw circle at the point (x,y) with radius r from radius 0 to 6.2
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 6.28);
	ctx.stroke();
	ctx.fillstyle = "red";
	ctx.fill();
}

// update the position of the ball and draw the ball at that position
function update(){
	clear();
	drawCircle(x, y, 30);

//bouncing off the edges 
	if (x + mx > WIDTH || x + mx < 0){
		mx = -mx;
	}

	if (y + my > HEIGHT || y + my < 0){
		my = -my;
	}

// move the ball 
	x += mx; 
	y += my;
}


//Clear everything on our canvas 
function clear (){
	ctx.clearRect(0, 0, WIDTH, HEIGHT); 
}

init();







