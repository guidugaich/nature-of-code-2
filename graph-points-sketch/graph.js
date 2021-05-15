
function setup() {
  createCanvas(400, 400)
}

let start = 0;

function draw() {
  background(0)

  stroke(0, 255, 255)
  noFill();

  beginShape();
  let xoff = start;
  for (let x = 0; x < width; x++) {
    stroke(0, 255, 255);
    let y = noise(xoff) * height;
    //let y = random(height)
    vertex(x, y);
    xoff += 0.01;
  }
  endShape();

  start += 0.01;

  //noLoop();
}