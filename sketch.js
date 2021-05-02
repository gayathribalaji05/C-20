var a,b;

function setup() {
  createCanvas(windowWidth,windowHeight);

  a=createSprite(400, 200, 50, 80);
  a.shapeColor="green";
  b= createSprite(700, 200, 80, 50);
  b.shapeColor="green";

}

function draw() {
  background("yellow");  
  b.x=World.mouseX;
  b.y=World.mouseY;
  
  if((b.x-a.x) < (a.width/2 + b.width/2)&&(a.x-b.x)< (b.width/2+a.width/2)&&(a.y-b.y)< (a.height/2+b.height/2)&&(b.y-a.y)<(b.height/2+a.height/2)){
    a.shapeColor="red";
    b.shapeColor="red";
  
  }
  else{
    a.shapeColor="green";
    b.shapeColor="green";

  }
  drawSprites();
}