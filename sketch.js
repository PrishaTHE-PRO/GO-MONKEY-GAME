var foodGroup;
var bananaImage;
var obstacle_img,obstacleGroup;
var backImage,BG;
var player_running;
var score=0;
var ground;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("Banana.png");
  obstacle_img=loadImage("stone.png");
}


function setup() {
  createCanvas(600,300);
  BG = createSprite(10,10,600,300);
  BG.addImage("jungle.jpg",backImage);
  BG.x = BG.width/2;
  BG.velocityX = -3;

  ground = createSprite(50,270,600,10);
  
  monkey = createSprite(70,200,10,10);
  monkey.addAnimation("running",player_running);
  monkey.scale=0.2;
 
  score=0;
  foodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw(){
 background(255);
  if(obstacleGroup.isTouching(monkey)){
  monkey.scale=0.1;
    obstacleGroup.destroyEach();
  }
  ground.visible=false;
  if(keyDown("space")){
  monkey.velocityY=-5;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  stroke("white");
  textSize(20);
  fill("white");
  
  if (BG.x < 100){
    BG.x = BG.width/2;
  }
  
  if(foodGroup.isTouching(monkey)){
  foodGroup.destroyEach();
    score=score+1;
  }
  switch(score){
    case 10: monkey.scale=0.12;
            break;
    case 15: monkey.scale=0.14;
            break;
    case 20: monkey.scale=0.16;
            break;   
    case 25: monkey.scale=0.18;
            break;    
    default: break;
            
  }
  monkey.collide(ground);
  spawnfood();
  spawnobstacle();
  drawSprites();
   text("Score: "+ score, 450,50);
}
function spawnfood(){
 if (frameCount % 70 === 0) {
    var food = createSprite(600,100);
    food.x = Math.round(random(50,600));
    food.addImage(bananaImage);
    food.scale = 0.07;
   food.velocityX=-3;
    food.lifetime=200;
   foodGroup.add(food);
  }
}
function spawnobstacle(){
if (frameCount % 160 === 0) {
var rock = createSprite(50,250,10,10);
  rock.x = Math.round(random(50,600));
  rock.addImage(obstacle_img);
  rock.scale = 0.2;
   rock.velocityX=-3;
    rock.lifetime=200;
   obstacleGroup.add(rock);
}
 }






