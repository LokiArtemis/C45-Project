
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var bird;
function setup() {
	createCanvas(400, 600);
 bird=new Bird();

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  bird.update();
  bird.show();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyDown("SPACE")){
	bird.up();
		//console.log("SPACE");
	}
}


