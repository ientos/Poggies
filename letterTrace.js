class letterTrace {
  
  show() {
    background(143, 147, 217);
    fill('black');
    textStyle(BOLDITALIC);
    strokeWeight(0);
    text("Letter trace", 200, 200);
    showHomeButtonLT();
  }
}

function showHomeButtonLT() {
  //home button
  textStyle(NORMAL);
  textSize(17)
  noStroke()
  fill(255, 255, 204)
  rect(10, 10, homeButtonWidth, homeButtonHeight, 14)
  fill(100)
  text('Home', 40, 32);
}
