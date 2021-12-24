//var cow
//var position;
var farmer;
var cowGroup;
var chickenGroup;
var chicken;
var cow;
var score ;
var pig;
var goat;
var pigGroup;
var fruit;
var lives;


function preload()   {
  bg = loadImage("images/bg1.png")
  cowImage = loadImage("images/cow4.png")
  roosterImg = loadImage("images/chicken1.png")
  farmerImg = loadImage("images/farmer2.png")
  cowImg1 = loadImage("images/cow12.png")
  pigImage = loadImage("images/pig.png")
  pigImg1 = loadImage("images/pig11.png")
  roosterImg1 = loadImage("images/chicken7.png")
  cowEatImg = loadImage("images/coweat.png")
}


function setup(){
  
  createCanvas(1600,800);

  score = 0;
  lives = 3;

  //cow = createSprite(800,600,10,10)
  //cow.addImage("cow1",cow)
  farmer = createSprite(10,10);
  farmer.scale = 0.5;

  fruit = createSprite(1000,510,30,30)
  fruit.visible = false;


  farmer.addImage(farmerImg);

  chickenGroup = new Group();
  cowGroup = new Group();
  pigGroup = new Group();
  



}

function draw(){
  background(bg);

  text("SCORE: "+ score, 1000,100);
  text("Lives: "+ score,900,100);

  farmer.x = mouseX  ;
  farmer.y = mouseY;

 text(mouseX+","+mouseY,mouseX,mouseY)

  spawnCows();
  spawnChicken();
  spawnPig();

  if (farmer.collide(chickenGroup))   {
    chickenGroup.setVelocityEach(3,0)
    chicken.addImage(roosterImg1)
    score = score+1;
  }

  if (farmer.collide(cowGroup))   {
     cowGroup.setVelocityEach(3,0)
     cow.addImage(cowImg1)
     score = score+1;
     cow.scale = 1;
  }

  if (farmer.collide(pigGroup))   {
    pigGroup.setVelocityEach(3,0)
    pig.addImage(pigImg1)
    score = score+1;
    pig.scale = 0.2
  }

  if (cowGroup.isTouching(fruit)) {
    cowGroup.setVelocityEach(0,0)
    //cowGroup.destroyEach();
    cow.x = fruit.x;
    cow.y = fruit.y;
    cow.addImage(cowEatImg)
    cow.scale = 0.3
    lives = lives-1 ;
  }

 // if (fruit.collide(cow))    {
     //score = score-1
     //cow.addImage(cowEatImg);
 // }

  


  

   drawSprites();
  
}

function spawnCows() {
  //write code here to spawn the clouds
  if (frameCount % 150 === 0) {
     cow = createSprite(1600,800,10,10);
    cow.y = Math.round(random(350,600));
    cow.addImage(cowImage);
    //cloud.scale = 0.5;
    cow.velocityX = -3;
    cow.scale = 1;
    cowGroup.add(cow);
    cow.lifetime = 400 ; 

  }}

  function spawnChicken() {
    //write code here to spawn the clouds
    if (frameCount % 150 === 0) {
       chicken = createSprite(1344,800,10,10);
      chicken.y = Math.round(random(400,600));
      chicken.addImage(roosterImg);
      //cloud.scale = 0.5;
      chicken.velocityX = -3;
      chickenGroup.add(chicken);
      chicken.scale = 0.2;
      
      chicken.lifetime = 400;
  
    }}

    
function spawnPig() {
  //write code here to spawn the clouds
  if (frameCount % 150 === 0) {
     pig = createSprite(1400,800,10,10);
    pig.y = Math.round(random(300,600));
    pig.addImage(pigImage);
    //cloud.scale = 0.5;
    pig.velocityX = -3;
    pig.scale = 0.2;
    pigGroup.add(pig);
    pig.lifetime = 400 ; 

  }}

