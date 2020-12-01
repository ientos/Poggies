let runKU = false;

let pointsKU = 0;
let livesKU = livesGiven;

let radius = 100;
let dCircleKU;

let xKU = 200;
let yKU = 100;

let speed = 1;
let speedAddition = 1 / 10;
let currentSpeed = speed;
let limitSpeed = 4.5;

let keepUpsPlaySong = true;

let b1dx = -1000;
let b2dx = 200;
let b3dx = 300;
let b4dx = 0
let b5dx = -200;

class keepUps {

//pog 

  show() {
    image(bg, 0, 0, width, height, 0, 50, width, 500);
    showBuildings();
    showHomeButtonKU();
    showKeepUpsTitle();
    showBall();
    if (runKU == false) {
      endGame();
    }
    if (livesKU <= 0 && gameState == "KEEP UPS") {
      endGame();
    } else {
      runKU = true;
    }
  }

  songKeepUpsLoaded() {
    if (keepUpsPlaySong == true) {
      keepUpsPlaySong = false;
      songKeepUps.setVolume(musicVolume);
      songKeepUps.loop();
    }
  }
}

function endGame() {
  livesKU = livesGiven;
  pointsKU = 0;
  speed = 1;
  image(tileMap, 110, 200, 200, 120, 686, 1100, 660, 420);
  textFont("Helvetica");
  textSize(25);
  textStyle(BOLD);
  text("Click to play!", 207, 246);
  if (gameState == "MENU") {
    loop();
  } else {
    noLoop();
  }
}

function showBall() {
  textStyle(NORMAL);
  if (runKU == true) {
    if (frameCount % 120 == 0) {
      if (speed <= limitSpeed) {
        speed += speedAddition;
      }
    }
    drawBall();
    if (yKU > (height - (radius / 2))) {
      livesKU--;
      moveBall();
    }
  }
}

function showBuildings() {
  image(midBuilding, 0, 460, width, 220, 0, 700, 20, 20);
  image(midBuilding, b1dx += (0.3), 140, 1200, 500);
  if (b1dx > 600) {
    b1dx = -1680;
  }
  image(front4, b4dx += (0.65), 330, 270, 240);
  if (b4dx > 400) {
    b4dx = -200;
  }
  image(front2, b3dx += (0.65), 325, 350, 280);
  if (b3dx > 400) {
    b3dx = -340;
  }
  image(front1, b2dx += (0.65), 410, 280, 150);
  if (b2dx > 380) {
    b2dx = -270;
  }
  image(front3, b5dx += (0.65), 330, 270, 240);
  if (b5dx > 400) {
    b5dx = -200;
  }
}

function mousePressed() {
  dCircleKU = dist(mouseX, mouseY, xKU, yKU);
  if (gameState == "KEEP UPS" && runKU == true) {
    if (dCircleKU < radius / 2) {
      xKU = random((radius / 2), (400 - (radius / 2)));
      yKU = random(115, 160);
      pointsKU++;
    }
    drawBall();
  }
}

function drawBall() {
  fill(100, 100, 200);
  imageMode(CENTER);
  image(tileMap, xKU, (yKU += speed), radius, radius, 2789, 1837, 767, 767)
  imageMode(CORNER);
}

function showKeepUpsTitle() {
  image(tileMap, 95, 24, 220, 60, 30, 2265, 764, 196);
  textStyle(BOLDITALIC);
  textSize(20);
  strokeWeight(0);
  fill('black');
  text(("Points: " + pointsKU), 130, 100);
  text(("Lives: " + livesKU), 260, 100);
}

function moveBall() {
  xKU = random(50, 350);
  yKU = 100;
  // speed = 1;
  frameCount = 0;
}


function showHomeButtonKU() {
  image(tileMap, 11, 11, 64, 34, 686, 1100, 660, 420);
  image(tileMap, 14, 14, 57, 26, 1280, 1980, 330, 130);
}
