let cardWidth = 75
let cardHeight = 90

let homeButtonWidth = 60
let homeButtonHeight = 40

class pictureMatch {


  show() {
    background(200, 200, 300)
    showCardOutline();
    showHomeButtonPM();
    showTitlePM();
  }
}

//Title
function showTitlePM() {
  textAlign(LEFT, CENTER);
  fill(200, 300, 300);
  strokeWeight(3);
  stroke('white');
  textSize(35);
  textStyle(BOLDITALIC);
  textFont("Comic Sans MS");
  text("Picture Match!", 76, 74);
  fill(100);
  text("Picture Match!", 78, 76);
}

//Home button
function showHomeButtonPM() {
  noStroke();
  fill(255, 255, 204);
  rect(10, 10, homeButtonWidth, homeButtonHeight, 14);
  fill(100);
  textSize(17);
  stroke(240);
  textStyle(NORMAL);
  text('Home', 20, 32);
}

//Picture card outline
function showCardOutline() {
  stroke('white');
  strokeWeight(2);
  fill(98, 173, 188);

  rect(50, 125, cardWidth, cardHeight);
  rect(width / 2 - (cardWidth / 2), 125, cardWidth, cardHeight);
  rect(width - cardWidth - 50, 125, cardWidth, cardHeight);

  rect(50, 225, cardWidth, cardHeight);
  rect(width / 2 - (cardWidth / 2), 225, cardWidth, cardHeight);
  rect(width - cardWidth - 50, 225, cardWidth, cardHeight);

  rect(50, 325, cardWidth, cardHeight);
  rect(width / 2 - (cardWidth / 2), 325, cardWidth, cardHeight);
  rect(width - cardWidth - 50, 325, cardWidth, cardHeight);

  rect(50, 425, cardWidth, cardHeight);
  rect(width / 2 - (cardWidth / 2), 425, cardWidth, cardHeight);
  rect(width - cardWidth - 50, 425, cardWidth, cardHeight);
}
