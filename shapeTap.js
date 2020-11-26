let col;
let button;
let ran = false;
let points = 0;
let startTime = false;
let timeGiven = 3;
let time = timeGiven;
let shapeTapPlaySong = true;

class shapeTap {

  show() {
    background(254, 216, 177);
    createButtonsST();
    showTitleST();
    showHomeButtonST();
    showPointsTime();
    countDown();
  }

  removeButtonST() {
    removeButton();
  }

  addPoint() {
    points += 1;
  }

  songShapeTapLoaded() {
    if (shapeTapPlaySong == true) {
      shapeTapPlaySong = false;
      songShapeTap.setVolume(musicVolume);
      songShapeTap.loop();
    }
  }
}

function countDown() {
  //starts to count down from given time if button is clicked 
  if (startTime == true) {
    //substracts 1 from time every second while game is active
    if (frameCount % 60 == 0 && time >= 0 && points != 0) {
      time--;
    }
    //if time is 0 it removes and moves button, and resets time
    if (time == 0) {
      removePoints();
      moveButton();
      time = timeGiven;
    }
  }

  if (points < 0) {
    gameLost();
  }
}

function removePoints() {
  //removes points depending on current points
  if (points < 10) {
    points -= 4;
  } else if (points >= 10 && points < 30) {
    points -= 7;
  } else if (points >= 30 && points < 50) {
    points -= 14;
  } else {
    points -= 24;
  }
  col = "red";
}

function moveButton() {
  //activates the game if button is pressed
  startTime = true;
  button.position(random(300), random(96, 450));
  shapeTap.addPoint();
  time = timeGiven;
  //sets fameCount to 0 for stable countdown
  frameCount = 0;
  button.style("background-color", col);
  col = "orange";
}

//called when home button is pressed, removes button from screen. Stops and resets game.
function removeButton() {
  button.remove();
  time = timeGiven;
  points = 0;
  ran = false;
  startTime = false;
}

function showPointsTime() {
  image(tileMap, 96, 69, 71, 25, 1717, 1060, 410, 140);
  image(tileMap, 212, 69, 69, 25, 1700, 690, 410, 140);
  fill('black');
  textSize(23);
  strokeWeight(1);
  textFont("Comic Sans MS");
  textStyle(BOLD);
  text((time), 161, 82);
  text((points), 300, 82);
}

//if called, it stops the game and resets score.
function gameLost() {
  startTime = false;
  points = 0;
}

function createButtonsST() {
  //only creates a button when Shape Tap is started.
  if (ran == false) {
    button = createButton(" ");
    button.size(50, 50);
    button.position(width / 2 - 25, height / 2 - 25);
    col = "orange";
    button.style("background-color", col);
    //button.mouseClicked(moveButton) is always active.
    button.mouseClicked(moveButton)
    ran = true;
  }
}

function showHomeButtonST() {
  image(tileMap, 11, 11, 64, 34, 686, 1100, 660, 420);
  image(tileMap, 14, 14, 57, 26, 1280, 1980, 330, 130);
}

function showTitleST() {
  image(tileMap, 74, 15, 270, 50, 30, 1570, 800, 200);
}
