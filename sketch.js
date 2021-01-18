var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX=-2
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX=2

  object1=createSprite(200,200,40,38)
  object1.shapeColor="blue"
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;         

 if (touch(object1,movingRect)){
    object1.shapeColor = "red";
  movingRect.shapeColor = "red";
 }
 else {
  
   object1.shapeColor = "green";
  movingRect.shapeColor = "green";

 }
 bb(fixedRect,movingRect)
  drawSprites();
}

