var bg, wheel, wheel1;

function setup(){
   bg = loadImage("bg.png");
   wheel = loadImage("wheel.png");
   wheel1 = loadImage("wheel1.png");
   createCanvas(1000,1000);
}


function draw(){
   background(bg);  
   image(wheel,0,0,1000,1000);
   image(wheel1,0,0,200,200);
   
   noCursor();

   라인
   noFill();
   stroke(255);
   ellipse(500,500,500,500);
}