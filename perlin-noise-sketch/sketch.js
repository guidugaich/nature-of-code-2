let xoff = 0;
let yoff = 1000;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(000);

  let x = noise(xoff) * width;
  let y = noise(yoff) * height;

  xoff += 0.001;
  yoff += 0.001;

  ellipse(x, y, 30, 30);
}