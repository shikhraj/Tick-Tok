var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup() {
  createCanvas(displayWidth, displayHeight - 150);
  
  angleMode(DEGREES); 
}

function draw() {
  background(0);  

  // text
  textFont("Castellar Regular");
  textSize(55);
  noStroke();
  fill("white");
  text("Do not watch the clock, do what it does, keep going", 600,190,800,600);
  text("~ Sam Levenson", 600 , 490, 800, 500)

 //translation and rotation 
  translate(200,200)
  rotate(-90)

  //calculating time using predefined func from p5.js
  sc = second();
  mn = minute();
  hr = hour();

  //to create repeated rotation
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);
  
  //drawing seconds hand
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //drawing minutes hand
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,85,0);
  pop();

  //drawing hour hand
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,45,0);
  pop();

  //drawing middle point
  strokeWeight(7);
  stroke(255);
  point(0,0)

  //drawing the arc for seconds
  strokeWeight(7);
  stroke(255,0,0);
  noFill();
  arc(0,0,300,300,0,scAngle);

  //drawing the arc for minutes
  strokeWeight(7);
  stroke(0,255,0);
  noFill();
  arc(0,0,280,280,0,mnAngle);

  //drawing the arc for hours
  strokeWeight(7);
  stroke(0,0,255);
  noFill();
  arc(0,0,260,260,0,hrAngle);

  drawSprites();
}