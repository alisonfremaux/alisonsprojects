var game = new Phaser.Game(800,600, Phaser.AUTO, '',
	{preload:preload, create: create, update:update});

var score = 0; 
var life = 3; 

function preload(){
	game.load.image('sky','assets/sky.png'); 
	game.load.image('ground', 'assets/platform.png');
	game.load.spritesheet('dude', 'assests/baddie.png', 32,32); 
	game.load.spritesheet('baddie', 'assests/baddie.png',32,32);

}
function create(){

}
function create(){

}
