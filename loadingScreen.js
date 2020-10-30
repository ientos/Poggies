let timeOut = 1000;

class loadingScreen {

  constructor() {
    //waits timeOut milliseconds before executing loading()
    setTimeout(loading, timeOut);
  }

  show() {
    background(255, 255, 200);
    textSize(22);
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    strokeWeight(1);
    fill('red');
    textFont("Comic Sans MS");
    text("Loading...", (width / 2), (height / 2 - 100));
  }
}

//might add a loading animation
function loading() {
  //waits timeOut milliseconds before executing goToMenu()
  setTimeout(goToMenu, timeOut);
}

function goToMenu() {
  gameState = "MENU";
}
