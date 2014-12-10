var bg, bg2, wheel1, wheel2, castel1, castel2, castel3, castel4, flag, countcastel;

function setup(){
   createCanvas(2000,1000);

   bg = loadImage("bg.png");
   bg2 = loadImage("bg2.png");
   wheel1 = loadImage("wheel1.png");
   wheel2 = loadImage("wheel2.png"); 
   castel1 = loadImage("castel1.png");
   castel2 = loadImage("castel2.png"); 
   castel3 = loadImage("castel3.png"); 
   castel4 = loadImage("castel4.png"); 
   flag = loadImage("flag.png");

}


function draw(){

   background(bg);  
   noCursor();

   var t1 = (new Date()%15000)/15000;
   var t2 = (new Date()%5000)/5000;
   var t3 = (new Date()%2000)/2000;

   //깃발위아래
   image(flag,120,300+cos(t2*2*PI)*10,100,100);
   

   //성
   if(t3 <0.25){
    image(castel1,20,330,300,500);
   }else if(t3 <0.5){
    image(castel2,20,330,300,500);
   }else if(t3 <0.75){
    image(castel3,20,330,300,500);
   }else{
    image(castel4,20,330,300,500);
   } 



   image(bg2,0,0,2000,1000);



      //관람차
   for(var i = 0 ; i < 8 ; i++){
      image(wheel1,1000+sin(t1*2*PI+2*PI/8*i)*250-100,500+cos(t1*2*PI+2*PI/8*i)*250-100,200,200);
   }
   for(var i = 0 ; i < 4 ; i++){
      image(wheel2,1000+sin(t1*2*PI+2*PI/4*i)*250-100,500+cos(t1*2*PI+2*PI/4*i)*250-100,200,200);
   }



}

