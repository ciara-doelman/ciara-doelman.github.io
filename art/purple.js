function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
}

function draw() {
  if (mouseIsPressed) {
    fill(random(255), random(100), random(255), random(255))
  } else {
    noFill()
  }
  ellipse(mouseX, mouseY, 120, 120)
}
