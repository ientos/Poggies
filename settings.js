let musicVolume = 1 / 10;
let slider;
let sliderRan = false;
let settingsInkLevel = 400;

class settings {

  show() {
    background('pink');
    showHomeButtonSet();
    showSettings();
    songMenu.setVolume(musicVolume);

    if (sliderRan == false) {
      sliderRan = true;
      slider = createSlider(0, 1, musicVolume, 1 / 40);
      slider.position(128, 50);
      slider.style('width', '80px');
      slider.size(140, 16);
    }

    musicVolume = slider.value();

  }
}

function showHomeButtonSet() {
  image(tileMap, 11, 11, 64, 34, 686, 1100, 660, 420);
  image(tileMap, 14, 14, 57, 26, 1280, 1980, 330, 130);
}

function showSettings() {
  strokeWeight(0);
  fill(200, 150, 200);

  rect(58, 120, 74, 40, 13);
  rect(163, 120, 74, 40, 13);
  rect(268, 120, 74, 40, 13);

  rect(58, 220, 74, 40, 13);
  rect(163, 220, 74, 40, 13);
  rect(268, 220, 74, 40, 13);

  rect(58, 310, 74, 40, 13);
  rect(163, 310, 74, 40, 13);
  rect(268, 310, 74, 40, 13);

  rect(58, 390, 74, 40, 13);
  rect(163, 390, 74, 40, 13);
  rect(268, 390, 74, 40, 13);

  rect(58, 480, 74, 40, 13);
  rect(163, 480, 74, 40, 13);
  rect(268, 480, 74, 40, 13);

  fill(0)
  textStyle(BOLDITALIC);
  textFont("Comic Sans MS");
  textSize(16);

  text("Sound and music", 200, 25)
  text(("Select time for Shape Tap (current: " + timeGiven + ")"), 200, 100);
  text(("Select speed increase for Keep Ups (current: " + speedAddition + ")"), 200, 200);
  text(("Select radius for Keep Ups (current: " + radius + ")"), 200, 290);
  text(("Select number of lives for Keep Ups (current: " + livesGiven + ")"), 200, 370);
  text(("Select ink level for Letter Trace (current: " + inkLevelSettings + ")"), 200, 460);

  textStyle(NORMAL);
  textSize(15);
  text("Easy", 95, 140);
  text("Normal", 199, 140);
  text("Hard", 305, 140);

  text("Easy", 95, 240);
  text("Normal", 199, 240);
  text("Hard", 305, 240);

  text("Easy", 95, 330);
  text("Normal", 199, 330);
  text("Hard", 305, 330);
  
  text("Easy", 95, 410);
  text("Normal", 199, 410);
  text("Hard", 305, 410);

  text("Easy", 95, 500);
  text("Normal", 199, 500);
  text("Hard", 305, 500);

}
