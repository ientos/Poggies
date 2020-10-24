let col;

class shapeTap {

  show() {
    background(254, 216, 177);
    showTitleST();
    // createButtons();
    showHomeButtonST();

  }

}

function showTitleST() {
  textStyle(BOLDITALIC);
  strokeWeight(1);
  textAlign(LEFT, CENTER);
  textSize(32);
  text("Shape Tap!", 120, 50);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Tap the shapes as fast as you can!", width/2, 80);
  fill("red");
  textAlign(LEFT, CENTER);

}

//createButton() and moveButton() creates a button, but after "Home" is pressed,
//it is not erased and stays on the canvas.
function createButtons() {
  button = createButton(" ");
  button.mouseClicked(moveButton);
  button.size(50, 50);
  button.position(width / 2 - 25, height / 2 - 25);
  col = color("orange");
  button.style("background-color", col);
}

function moveButton() {
  button.position(random(300), random(90, 450));
}

function showHomeButtonST() {
  //Home button
  noStroke();
  fill(255, 255, 204);
  rect(10, 10, homeButtonWidth, homeButtonHeight, 14);
  fill(100);
  textSize(17);
  stroke(240);
  textStyle(NORMAL);
  text("Home", 20, 32);
}

