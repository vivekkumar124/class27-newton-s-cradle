
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof (425,300,250,20);
	ballObject1 = new ball (340,470,20)
	ballObject2 = new ball (380,470,20)
	ballObject3 = new ball (420,470,20)
	ballObject4 = new ball (460,470,20)
	ballObject5 = new ball (500,470,20);
	rope1= new Rope(ballObject1.body,roof.body,-40*2, 0);
	rope2= new Rope(ballObject2.body,roof.body,-20*2,0);
	rope3= new Rope(ballObject3.body,roof.body,-0*2,0);
	rope4= new Rope(ballObject4.body,roof.body,20*2,0);
	rope5= new Rope(ballObject5.body,roof.body,40*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMo=(CENTER);
  background(255);
  
  roof.display()
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ballObject1.display();
ballObject2.display();
ballObject3.display();
ballObject4.display();
ballObject5.display();
  
}

function drawLine (constraint) {
	ballBodyPosition = constraint.bodyA.position;    
	roofBodyPosition = constraint.bodyB.position;
	roofBodyOffset = constraint.pointB;
	roofBodyX= roofBodyPositiion.x + roofBodyOffset.x;
	roofBodyY= roofBodyPosition.y + roofBodyOffset.y; 
	line(ballBodyPosition.x, ballBodyPosition.y, roofBodyX, roofBodyY);           
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ballObject1.body, ballObject1.body.position, {x: -50, y:-45});
	}
}

