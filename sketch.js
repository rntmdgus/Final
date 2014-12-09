var bg, wheel1, wheel2, castel1, castel2, flag, countcastel;

function setup(){
   createCanvas(2000,1000);

   bg = loadImage("bg.png");
   wheel1 = loadImage("wheel1.png");
   wheel2 = loadImage("wheel2.png"); 
   castel1 = loadImage("castel1.png");
   castel2 = loadImage("castel2.png"); 
   flag = loadImage("flag.png");

   countcastel=0;
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

   //성
   if(countcastel < 50){
   //성1
   image(castel1,0,100,300);
   } else if(countcastel < 100){
   //성2
   image(castel2,0,0,100,300); 
   } else{
   countcastel=0;
   }
   countcastel++;


   //관람차
   for(var i = 0 ; i < 8 ; i++){
      image(wheel1,1000+sin(t1*2*PI+2*PI/8*i)*250-100,500+cos(t1*2*PI+2*PI/8*i)*250-100,200,200);
   }

   for(var i = 0 ; i < 4 ; i++){
      image(wheel2,1000+sin(t1*2*PI+2*PI/4*i)*250-100,500+cos(t1*2*PI+2*PI/4*i)*250-100,200,200);
   }


   //깃발위아래
   image(falg,100,300+cos(t2*2*PI)*10,100,100);


}

