function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
}

function draw() {
  if (mouseIsPressed) {
    fill(random(100), random(255), random(255), random(255))
  } else {
    noFill()
  }
  ellipse(mouseX, mouseY, 80, 80)
}
