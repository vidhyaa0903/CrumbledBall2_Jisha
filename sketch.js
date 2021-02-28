const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var D1, D2, D3, paper, ground;
function preload()
{
 	
}

function setup() 
{
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,670,width,20)
	D1= new Dustbin(1200,650);
	

   
	paper= new Paper (200,450,70);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("grey");

  
  
 // drawSprites();
 paper.display();
 ground.display();
 D1.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
	}
}