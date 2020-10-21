
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball,count=1;
var dustbinM,dustbinL,dustbinR;
var standGroup,standers=[];
function preload()
{
	standGroup=new Group();
	backImg=loadImage("images/bg2.png");
}

 function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,height-165,1200,10);
	ball=new Ball(50,height-200,15);
	for(var p=40;p<=width;p+=50){
		standers.push(new Stander(random(width/2-10,width/2+10),50,10));
	}
	Engine.run(engine);

 }


 function draw() {
   rectMode(CENTER);
   Engine.update(engine);
   background(backImg);


	ground.display();
	ball.display();
	//play();
	// if(frameCount%60===0){
	// 	standers.push(new Stander(random(width/2-10,width/2+10),50,10));
	//    }
	for(var pr=0;pr<standers.length;++pr){
		standers[pr].display();
	  }
	
	drawSprites();
	fill("white");
	textSize(25);
	  text("HINT 1 : USE OF SPACE key for JUMP ",200,20);
	  text("HINT 1 : USE OF LEFT-RIGHT key to move ",200,60);
}
function keyPressed(){
	if (keyCode===32) {
		Body.applyForce(ball.body,ball.body.position,{x:0,y:-20});
	}
	
	if (keyCode===RIGHT_ARROW) {
		Body.applyForce(ball.body,ball.body.position,{x:20,y:0});
	}
	if (keyCode===LEFT_ARROW) {
		Body.applyForce(ball.body,ball.body.position,{x:-20,y:0});
	}
}
