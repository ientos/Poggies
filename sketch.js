let gameState = "LOADING";

function setup() {
  createCanvas(400, 550);

  loadingScreen = new loadingScreen();
  menuDisplay = new menuDisplay();
  pictureMatch = new pictureMatch();
  shapeTap = new shapeTap();
  letterTrace = new letterTrace();
  settings = new settings();

}

function draw() {
  //clears screen
  clear();

  switch (gameState) {
    case "LOADING":
      startLoading();
      break;
    case "MENU":
      startMenu();
      break;
    case "SHAPE TAP":
      startShapeTap();
      break;
    case "LETTER TRACE":
      startLetterTrace();
      break;
    case "PICTURE MATCH":
      startPictureMatch();
      break;
    case "SETTINGS":
      startSettings();
  }
}

function startLoading() {
  loadingScreen.show();
}

function startMenu() {
  menuDisplay.show();
}

function startShapeTap() {
  shapeTap.show();
}

function startLetterTrace() {
  letterTrace.show();
}

function startPictureMatch() {
  pictureMatch.show();
}

function startSettings() {
  settings.show();
}

function mousePressed() {
  if (gameState == "MENU") {
    if (mouseX >= 40 && mouseX <= 180 && mouseY >= 150 && mouseY <= 230) {
      gameState = "SHAPE TAP"; 
    } else if (mouseX >= 220 && mouseX <= 360 && mouseY >= 150 && mouseY <= 230) {
      gameState = "LETTER TRACE";
    } else if (mouseX >= 40 && mouseX <= 180 && mouseY >= 260 && mouseY <= 340) {
      gameState = "PICTURE MATCH";
    } else if (mouseX >= 320 && mouseX <= 381 && mouseY >= 17 && mouseY <= 46) {
      gameState = "SETTINGS";
    }
  }
}
