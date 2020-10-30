let col;
let button;
let ran = false;
let points = 0;
let startTime = false;
var timeGiven = 3;
var time = timeGiven;

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
  if (points < 10) {
    points -= 5;
  } else if (points >= 10 && points < 30) {
    points -= 10;
  } else if (points >= 30 && points < 50) {
    points -= 20;
  } else {
    points -= 40;
  }
}

function moveButton() {
  //activates the game if button is pressed
  startTime = true;
  button.position(random(300), random(90, 450));
  shapeTap.addPoint();
  time = timeGiven;
  //sets fameCount to 0 for stable countdown
  frameCount = 0;
  button.style("background-color", col);
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
  textSize(20);
  text(("Points: " + points), 305, 20);
  text(("Time: " + time), 315, 40);
}

//if time is 0, it stops the game and resets score.
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
    //button.mouseClicked(moveButton) is always active
    button.mouseClicked(moveButton)
    ran = true;
  }
}

function showHomeButtonST() {
  noStroke();
  fill(255, 255, 204);
  rect(10, 10, homeButtonWidth, homeButtonHeight, 14);
  fill(100);
  textSize(17);
  stroke(240);
  textStyle(NORMAL);
  text("Home", 20, 32);
}

function showTitleST() {
  textStyle(BOLDITALIC);
  strokeWeight(1);
  textAlign(LEFT, CENTER);
  textSize(32);
  text("Shape Tap!", 120, 50);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Tap the shapes as fast as you can!", width / 2, 80);
  fill("red");
  textAlign(LEFT, CENTER);
}
