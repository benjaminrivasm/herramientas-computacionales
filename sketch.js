let d;
let colorDot = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(120, 68, 187);
}

function draw() {
  d = random(10, 60);
  
  colorMode(HSB);
  
  fill(colorDot, 100, 100);
  noStroke();
  ellipse(mouseX, mouseY, d, d);
  
      colorDot += 1;
  if (colorDot > 360) {
    colorDot = 0;
  }
}

function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }
}
