

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rect1Sprite=createSprite(550,880,25,100)
	rect1Sprite.shapeColor="red"

	rect2Sprite=createSprite(650,800,150,25)
	rect2Sprite.shapeColor="red"

	rect3Sprite=createSprite(660,610,25,100)
	rect3Sprite.shapeColor="red"



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
 
	
	
	 rect1=Bodies.rectangle(500,610,25,100,{isStatic:true})
     World.add(world,rect1)

	 rect2=Bodies.rectangle(585,647,150,25,{isStatic:true})
	 World.add(world,rect2)

	 rect3=Bodies.rectangle(660,610,25,100,{isStatic:true})
	 World.add(world,rect3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  rect1Sprite.x=rect1.position.x
  rect1Sprite.y=rect1.position.y

  rect2Sprite.x=rect2.position.x
  rect2Sprite.y=rect2.position.y

  rect3Sprite.x=rect3.position.x
  rect3Sprite.y=rect3.position.y

  //rect1Sprite.debug=true;

  console.log(mouseX+","+mouseY)




  drawSprites();

  text(mouseX+","+mouseY,100,100)

  if (packageSprite.x>500 && packageSprite.x<660 &&packageSprite.y>610){
	textSize(30)
	fill("blue")  
	text("YOU WIN!!!!!,200,300")
  }

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    Matter.Body.setStatic(packageBody,false)
	
  }
if (keyCode === RIGHT_ARROW){
	helicopterSprite.x=helicopterSprite.x+20
	
	if(packageBody.position.y<260){
	Matter.Body.translate(packageBody,{x:20,y:0})
	}
	}

  if (keyCode === LEFT_ARROW){
	  helicopterSprite.x=helicopterSprite.x-20
if (packageBody.position.y<260){
	  Matter.Body.translate(packageBody,{x:-20,y:0})
  }
}
}



