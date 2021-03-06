var bg, bg21, bg22, bg23, bg3, wheel1, wheel2, castel1, castel2, castel3, castel4, castel5, humen1, humen2, flag1, flag2, countcastel;
var coaster, circus1, circus2;
var snow1, snow2, snow3, snow4;
var count1, count2, count3, count4, count5, count6, count7, count8, count9, count10;

function setup(){
   createCanvas(2000,1000);

   bg = loadImage("bg.png");
   bg21 = loadImage("bg21.png");
   bg22 = loadImage("bg22.png");
   bg22 = loadImage("bg23.png");
   bg3 = loadImage("bg3.png");
   wheel1 = loadImage("wheel1.png");
   wheel2 = loadImage("wheel2.png"); 
   castel1 = loadImage("castel1.png");
   castel2 = loadImage("castel2.png"); 
   castel3 = loadImage("castel3.png"); 
   castel4 = loadImage("castel4.png"); 
   castel5 = loadImage("castel5.png");
   circus1 = loadImage("circus1.png");
   circus2 = loadImage("circus2.png");
   coaster = loadImage("coaster.png");
   humen1 = loadImage("humen1.png");
   humen2 = loadImage("humen2.png");
   snow1 = loadImage("snow1.png");
   snow2 = loadImage("snow2.png");
   snow3 = loadImage("snow3.png");
   snow4 = loadImage("snow4.png");
   flag1 = loadImage("flag1.png");
   flag2 = loadImage("flag2.png");

   count1 = 0;
   count2 = 0;
   count3 = 0;
   count4 = 0;
   count5 = 0;
   count6 = 0;
   count7 = 0;
   count8 = 0;
   count9 = 0;
   count10 = 0;
}



function draw(){

   //배경
   background(bg);  
   noCursor();

   var t1 = (new Date()%15000)/15000;
   var t2 = (new Date()%4000)/4000;
   var t3 = (new Date()%2000)/2000;
   var t4 = (new Date()%3000)/3000;
   var t5 = (new Date()%2500)/2500;

   //깃발위아래
   image(flag1,120,300+cos(t2*2*PI)*12,100,100);
   

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


   //롤러 코스터
   image(coaster,0,0,2000,1000);


   //배경
   if(t5 <0.5){
    image(bg21,0,0,2000,1000);
   }else{
    image(bg22,0,0,2000,1000);
   } 


   //관람차
   for(var i = 0 ; i < 8 ; i++){
      image(wheel1,750+sin(t1*2*PI+2*PI/8*i)*250-100,500+cos(t1*2*PI+2*PI/8*i)*250-100,200,200);
   }
   for(var i = 0 ; i < 4 ; i++){
      image(wheel2,750+sin(t1*2*PI+2*PI/4*i)*250-100,500+cos(t1*2*PI+2*PI/4*i)*250-100,200,200);
   }


   //서커스 깃발위아래
   image(flag2,0,0+cos(t2*3*PI)*10,2000,1000);
   image(flag2,0,0+cos(t2*3*PI)*10,2000,1000);


   //써커스
   if(t4 <0.5){
    image(circus1,0,0,2000,1000);
   }else{
    image(circus2,0,0,2000,1000);
   } 


   var t=(new Date()%20000)/20000;

   //사람
   if(500*sin(t*2*PI)<0){
      image(humen1,1450+cos(t*2*PI)*250-100,850+sin(t*2*PI)*20-100,200,200);
   }
   if(500*sin(t*2*PI)>=0){
      image(humen2,1450+cos(t*2*PI)*250-100,850+sin(t*2*PI)*20-100,200,200);
   }


   //빙판아래부분
   image(bg3,0,0,2000,1000)


   //눈
   drawsnow1(100,count1);
   count1=count1+2;
   if(count1>1000){
   count1=0;
   } 

   drawsnow1(700,count1);
   count1=count1+2;
   if(count1>1000){
   count1=0;
   } 

   drawsnow1(1100,count1);
   count1=count1+2;
   if(count1>1000){
   count1=0;
   } 

   drawsnow2(1400,count2);
   count2=count2+3;
   if(count2>1000){
   count2=0;
   } 

   drawsnow2(50,count2);
   count2=count2+3;
   if(count2>1000){
   count2=0;
   } 

   drawsnow2(750,count2);
   count2=count2+3;
   if(count2>1000){
   count2=0;
   }

   drawsnow3(1350,count3);
   count3=count3+4;
   if(count3>1000){
   count3=0;
   } 

   drawsnow3(150,count3);
   count3=count3+4;
   if(count3>1000){
   count3=0;
   } 

   drawsnow3(650,count3);
   count3=count3+4;
   if(count3>1000){
   count3=0;
   } 

   drawsnow4(1150,count4);
   count4=count4+5;
   if(count4>1000){
   count4=0;
   } 

   drawsnow4(310,count4);
   count4=count4+5;
   if(count4>1000){
   count4=0;
   } 

   drawsnow4(1900,count4);
   count4=count4+5;
   if(count4>1000){
   count4=0;
   } 

   drawsnow5(1700,count5);
   count5=count5+4;
   if(count5>1000){
   count5=0;
   } 

   drawsnow5(550,count5);
   count5=count5+4;
   if(count5>1000){
   count5=0;
   } 

   drawsnow6(1400,count6);
   count6=count6+5;
   if(count6>1000){
   count6=0;
   }

   drawsnow6(650,count6);
   count6=count6+5;
   if(count6>1000){
   count6=0;
   }

   drawsnow7(300,count7);
   count7=count7+3;
   if(count7>1000){
   count7=0;
   }

   drawsnow7(1400,count7);
   count7=count7+3;
   if(count7>1000){
   count7=0;
   }  

   drawsnow8(600,count8);
   count8=count8+4;
   if(count8>1000){
   count8=0;
   } 

   drawsnow8(1450,count8);
   count8=count8+4;
   if(count8>1000){
   count8=0;
   } 

   drawsnow9(120,count9);
   count9=count9+2;
   if(count9>1000){
   count9=0;
   } 

   drawsnow9(1010,count9);
   count9=count9+2;
   if(count9>1000){
   count9=0;
   } 

   drawsnow10(300,count10);
   count10=count10+6;
   if(count10>1000){
   count10=0;
   } 

   drawsnow10(1800,count10);
   count10=count10+6;
   if(count10>1000){
   count10=0;
   } 

}

   function drawsnow1(x,y){
   image(snow1,x,y,50,50);
   }

   function drawsnow2(x,y){
   image(snow1,x,y,40,40);
   }   

   function drawsnow3(x,y){
   image(snow1,x,y,35,35);
   }

   function drawsnow4(x,y){
   image(snow1,x,y,30,30);
   }

   function drawsnow5(x,y){
   image(snow2,x,y,60,60);
   }

   function drawsnow6(x,y){
   image(snow2,x,y,40,40);
   }

   function drawsnow7(x,y){
   image(snow3,x,y,30,30);
   }

   function drawsnow8(x,y){
   image(snow3,x,y,20,20);
   }

   function drawsnow9(x,y){
   image(snow4,x,y,10,10);
   }

   function drawsnow10(x,y){
   image(snow4,x,y,15,15);
   }