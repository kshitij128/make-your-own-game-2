
var chick2,chick2Img;
var chick3,chick3Img;
var chick4,chick4Img;
var hen,henImg;

function preload(){
  chickImg= loadImage("chiks img/images (2).png");
  chick2Img= loadImage("chiks img/images (2).png");
  chick3Img= loadImage("chiks img/images (2).png");
  chick4Img= loadImage("chiks img/images (2).png");
  henImg=loadImage("hen img/hen1.gif");

}
function setup() {
  createCanvas(800,800);
  chick2= createSprite(730,730,10,10);
  chick2.addImage(chick2Img);
  chick2.scale=0.5;

  chick3=createSprite(600,650,10,10);
  chick3.addImage(chick3Img);
  chick3.scale=0.5;

  chick4=createSprite(470,730,10,10);
  chick4.addImage(chick4Img);
  chick4.scale=0.5;


  hen=createSprite(110,110,10,10);
  hen.addImage(henImg);
  hen.scale=0.5;


  

}

function draw() {
  background(0);  
 
  if(keyDown("UP_ARROW")){
    hen.y=hen.y-5;
  }
  if(keyDown("DOWN_ARROW")){
    hen.y=hen.y+5;
  }
  if(keyDown("RIGHT_ARROW")){
    hen.x=hen.x+5;
  }
  if(keyDown("LEFT_ARROW")){
    hen.x=hen.x-5;
  }
 // console.log(hen.y);
  drawSprites();
}
