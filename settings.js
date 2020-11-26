//old file
//    uses images instead

class settings {

  show() {
    background('pink');
    showHomeButtonSet();
    showSettings();
  }
}

function showHomeButtonSet() {
  textStyle(NORMAL);
  textSize(17)
  noStroke()
  fill(255, 255, 204)
  rect(10, 10, homeButtonWidth, homeButtonHeight, 14)
  fill(100)
  text('Home', 40, 32);
}

function showSettings() {
  fill(200, 150, 200);
  rect(58, 140, 74, 40, 13);
  rect(163, 140, 74, 40, 13);
  rect(268, 140, 74, 40, 13);
  fill(0)
  textStyle(BOLDITALIC);
  textSize(17);
  text(("Select time for Shape Tap (current: " + timeGiven + ")"), 200, 120);
  textStyle(NORMAL);
  textSize(15);
  text("1 second", 95, 160);
  text("3 seconds", 199, 160);
  text("5 seconds", 305, 160);
}

