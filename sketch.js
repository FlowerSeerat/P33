const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var snowImg;
var penguine, penguineImg;
var snowman, snowmanImg;
var girl, girlImg;
var engine;
var world;
var snow=[];

function preload(){
  snowImg=loadImage("snow1.jpg");
  penguineImg=loadImage("imageedit_1_7779970366.png");
  girlImg=loadImage("imageedit_14_7021556102.png");
  snowmanImg=loadImage("snowman.png");
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  
  penguine=createSprite(550,250,20,20);
  penguine.addImage(penguineImg);
  penguine.scale=0.5;

  girl=createSprite(250,280,20,20);
  girl.addImage(girlImg);
  girl.scale=0.1;

  snowman=createSprite(100,250,20,20);
  snowman.addImage(snowmanImg);
  snowman.scale=0.5;


  for (var h = 0; h<10; h++) {
    snow[h]=new Snow(random(50,750),random(-10,-100),random(40,50),random(30,40));
 
  } 
}

function draw() {
  background(snowImg);
  Engine.update(engine); 

  noStroke();
  textSize(15);
  text("Use the arrow keys to move the characters.",15,15);
  
if(keyCode===LEFT_ARROW){
  girl.velocityX=-1;
  girl.velocityY=0;
}

if(keyCode===RIGHT_ARROW){
  girl.velocityX=1;
  girl.velocityY=0;
}

if(keyCode===DOWN_ARROW){
  penguine.velocityX=0;
  penguine.velocityY=1;
}

if(keyCode===UP_ARROW){
  penguine.velocityX=0;
  penguine.velocityY=-1;
}



  for (var h = 0; h<10; h++) {
    snow[h].display();
  }

drawSprites();
}
