
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var paper
var dustbin1,dustbin2,dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin1=new Dustbin(700,595,10,100)
	dustbin2=new Dustbin(805,640,200,10)
	dustbin3=new Dustbin(910,595,10,100)

	paper=new Paper(150,600)


	ground=new Ground(500,650,1000,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:800,y:-800})
	}
}


