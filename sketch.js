var bg, bg2, wheel1, wheel2, castel1, castel2, castel3, castel4, castel5, flag, countcastel;
var snow1, snow2, snow3, snow4;
var count1, count2, count3, count4;
var dir1=1;

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
   image(flag,120,300+cos(t2*2*PI)*12,100,100);
   

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


//   drawsnow1(0,count1);
//   count1=count1+5;
//   if(count1>1000){
//   count1=0;
//   } 


}

function drawSnow(){
    var r=Math.random();
    stroke(255,255,255,128);
    strokeWeight(20);

    fill(255);
    ellipse(700,dir1,50,50);
    ellipse(100,dir1+500,20,20);
    ellipse(200,dir1+r,30,30);
    ellipse(300,dir1+800,25,25);
    ellipse(400,dir1+100,20,20);
    ellipse(500,dir1+350,34,34);
    ellipse(600,dir1+270,47,47);
    ellipse(800,dir1+900,25,25);
    ellipse(900,dir1+670,34,34);
    ellipse(1000,dir1+230,17,17);
    ellipse(1100,dir1+590,28,28);
    ellipse(1200,dir1+312,33,33);
    ellipse(1300,dir1+100,50,50);
    ellipse(1400,dir1+400,27,27);
    ellipse(1500,dir1+777,35,35);
    dir1=dir1+3;     
    if(dir1>1700){
     dir1=-1700;
 }