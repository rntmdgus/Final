var bg, bg2, wheel1, wheel2, castel1, castel2, castel3, castel4, castel5, flag, countcastel;
var snow1, snow2, snow3, snow4;
var count1, count2, count3, count4, count5, count6, count7, count8, count9, count10;

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

   drawsnow2(1450,count2);
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

   drawsnow8(800,count8);
   count8=count8+4;
   if(count8>1000){
   count8=0;
   } 

   drawsnow8(1250,count8);
   count8=count8+4;
   if(count8>1000){
   count8=0;
   } 

   drawsnow9(120,count9);
   count9=count9+4;
   if(count9>1000){
   count9=0;
   } 

   drawsnow9(1010,count9);
   count9=count9+4;
   if(count9>1000){
   count9=0;
   } 

   drawsnow10(1030,count10);
   count10=count10+4;
   if(count10>1000){
   count10=0;
   } 

   drawsnow10(1130,count10);
   count10=count10+4.5;
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