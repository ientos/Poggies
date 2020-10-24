let gameState = "LOADING";
let menuButton;
let canvas;

function setup() {
  canvas = createCanvas(400, 550);

  loadingScreen = new loadingScreen();
  menuDisplay = new menuDisplay();
  pictureMatch = new pictureMatch();
  shapeTap = new shapeTap();
  letterTrace = new letterTrace();

}

function draw() {
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
  canvas.mouseClicked(homeButtonClicked);
}

function startLetterTrace() {
  letterTrace.show();
  canvas.mouseClicked(homeButtonClicked);
}

function startPictureMatch() {
  pictureMatch.show();
  canvas.mouseClicked(homeButtonClicked);
}

function homeButtonClicked() {
  //checks too see if user clicks on the home 'button'
  if ((mouseX >= 10) && (mouseX <= 70) && (mouseY >= 10) && (mouseY <= 50)) {
    gameState = "LOADING";
  }
}