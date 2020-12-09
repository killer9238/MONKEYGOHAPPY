
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(70,330,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  ground = createSprite(300,365,900,10);
  ground.velocityX=-5;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  survivaltime=0;
}


function draw() {
  background("lightblue");
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivaltime,100,50);
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
    monkey.velocityY=-15;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  bananas();
  rocks();
  drawSprites();
  
}

function bananas(){
  if(frameCount%80===0){
    banana = createSprite(400,320,20,20);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=100;
  }
}

function rocks(){
  if(frameCount%300===0){
    rock = createSprite(400,345,20,20);
    rock.velocityX=-7;
    rock.addImage(obstaceImage);
    rock.scale=0.1;
    rock.lifetime=100;
  }
}




