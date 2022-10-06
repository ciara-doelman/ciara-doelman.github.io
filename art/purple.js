function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
  background(255, 100, 255, 150)
}

function draw() {
  if (mouseIsPressed) {
    fill(random(255), random(50), random(210), random(255))
  } else {
    noFill()
  }
  ellipse(mouseX, mouseY, 120, 120)
}
