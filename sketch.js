
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =  Matter.Constraint;

function preload()
{
	polyImg = loadImage("polygon.png");
}

function setup() {
	createCanvas(1000, 400);
	
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);

  
	//Create the Bodies Here.
    base1 = new Base(400,300,280,20);
	base2 = new Base(800,200,200,20);
    base3 = new Base(500,370,1000,20);
    
	//level1
    box1 = new Box(310,270,30,40);
    box2 = new Box(340,270,30,40);
	box3 = new Box(370,270,30,40);
	box4 = new Box(400,270,30,40);
	box5 = new Box(430,270,30,40);
	box6 = new Box(460,270,30,40);
	box7 = new Box(490,270,30,40);

	//level2
	box8 = new Box(340,220,30,40);
	box9 = new Box(370,220,30,40);
	box10 = new Box(400,220,30,40);
	box11 = new Box(430,220,30,40);
	box12 = new Box(460,220,30,40);

    //level3
    box13 = new Box(370,180,30,40);
    box14 = new Box(400,180,30,40);
    box15 = new Box(430,180,30,40);

    //level4
    box16 = new Box(400,150,30,40);
    
    //level1
    box18 = new Box(740,160,30,40);
    box19 = new Box(770,160,30,40);
    box20 = new Box(800,160,30,40);
    box21 = new Box(830,160,30,40);
    box22 = new Box(860,160,30,40);

    //level2
    box23 = new Box(770,140,30,40);
    box24 = new Box(800,140,30,40);
    box25 = new Box(830,140,30,40);
    
    //level3
    box26 = new Box(800,80,30,40);

    ball = Bodies.circle(50, 200, 20);
    World.add(world, ball);

    slingshot1 = new SlingShot(this.ball, {x: 100, y: 200});

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("yellow");
  textSize(25);
  text("drag the yellow hexagon and aim at the blocks to knock them off",100,30);
  text("press space to get another chance",500,350)
  
  fill("blue");
  base1.display();
  base2.display();
  base3.display();

  fill("yellow");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill("orange")
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill("red")
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  fill("yellow");
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();

  fill("orange");
  box23.display();
  box24.display();
  box25.display();
 
  fill("red");
  box26.display();
  
  imageMode(CENTER);
  image(polyImg, ball.position.x, ball.position.y, 40, 40);

  slingshot1.display();

}

function mouseDragged() {
    Matter.Body.setPosition(this.ball, { x:mouseX, y:mouseY });
  }
function mouseReleased() {
    slingshot1.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot1.attach(this.ball);
    }
} 

