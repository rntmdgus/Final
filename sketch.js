var bg, wheel1, wheel2, castel1, castel2, castel3, flag, countcastel;

function setup(){
   createCanvas(2000,1000);

   bg = loadImage("bg.png");
   wheel1 = loadImage("wheel1.png");
   wheel2 = loadImage("wheel2.png"); 
   castel1 = loadImage("castel1.png");
   castel2 = loadImage("castel2.png"); 
   castel3 = loadImage("castel3.png");
   flag = loadImage("flag.png");

}


function draw(){

   background(bg);  
   noCursor();

   var t1 = (new Date()%15000)/15000;
   var t2 = (new Date()%5000)/5000;

   var tf = (new Date()%6000)/6000;

   //관람차
   for(var i = 0 ; i < 8 ; i++){
      image(wheel1,1000+sin(t1*2*PI+2*PI/8*i)*250-100,500+cos(t1*2*PI+2*PI/8*i)*250-100,200,200);
   }




   for(var i = 0 ; i < 4 ; i++){
      image(wheel2,1000+sin(t1*2*PI+2*PI/4*i)*250-100,500+cos(t1*2*PI+2*PI/4*i)*250-100,200,200);
   }


   //깃발위아래
   image(flag,100,300+cos(t2*2*PI)*10,100,100);
   

   //성
   if(tf <0.5){
    image(castel1,100,300,300,500);
   }else if(tf <1.0){
    image(castel2,100,300,300,500);
   }else{
    image(castel3,100,300,300,500);
   } 




}

