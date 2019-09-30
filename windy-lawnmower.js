function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+200, height-10-random(h));
  noStroke();//windy weather, x-coordinates of the ends of the grass now departs more from the its "root"

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (random(100) > 99.9) {
    fill(255);
    rect(0, 0, width, height-10);
    h = 10;
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
