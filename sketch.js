var bananaImage, obstacleImage, obstacleGroup, bg, score, bananaImage_1, obstacleImage_1;

function preload() {
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("jungle.jpg");
  
}

function setup() {
  createCanvas(400, 400);

  bananaImage_1 = createSprite(200, 200, 20, 20);
  bananaImage_1.addImage(bananaImage);
  
}

function draw() {
  background(220);
  
  drawSprites();
}