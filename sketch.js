var bg, wheel;

function setup(){
   bg = loadImage("bg.png");
   wheel = loadImage("wheel.png");
   createCanvas(1000,1000);
}


function draw(){
   background(bg);  
   Image(wheel,0,0,1000,1000)

   noCursor();
}