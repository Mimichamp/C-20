var object1,object2;

function setup() {
  createCanvas(800,400);
  object1 = createSprite(400, 200, 50, 50);
  object2 = createSprite(100,200,50,50);
  
  object2.velocityX = 4;
}

function draw() {
  background("White"); 
  
  //object2.x = World.mouseX;
  //object2.y = World.mouseY;
  
if(object1.x-object2.x<object1.width/2+object2.width/2&&object2.x-object1.x<object1.width/2+object2.width/2&&
  object1.y-object2.y<object1.height/2+object2.height/2&&object2.y-object1.y<object1.height/2+object2.height/2){

    object1.shapeColor="pink";
    object2.shapeColor="pink";
  }
  else{
    object1.shapeColor="red";
    object2.shapeColor="red";
  }
if(object1.x-object2.x<object1.width/2+object2.width/2&&object2.x-object1.x<object1.width/2+object2.width/2){

    object2.velocityX=-object2.velocityX;

  }
  drawSprites();
}