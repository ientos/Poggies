let cardWidth = 75
let cardHeight = 90
let radiusPM = 100;
let homeButtonWidth = 60
let homeButtonHeight = 40

let pictureMatchPlaySong = true;

let image1;
let image2;
let image3;
let image4;
let image5;
let image6;
let numofmatches = 0;
let aradius = 50;
let xposition = 85;
let xposition2 = 200;
let xposition3 = 315;
let yposition = 160;
let yposition2 = 270;
let yposition3 = 380;
let yposition4 = 490;
let card1 = 1;
let card2 = 2;
let card3 = 3;
let card4 = 4;
let card5 = 4;
let card6 = 5;
let card7 = 5;
let card8 = 3;
let card9 = 2;
let card10 = 1;
let card11 = 6;
let card12 = 6;
let click1 = 0;
let click2 = 0;

class pictureMatch {

  show() {
    background(200, 200, 300)
    showHomeButtonPM();
    showCardOutline();
    drawWords();
    drawPictures();
    showTitlePM();
  }

  //music
  songPictureMatchLoaded() {
    if (pictureMatchPlaySong == true) {
      pictureMatchPlaySong = false;
      songPictureMatch.setVolume(musicVolume);
      songPictureMatch.loop();
    }
  }

}

function drawPictures() {
  image(tileMapPM, 46, 118, 90, 90, 340, 280, 180, 220);
  image(tileMapPM, 45, 340, 80, 80, 0, 30, 200, 200);
  image(tileMapPM, 275, 353, 85, 45, 266, 77, 300, 110);
  image(tileMapPM, 275, 120, 80, 80, 584, 54, 210, 175);
  image(tileMapPM, 161, 230, 80, 80, 16, 282, 236, 208);
  image(tileMapPM, 166, 455, 76, 76, 625, 295, 155, 155);
}

//Title
function showTitlePM() {
  image(tileMap, 76, 20, 260, 50, 30, 2040, 1085, 162);
  
  textAlign(LEFT, CENTER);
  fill(200, 300, 300);
  strokeWeight(3);
  stroke('white');
  textSize(35);
  textStyle(BOLDITALIC);
  textFont("Comic Sans MS");
  fill(100);
  textSize(20);
  text("Matches: " + numofmatches, 145, 80);
}

//Home button
function showHomeButtonPM() {
  image(tileMap, 11, 11, 64, 34, 686, 1100, 660, 420);
  image(tileMap, 14, 14, 57, 26, 1280, 1980, 330, 130);
}

function showCardOutline() {
  stroke('white');
  strokeWeight(0);
  fill(98, 173, 188);

  // row 1
  ellipse(85, 160, radiusPM);
  ellipse(200, 160, radiusPM);
  ellipse(315, 160, radiusPM);

  // row 2
  ellipse(85, 270, radiusPM);
  ellipse(200, 270, radiusPM);
  ellipse(315, 270, radiusPM);

  // row 3
  ellipse(85, 380, radiusPM);
  ellipse(200, 380, radiusPM);
  ellipse(315, 380, radiusPM);

  // row 4
  ellipse(85, 490, radiusPM);
  ellipse(200, 490, radiusPM);
  ellipse(315, 490, radiusPM);
}

function drawWords() {
  fill('black');
  textSize(15);
  text('Ice cream', 55, 485);
  text('Dog', 70, 270);
  text('Cat', 185, 380);
  text('Car', 185, 160);
  text('Ball', 300, 270);
  text('Pencil', 290, 485);
}
