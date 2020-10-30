var sizeY = -180;

class menuDisplay {

  show() {
    background(200, 200, 255);
    createGameOutline();
    createMenuTitle();
  }
}

//checks too see if user clicks on the home 'button' area
function mouseClicked() {
  if ((mouseX >= 10) && (mouseX <= 70) && (mouseY >= 10) && (mouseY <= 50)) {
    //if game is Shape Tap, it removes button before going to menu.
    if (gameState == "SHAPE TAP") {
      shapeTap.removeButtonST();
    }
    gameState = "MENU";
  }
  
  //user selects 'dificulty' of Shape Tap
  if (gameState == "SETTINGS") {
    if (mouseX >= 60 && mouseX <= 130 && mouseY >= 140 && mouseY <= 180) {
      timeGiven = 1;
      time = 1;
    } else if (mouseX >= 165 && mouseX <= 235 && mouseY >= 140 && mouseY <= 180) {
      timeGiven = 3;
      time = 3;
    } else if (mouseX >= 268 && mouseX <= 342 && mouseY >= 140 && mouseY <= 180) {
      timeGiven = 5;
      time = 5;
    }
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
  rect(320, 17, 61, 29, 13);

  stroke(1);
  strokeWeight(2);
  textSize(24);
  textFont("Comic Sans MS");
  textStyle(BOLDITALIC);
  
  fill('pink');
  text("Shape\nTap!", 110, 190);

  fill('red');
  text("Letter\nTrace!", 290, 190);

  fill('green');
  text("Picture\nMatch!", 110, 300);

  strokeWeight(1.4);
  fill('black')
  text( /*"Word\nTrace!"*/ "coming\nsoon!", 290, 300)
  text( /*"Trace\nRace!"*/ "coming\nsoon!", 290, 400)
  text( /*"Word\nMatch!"*/ "coming\nsoon!", 110, 400)
  
  strokeWeight(0);
  textSize(14);
  textStyle(NORMAL);
  text("Settings", 350, 33)
}

function createMenuTitle() {
  textStyle(BOLDITALIC);
  if (sizeY > 80) {
    stroke('white');
    strokeWeight(15);
    textSize(42);
    fill('red');
    text("POGGIES!", (width / 2), 82);
  }
  stroke('black');
  textSize(42);
  strokeWeight(6);
  fill(230, 120, 140);
  textAlign(CENTER, CENTER);
  text("POGGIES!", 200, sizeY);
  if (sizeY <= 80) {
    sizeY += 2;
  }
}
