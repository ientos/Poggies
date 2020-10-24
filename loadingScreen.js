let color;

class loadingScreen {

  constructor() {
    setTimeout(loading, 1000);
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


function loading() {
  setTimeout(goToMenu, 1000);
}

function goToMenu() {
  gameState = "MENU";
}