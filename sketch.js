let d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(120, 68, 187);
}

function draw() {
  d = random(10, 60);
  fill(255, 100, 100);
  ellipse(mouseX, mouseY, d, d);
}
