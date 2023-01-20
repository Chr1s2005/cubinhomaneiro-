var Slime;

function setup() {
  Slime = createSprite(200,200,10,10);
  createCanvas(400,400);
  
}

function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW)){
    Slime.x += 5;
  }if(keyDown(LEFT_ARROW)){
    Slime.x -= 5;
  }if(keyDown(UP_ARROW)){
    Slime.y -= 5;
  }if(keyDown(DOWN_ARROW)){
    Slime.y += 5;
  }


  drawSprites();

}




