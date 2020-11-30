let sizeY = -364;

let x = 0;
let x2 = 230;
let dx = 0.8;
let dx2 = 0.8;

let menuPlaySong = true;

let inkLevelSettings = 350;
let livesGiven = 3;

class menuDisplay {
  show() {
    background(190, 190, 245);
    createClouds();
    createGameOutline();
    createMenuTitle();
    gameTitleNames();
  }

  songMenuLoaded() {
    if (menuPlaySong == true) {
      menuPlaySong = false;
      allowChangeState = true;
      songMenu.setVolume(musicVolume);
      songMenu.loop();
    }
  }
}

function createClouds() {
  //clouds
  image(cloud1, x, 50, 140, 100);
  image(cloud1, x2, 30, 140, 100);

  x += dx;
  x2 += dx2;

  if (x > 410) {
    x = -140;
  }
  if (x2 > 410) {
    x2 = -140;
  }
}

function gameTitleNames() {
  //shape tap
  image(tileMap, 40, 151, 140, 80, 18, 16, 500, 380);

  //letter trace
  image(tileMap, 228, 155, 140, 80, 40, 420, 500, 380);

  //keep ups
  image(tileMap, 231, 263, 140, 80, 600, 30, 500, 380);
  
  //picture match
  image(tileMap, 40, 263, 140, 80, 18, 800, 550, 380)

  //settings
  image(tileMap, 342, 38, 54, 20, 720, 880, 600, 150);

  //x close icon
  image(tileMap, 360, 9, 20, 20, 1105, 77, 150, 150);
  
  //?
  image(tileMap, 360, 510, 30, 30, 2841, 60, 194, 198);

  //coming soon
  image(tileMap, 227, 373, 130, 70, 1100, 1600, 620, 280);
  image(tileMap, 40, 373, 130, 70, 1100, 1600, 620, 280);
  
}

function createGameOutline() {
  if (mouseX >= 100 && mouseX <= 150 && mouseY >= 100 && mouseY <= 150) {
    text("POG", 110, 110);
  }
  image(tileMap, 26, 143, 180, 110, 686, 1100, 700, 450);
  image(tileMap, 211, 143, 180, 110, 686, 1100, 700, 450);
  image(tileMap, 26, 253, 180, 110, 686, 1100, 700, 450);
  image(tileMap, 211, 253, 180, 110, 686, 1100, 700, 450);
  image(tileMap, 26, 363, 180, 110, 686, 1100, 700, 450);
  image(tileMap, 211, 363, 180, 110, 686, 1100, 700, 450);
  image(tileMap, 340, 6, 64, 29, 686, 1100, 700, 450);
  image(tileMap, 340, 34, 64, 34, 686, 1100, 700, 450);

  if (gameState == "MENU" && mouseX >= 26 && mouseX <= 189 && mouseY >= 144 && mouseY <= 240) {
    //shape tap
    image(tileMap, 26, 143, 180, 110, 1883, 1620, 700, 450);
  } else if (gameState == "MENU" && mouseX >= 211 && mouseX <= 374 && mouseY >= 144 && mouseY <= 240) {
    //letter trace
    image(tileMap, 211, 143, 180, 110, 1883, 1620, 700, 450);
  } else if (gameState == "MENU" && mouseX >= 211 && mouseX <= 374 & mouseY >= 254 && mouseY <= 350) {
    //keep ups
    image(tileMap, 211, 253, 180, 110, 1883, 1620, 700, 450);
  } else if (gameState == "MENU" && mouseX >= 26 && mouseX <= 189 && mouseY >= 254 && mouseY <= 350) {
    //picture match
    image(tileMap, 26, 253, 180, 110, 1883, 1620, 700, 450);
  } else if (gameState == "MENU" && mouseX >= 340 && mouseX <= 397 && mouseY >= 35 && mouseY <= 63) {
    //settings
    image(tileMap, 340, 35, 64, 33, 1883, 1620, 700, 450);
  } else if (gameState == "MENU" && mouseX >= 340 && mouseX <= 397 && mouseY >= 7 && mouseY <= 31) {
    //x button
    image(tileMap, 340, 6, 64, 29, 1883, 1620, 700, 450);
  } 
}

function createMenuTitle() {
  image(tileMap, 60, sizeY, 290, 100, 600, 520, 1000, 350);
  textAlign(CENTER, CENTER);
  if (sizeY <= 50) {
    sizeY += 2.8;
  }
}
