var bg, wheel, wheel1, wheel2, wheel3, wheel4, wheel5, wheel6, wheel7, wheel8;
var allwheel=[];
var sizeX=500;
var sizeY=500;
var X=[];
var Y=[];

function setup(){
   createCanvas(1000,1000);

   bg = loadImage("bg.png");
   wheel = loadImage("wheel.png");
   allwheel[0]=loadImage("wheel1.png");
   allwheel[1]=loadImage("wheel2.png"); 
   allwheel[2]=loadImage("wheel3.png");
   allwheel[3]=loadImage("wheel4.png");
   allwheel[4]=loadImage("wheel5.png");
   allwheel[5]=loadImage("wheel6.png");
   allwheel[6]=loadImage("wheel7.png");
   allwheel[7]=loadImage("wheel8.png");
}


function draw(){
   background(bg);  
   image(wheel,0,0,1000,1000);
   image(wheel1,0,0,200,200);
   
   noCursor();

   //라인
   noFill();
   stroke(255);
   ellipse(500,500,500,500);


   for(var i = 0 ; i < 8 ; i++){
      X[i]=500+cos(t*2*PI+PI/6*i)*500;
      Y[i]=500*sin(t*2*PI+PI/6*i);
   }


   for(var i = 0 ; i <8 ; i++){
      if(50*sin(t*2*PI+PI/6*i)<0){
            image(allwheelImg[i],X[i]-sizeX/2,Y[i]-sizeY/2,200,200);
      }
   }

}