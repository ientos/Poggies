class letterTrace {
  
  show() {
    fill('black');
    textStyle(BOLDITALIC);
    strokeWeight(0);
    background(200, 200, 100);
    text("Letter trace", 200, 200);
    showHomeButtonLT();
  }
}

function showHomeButtonLT() {
  //Home button
  textStyle(NORMAL);
  noStroke()
  fill(255, 255, 204)
  rect(10, 10, homeButtonWidth, homeButtonHeight, 14)
  fill(100)
  textSize(17)
  stroke(240)
  text('Home', 40, 32);
}