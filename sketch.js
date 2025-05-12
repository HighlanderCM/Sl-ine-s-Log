//The setup function only happens once
var sandy=0
function setup() {
	createCanvas(500,500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(68,100,76); //an RGB color for the canvas' background
  //circle
  stroke(0,0,0); // an RGB color for the circle's border
  strokeWeight(5);
  fill(57,196,232,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250,sandy,60,sandy); // center of canvas, 20px dia

  fill(random(192,224),27,mouseX);
  strokeWeight(3);
  rect(random(225,225),random(height),100,50);
  strokeWeight(2);
  stroke(241,117,88);
  line(50,150,400,mouseY);
  textSize(40);
  textFont("Ariel");
  text('Cheeki Breeki',250,200);

}

function mousePressed(){


  if (sandy>=300)
   {sandy=0;
}  else {sandy=sandy+10;}
}