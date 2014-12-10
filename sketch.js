var bg, bg2, wheel1, wheel2, castel1, castel2, castel3, castel4, castel5, flag, countcastel;
var snow1, snow2, snow3, snow4;
var count1, count2, count3, count4;

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
   castel5 = loadImage("castel5.png");
   snow1 = loadImage("snow1.png");
   snow2 = loadImage("snow2.png");
   snow3 = loadImage("snow3.png");
   snow4 = loadImage("snow4.png");
   flag = loadImage("flag.png");

   count1 = 1500;
   count2 = 2000;
   count3 = 2500;
   count4 = 3000;

}


function draw(){

   background(bg);  
   noCursor();

   var t1 = (new Date()%15000)/15000;
   var t2 = (new Date()%4000)/4000;
   var t3 = (new Date()%2000)/2000;

   //깃발위아래
   image(flag,120,300+cos(t2*2*PI)*13,100,100);
   

   //성
   if(t3 <0.2){
    image(castel1,15,330,300,500);
   }else if(t3 <0.4){
    image(castel2,15,330,300,500);
   }else if(t3 <0.6){
    image(castel3,15,330,300,500);
   }else if(t3 <0.8){
    image(castel4,15,330,300,500);
   }else{
    image(castel5,15,330,300,500);
   } 



   image(bg2,0,0,2000,1000);



      //관람차
   for(var i = 0 ; i < 8 ; i++){
      image(wheel1,1000+sin(t1*2*PI+2*PI/8*i)*250-100,500+cos(t1*2*PI+2*PI/8*i)*250-100,200,200);
   }
   for(var i = 0 ; i < 4 ; i++){
      image(wheel2,1000+sin(t1*2*PI+2*PI/4*i)*250-100,500+cos(t1*2*PI+2*PI/4*i)*250-100,200,200);
   }

   drawsnow1(0+r,count1);
   var r=Math.random(2000,0);
   count1=count1+5;
   if(count1>1000){
   count1=0;
   } 

}

   function drawsnow1(x,y){
   image(snow1,x,y,50,50);
   }