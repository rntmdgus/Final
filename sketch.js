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

   var duration1 = 7000;
   var timing1 = (new Date()%duration1)/duration1;
   var duration2 = 6000;
   var timing2 = (new Date()%duration2)/duration2;
   
   noCursor();

   //라인
   //noFill();
   //stroke(255);
   //ellipse(500,500,500,500);


   image(allwheel[i],500 + Math.cos(timing1*2*PI)*500 + Math.cos(timing2*4*PI)*500-100,
      500 + Math.sin(timing1*2*PI)*500 + Math.sin(timing2*4*PI)*500-100,200,200);

}