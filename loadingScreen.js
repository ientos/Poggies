let timeOut = 3000;
let runLS = false;
let startGameLS = false;
let img;
let cloud1;
let settingsIcon;
let tileMap;

class loadingScreen {

  show() {
    if (runLS == false) {
      wallPaper();
    }

    if (runLS == true) {
      showLoadingScreen();
      startGameLS = true;
    }

    if (startGameLS == true) {
      setTimeout(goToMenu, timeOut);
      startGameLS = false;
    }
  }
}

function wallPaper() {
  image(img, 0, 0, 400, 550);
}

function showLoadingScreen() {
  background(255, 255, 200);
  image(tileMap, 105, 200, 200, 50, 1575, 75, 1115, 230);
}

function goToMenu() {
  runLS = false;
  frameCount = 0;
  gameState = "MENU";
}
