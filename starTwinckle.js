function setup() {
  createCanvas(700,500);
}

function stars(x, y, a, b, r){
    //stars
    push();
    translate(x,y);
    for(var i=0;i<a/2;i++){      
      if(i>r){
        stroke(int(random(166,130)),int(random(198,184)),int(random(159,194)));
      }
      else{
        stroke(255,255,int(random(70,160)));  
      }
        line(-20-i*0.5, 10, -20-i*0.5, -10);
        rotate(PI/3.3);
    }
    stroke(255,216,82);
    fill(255,216,82);
    ellipse(0,0,b,b);
    pop();
}


function draw() {
  if(mouseIsPressed){
    background(0);
    
    for(var h=0;h<height/5;h++){
      for(var b=0;b<width/20;b++){
        stroke(int(random(82,151)),int(random(27,47)),int(random(101,151)));
        line(int(random(-10+b*40,10+b*40)),int(random(-10+h*5,10+h*5)),int(random(30+b*40,50+b*40)),int(random(-10+h*5,10+h*5)));    
      }
    }
    
    push();
    translate(200,200);
    rotate(1);
    strokeWeight(5);
    for(var i=0;i<250/2;i++){
      stroke(220,int(random(130,180)),0);
      line(i,10,i*2,10-i*0.05);
      rotate(-0.03);
    }
    rotate(0.4);
    for(var i=0;i<600/2;i++){
      stroke(220,int(random(130,180)),0);
      line(i*0.1,10+0.5*i,i*1.2,10-i*0.07+0.7*i);
      rotate(-0.03+0.0001*i);
    }
    pop();

  }
  else{  
    background(0);    
    
    for(var h=0;h<height/5;h++){
      for(var b=0;b<width/20;b++){
        stroke(int(random(45,88)),int(random(89,134)),int(random(122,176)));
        line(int(random(-10+b*40,10+b*40)),int(random(-10+h*5,10+h*5)),int(random(30+b*40,50+b*40)),int(random(-10+h*5,10+h*5)));    
      }
    }
    
    push();
    translate(200,200);
    
    push();
    rotate(1);
    strokeWeight(5);
    for(var i=0;i<250/2;i++){
      stroke(int(random(119,209)),int(random(164,222)),int(random(186,229)));
      line(i,10,i*2,10-i*0.05);
      rotate(-0.03);
    }
    rotate(0.4);
    for(var i=0;i<600/2;i++){
      stroke(int(random(119,209)),int(random(164,222)),int(random(186,229)));
      line(i*0.1,10+0.5*i,i*1.2,10-i*0.07+0.7*i);
      rotate(-0.03+0.0001*i);
    }
    pop();
    pop();
  }
  
  stars(350,230,80,40,29);
  stars(500,100,130,50,48);
  stars(650,300,150,60,53);
  stars(291,20,70,35,25);
  stars(250,450,90,45,50);
  stars(0,154,160,46,55);
  stars(419,70,49,32,15);
  stars(684,0,546,123,177);
  
  fill(36,41,53);
  stroke(0);
  ellipse(600,500,556,337);
  fill(10,19,54);
  ellipse(79,520,432,100);
  ellipse(382,510,328,150);
  ellipse(600,534,359,268);
  
  fill(0);
  stroke(0);
  triangle(64,47,20,500,115,700);
  triangle(87,-56,184,511,65,600);
  triangle(127,88,140,500,180,700);
  triangle(180,291,255,500,115,700);
  
  
}