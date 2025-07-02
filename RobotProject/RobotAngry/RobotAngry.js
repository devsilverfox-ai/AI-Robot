function setup() {
canvas = createCanvas(375, 275);
  centerCanvas(); // Center the canvas
  background(100);
  fill(255, 100, 100);
  noStroke(0);

  drawRoundedShape([
    createVector(100, 100), // top left
    createVector(200, 150), // top right
    createVector(200, 200), // bottom right
    createVector(100, 200)  // bottom left
  ], 20); // radius of rounded corner

  drawRoundedShape([
    createVector(250, 150), // top left
    createVector(350, 100), // top right
    createVector(350, 200), // bottom right
    createVector(250, 200)  // bottom left
  ], 20); // radius of rounded corner
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function windowResized() {
  centerCanvas(); // Recenter on window resize
}

// Helper function to draw rounded corner shape
function drawRoundedShape(points, r) {
  beginShape();
  for (let i = 0; i < points.length; i++) {
    let prev = points[(i - 1 + points.length) % points.length];
    let curr = points[i];
    let next = points[(i + 1) % points.length];

    let v1 = p5.Vector.sub(curr, prev).normalize().mult(r);
    let v2 = p5.Vector.sub(next, curr).normalize().mult(r);

    let p1 = p5.Vector.sub(curr, v1); // start of curve
    let p2 = p5.Vector.add(curr, v2); // end of curve

    if (i == 0) {
      vertex(p1.x, p1.y);
    } else {
      bezierVertex(
        curr.x, curr.y, // control point 1
        curr.x, curr.y, // control point 2
        p1.x, p1.y      // anchor
      );let canvas;

function setup() {
  canvas = createCanvas(375, 275);
  centerCanvas(); // Center the canvas
  background(255);
  fill(0);
  stroke(0);

  drawRoundedShape([
    createVector(100, 100), // top left
    createVector(200, 100), // top right
    createVector(200, 200), // bottom right
    createVector(100, 200)  // bottom left
  ], 20); // radius of rounded corner

  drawRoundedShape([
    createVector(250, 100), // top left
    createVector(350, 100), // top right
    createVector(350, 200), // bottom right
    createVector(250, 200)  // bottom left
  ], 20); // radius of rounded corner
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function windowResized() {
  centerCanvas(); // Recenter on window resize
}

// Helper function to draw rounded corner shape
function drawRoundedShape(points, r) {
  beginShape();
  for (let i = 0; i < points.length; i++) {
    let prev = points[(i - 1 + points.length) % points.length];
    let curr = points[i];
    let next = points[(i + 1) % points.length];

    let v1 = p5.Vector.sub(curr, prev).normalize().mult(r);
    let v2 = p5.Vector.sub(next, curr).normalize().mult(r);

    let p1 = p5.Vector.sub(curr, v1); // start of curve
    let p2 = p5.Vector.add(curr, v2); // end of curve

    if (i == 0) {
      vertex(p1.x, p1.y);
    } else {
      bezierVertex(
        curr.x, curr.y, // control point 1
        curr.x, curr.y, // control point 2
        p1.x, p1.y      // anchor
      );
    }

    bezierVertex(
      curr.x, curr.y, // control point 1
      curr.x, curr.y, // control point 2
      p2.x, p2.y      // anchor
    );
  }
  endShape(CLOSE);
}

    }

    bezierVertex(
      curr.x, curr.y, // control point 1
      curr.x, curr.y, // control point 2
      p2.x, p2.y      // anchor
    );
  }
  endShape(CLOSE);
}
