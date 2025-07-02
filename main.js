var little_action_x = 0;
var little_action_y = 0;
var last_mouse_x = 0;
var last_mouse_y = 0;
var r = 60;
var sleep_y = 0;
var eye_width = 60;
var eye_height = 60;
var state = "up";


function setup() {
  createCanvas(375, 275);
}

function draw() {
  background(100);

  var left_x = (height - r - 25) / 2;
  var left_y = sleep_y + (width + r) / 2.5;
  var right_x = (height + r + 25) / 2;
  var right_y = sleep_y + (width + r) / 2.5;

  var move_x = map(last_mouse_x, 0, width, -5, 5);
  var move_y = map(last_mouse_y, 0, height, -5, 5);

  if (mouseX == last_mouse_x && frameCount % 50 == 0) {
    little_action_x = random(2);
  }
  if (mouseY == last_mouse_y && frameCount % 30 == 0) {
    little_action_y = random(2);
  }

  fill(0);

  var left_eye_x = (move_x + left_x + little_action_x) - r / 2;
  var left_eye_y = (move_y + left_y + little_action_y) - r / 2;
  var right_eye_x = (move_x + right_x + little_action_x) - r / 2;
  var right_eye_y = (move_y + right_y + little_action_y) - r / 2;

  var rr = 10;

  rect(left_eye_x, left_eye_y, eye_width, eye_height, rr, rr, rr, rr); 
  rect(right_eye_x, right_eye_y, eye_width, eye_height, rr, rr, rr, rr); 
  
  void mousePressed() {
  var left_eye_x = (move_x + left_x + little_action_x) - r / 2;
  var left_eye_y = (move_y + left_y + little_action_y) - r / 2;
  var right_eye_x = (move_x + right_x + little_action_x) - r / 2;
  var right_eye_y = (move_y + right_y + little_action_y) - r / 2;
  }
}
  // Update last mouse position
  if (frameCount % 2 == 0) {
    last_mouse_x = mouseX;
    last_mouse_y = mouseY;
  }

  // Sleep state check
  if (mouseX == last_mouse_x && frameCount % 500 == 0) {
    state = "sleep";
  }

  if (mouseX != last_mouse_x) {
    state = "up";
  }

  // Sleep animation
  if (state == "sleep" && eye_height > 21) {
    eye_height -= 2;
  }
  if (state == "sleep" && sleep_y < r) {
    sleep_y += 2;
  }
  
  // Wake up animation
  if (state == "up" && eye_height < 60) {
    eye_height += 2;
  }
  if (state == "up" && sleep_y > 0) {
    sleep_y -= 2;
  }
}
