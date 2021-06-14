var bgImg;
var catImg1,catImg2,catImg4
var mouseImg1,mouseImg2,mouseImg4
function preload() {
bgImg=loadImage("garden.png")
catImg1=loadAnimation("cat1.png")
mouseImg1=loadAnimation("mouse1.png")
catImg2=loadAnimation("cat2.png","cat3.png")
mouseImg2=loadAnimation("mouse2.png","mouse3.png")
catImg4=loadAnimation("cat4.png")
mouseImg4=loadAnimation("mouse4.png")

    //load the images here
}

function setup(){
    createCanvas(1000,800);
cat=createSprite(900,600,70,70);
cat.addAnimation("cat",catImg1)
cat.scale=0.2
mouse=createSprite(200,600,40,40);
mouse.addAnimation("mouse",mouseImg1)
mouse.scale=0.2
    //create tom and jerry sprites here

}

function draw() {

    background(bgImg);
  if(cat.x - mouse.x <(cat.width - mouse.width)){
      cat.velocityX=0
      cat.addAnimation("cat4",catImg4)
      cat.changeAnimation("cat4")
      cat.x=300
      mouse.addAnimation("mouse4",mouseImg4)
      mouse.changeAnimation("mouse4")

  }

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW)
cat.velocityX=-5
cat.addAnimation("cat3",catImg2)
cat.changeAnimation("cat3")
mouse.addAnimation("mouseTeasing", mouseImg2);
mouse.changeAnimation("mouseTeasing")
mouse.frameDelay= 25;
  //For moving and changing animation write code here


}
