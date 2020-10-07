
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper,ground,box1,box2,box3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,200);
	World.add(world, paper);
	ground = new Ground(400,680,800,20);
	World.add(world, ground);
	box1 = new Box(600,650,200,20);
	World.add(world, box1);
	box2 = new Box(500,630,20,100);
	World.add(world, box2);
	box3 = new Box(700,630,20,100);
	World.add(world, box3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
  keyPressed();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
	}
}



