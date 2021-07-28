var seaImg;
var shipImg1, ship;
var sea;

function preload(){
seaImg = loadImage("sea.png");
shipImg1  = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200, 210, 20, 20);
  sea.addImage(seaImg);
  sea.scale = 0.2;


  ship = createSprite(200, 200, 30, 30);
  ship.addAnimation("floating", shipImg1);
  ship.scale = 0.2;
  



 
}

function draw() {
  background("white");
  if (sea.x<0){
  sea.x = 200;
  }
  if (sea.x>400){
    sea.x = 200;
    }
  if (keyDown("right")){
  sea.velocityX = -2.5;
  }
 
  if (keyDown("left")){
    sea.velocityX = 2.5;
  }

 drawSprites();
}