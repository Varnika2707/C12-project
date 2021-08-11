var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImage


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg= loadImage("apple.png")
  leafImg = loadImage("leaf.png")

}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  }
  
function draw() {
  background(0);
  
  //move the rabbit
  rabbit.x = World.mouseX
  
  var select_sprite = Math.round(random(1,2));
  if (frameCount % 80 === 0) {
    if(select_sprite === 1){
      spawnApples();
    }
    else{
      spawnLeaves();
    }
  }

  
   
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function spawnApples() {
 
    apple = createSprite(600,100,40,10);
    apple.x = Math.round(random(50,380));
    apple.addImage(appleImg);
    apple.scale = 0.04;
    apple.velocityY = 3;
    
     //assign lifetime to the variable
    apple.lifetime = 134;

  
}

function spawnLeaves() {

    leaf = createSprite(600,100,40,10);
    leaf.x = Math.round(random(50,380));
    leaf.addImage(leafImg);
    leaf.scale = 0.04;
    leaf.velocityY = 3;
    
     //assign lifetime to the variable
     leaf.lifetime = 134;

  
}