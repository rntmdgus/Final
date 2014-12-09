var bg, wheel, wheel1, wheel2, wheel3, wheel4, wheel5, wheel6, wheel7, wheel8;

function setup(){
   createCanvas(1000,1000);

   bg = loadImage("bg.png");
   wheel = loadImage("wheel.png");
   wheel1 = loadImage("wheel1.png");
   wheel2 = loadImage("wheel2.png"); 
   wheel3 = loadImage("wheel3.png"); 
   wheel4 = loadImage("wheel4.png"); 
   wheel5 = loadImage("wheel5.png"); 
   wheel6 = loadImage("wheel6.png"); 
   wheel7 = loadImage("wheel7.png"); 
   wheel8 = loadImage("wheel8.png"); 
}


function draw(){
   background(bg);  
   image(wheel,0,0,1000,1000);

   var duration1 = 8000;
   var timing1 = (new Date()%duration1)/duration1;
   var duration2 = 7000;
   var timing2 = (new Date()%duration2)/duration2;
   
   noCursor();

   //라인
   //noFill();
   //stroke(255);
   //ellipse(500,500,500,500);

   image(wheel1,500 + Math.cos(timing1*2*PI)*230-100,500 + Math.sin(timing1*2*PI)*230-100,200,200);

}