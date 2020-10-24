let sizeX;
var sizeY = -180;

class menuDisplay {

  constructor() {
    var mouseatX = mouseX;
    var mouseatY = mouseY;
  }
  show() {
    background(200, 200, 255);
    createGameOutline();
    createMenuTitle();
  }
}


function createGameOutline() {
  strokeWeight(1);
  fill(100, 205, 235)
  rect(40, 150, 140, 80, 13);
  rect(40, 260, 140, 80, 13);
  rect(40, 360, 140, 80, 13);
  rect(220, 150, 140, 80, 13);
  rect(220, 260, 140, 80, 13);
  rect(220, 360, 140, 80, 13);

  stroke(1);
  strokeWeight(2.6);
  fill('pink');
  textSize(24);
  text("Shape\nTap!", 110, 190);

  strokeWeight(1.4);
  fill('red');
  text("Letter\nTrace!", 290, 190);

  fill('green');
  text("Picture\nMatch!", 110, 300);

  fill('black')
  text("Word\nTrace!", 290, 300)
  text("Trace\nRace!", 290, 400)
  text("Word\nMatch!", 110, 400)
}

function createMenuTitle() {
  if (sizeY > 80) {
    textSize(35);
    fill('red');
    text("POGGIES!", (width / 2), 80);
  }

  textSize(35);
  strokeWeight(6);
  fill(230, 120, 140);
  textAlign(CENTER, CENTER);
  textStyle(BOLDITALIC);
  text("POGGIES!", (width / 2), sizeY);
  if (sizeY <= 80) {
    sizeY += 3;
  }
}

function mousePressed(mouseatX, mouseatY) {
  if (mouseX >= 40 && mouseX <= 180 && mouseY >= 150 && mouseY <= 230) {
    gameState = "SHAPE TAP";
  } else if (mouseX >= 220 && mouseX <= 360 && mouseY >= 150 && mouseY <= 230) {
    gameState = "LETTER TRACE";
  } else if (mouseX >= 40 && mouseX <= 180 && mouseY >= 260 && mouseY <= 340) {
    gameState = "PICTURE MATCH";
  }

}