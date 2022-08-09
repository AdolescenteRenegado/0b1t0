
var forest;
var forestImg;
var kamui;
var obito;
var obitoRunning;
var pedra;
var pedraImg;
var preda2;
var preda2Img;

function preload(){
 forestImg = loadImage("forest.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  forest = createSprite(width/2,height/2);
  forest.addImage(forestImg);

 

  rectMode(CENTER);
  ellipseMode(RADIUS);

  
}

function draw(){
  background(51);
  forest.velocityX = -5;
  if (forest.x<0) {
  forest.x = width/2
  }
 
  drawSprites(); 
}
