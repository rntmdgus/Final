var bg, wheel1, wheel2, castel1, castel2, flag;

function setup(){
   createCanvas(2000,1000);

   bg = loadImage("bg.png");
   wheel1 = loadImage("wheel1.png");
   wheel2 = loadImage("wheel2.png"); 
   castel1 = loadImage("castel1.png");
   castel2 = loadImage("castel2.png"); 
   flag = loadImage("flag.png");
}


function draw(){

   background(bg);  

   var duration1 = 8000;
   var timing1 = (new Date()%duration1)/duration1;
   var duration2 = 7000;
   var timing2 = (new Date()%duration2)/duration2;
   
   noCursor();

   var t1 = (new Date()%15000)/15000;
   var t2 = (new Date()%6000)/6000;


   //깃발위아래
   image(falg,100,300+cos(t2*2*PI)*10,100,100);

   //관람차


   for(var i = 0 ; i < 8 ; i++){
      image(wheel1,1000+sin(t1*2*PI+2*PI/8*i)*250-100,500+cos(t1*2*PI+2*PI/8*i)*250-100,200,200);
   }

   for(var i = 0 ; i < 4 ; i++){
      image(wheel2,1000+sin(t1*2*PI+2*PI/4*i)*250-100,500+cos(t1*2*PI+2*PI/4*i)*250-100,200,200);
   }

   //라인
   //noFill();
   //stroke(255);
   //ellipse(500,500,500,500);

   //image(wheel1,1000 + Math.cos(timing1*2*PI)*250-100,500 + Math.sin(timing1*2*PI)*250-100,200,200);

}