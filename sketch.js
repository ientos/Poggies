let gameState = "LOADING";
let letterToDraw = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let letterIndex = 0;
let playSelectSound = true;
let songMenu;
let songShapeTap;
let songKeepUps;
let selectSound;
let backSound;
let allowChangeState = false;
// let inkLevel;

function preload() {
  songMenu = loadSound('assets/music_sound/someday8bit.mp3');
  songShapeTap = loadSound('assets/music_sound/soma8bit.mp3');
  songKeepUps = loadSound('assets/music_sound/autoshop8bit.mp3');
  // songLetterTrace = loadSound('assets/music_sound/bad_decisions8bit2.mp3');
  // songLetterTrace = loadSound('assets/music_sound/ode_mets8bit.mp3');
  songLetterTrace = loadSound('assets/music_sound/selfless8bit.mp3');


  selectSound = loadSound('assets/music_sound/selectSound.mp3');
  backSound = loadSound('assets/music_sound/backSound.mp3');

  img = loadImage('assets/textures/iphone_homescreen.png');
  cloud1 = loadImage('assets/textures/cloud.png');
  tileMap = loadImage('assets/textures/tileMap.png');
  midBuilding = loadImage('assets/textures/buildings/mid1.png');
  front1 = loadImage('assets/textures/buildings/front1.png');
  front2 = loadImage('assets/textures/buildings/front2.png');
  front3 = loadImage('assets/textures/buildings/front3.png');
  front4 = loadImage('assets/textures/buildings/front4.png');
  bg = loadImage('assets/textures/buildings/background.png');

}


function setup() {
  createCanvas(400, 550);
  background('white');

  loadingScreen = new loadingScreen();
  menuDisplay = new menuDisplay();
  pictureMatch = new pictureMatch();
  shapeTap = new shapeTap();
  letterTrace = new letterTrace();
  keepUps = new keepUps();
  settings = new settings();
  rr = new rr();
}

function draw() {
  //clears screen
  clear();

  switch (gameState) {
    case "LOADING":
      loadingScreen.show();
      break;
    case "MENU":
      menuDisplay.songMenuLoaded();
      menuDisplay.show();
      break;
    case "SHAPE TAP":
      shapeTap.songShapeTapLoaded();
      shapeTap.show();
      break;
    case "LETTER TRACE":
      letterTrace.songLettersTraceLoaded();
      letterTrace.drawLetters();
      break;
    case "PICTURE MATCH":
      pictureMatch.show();
      break;
    case "KEEP UPS":
      keepUps.songKeepUpsLoaded();
      keepUps.show();
      break;
    case "SETTINGS":
      settings.show();
      break;
    case "RR":
      rr.show();
      break;
  }
}

function selectSoundPlay() {
  selectSound.setVolume(musicVolume);
  selectSound.play();
}

function setShapeTapState() {
  gameState = "SHAPE TAP";
  sizeY = -528;
}

function setKeepUps() {
  gameState = "KEEP UPS";
  sizeY = -528;
}

function setLetterTrace() {
  gameState = "LETTER TRACE";
  sizeY = -528;
}

function setCraftMine() {
  gameState = "CRAFT MINE";
  sizeY = -528;
}

function playMenuSong() {
  songMenu.loop();
  allowChangeState = true;
}

function mouseClicked() {
  //iphone home screen
  if (gameState == "LOADING" && gameState != "RR") {
    if (mouseX >= 79 && mouseX <= 123 && mouseY >= 385 && mouseY <= 423) {
      runLS = true;
    } else if (mouseX >= 269 && mouseX <= 312 && mouseY >= 476 && mouseY <= 514) {
      gameState = "RR";
      vid.loop();
      vid.show();
    }
  }
  //rr
  else if (gameState == "RR") {
    vid.stop();
    vid.hide();
    gameState = "LOADING";
  }
  //choose game from menu
  else if (gameState == "MENU" && frameCount > 10 && allowChangeState == true) {
    if (mouseX >= 26 && mouseX <= 189 && mouseY >= 144 && mouseY <= 240) {
      allowChangeState = false;
      songMenu.stop();
      selectSoundPlay();
      setTimeout(setShapeTapState, 1000);
    } else if (mouseX >= 211 && mouseX <= 374 && mouseY >= 144 && mouseY <= 240) {
      allowChangeState = false;
      songMenu.stop();
      selectSoundPlay();
      inkLevel = inkLevelSettings;
      setTimeout(setLetterTrace, 1000);
      // } else if (mouseX >= 26 && mouseX <= 189 && mouseY >= 254 && mouseY <= 350) {
      //   allowChangeState = false;
      //   songMenu.stop();
      //   selectSoundPlay();
      //   // setTimeout(NEW GAME, 1000);
    } else if (mouseX >= 211 && mouseX <= 374 & mouseY >= 254 && mouseY <= 350) {
      allowChangeState = false;
      songMenu.stop();
      selectSoundPlay();
      setTimeout(setKeepUps, 1000);
    } else if (mouseX >= 340 && mouseX <= 397 && mouseY >= 35 && mouseY <= 63) {
      //settings
      allowChangeState = false;
      gameState = "SETTINGS";
    } else if (mouseX >= 340 && mouseX <= 397 && mouseY >= 7 && mouseY <= 31) {
      //x button
      allowChangeState = false;
      songMenu.stop();
      menuPlaySong = true;
      gameState = "LOADING";
      sizeY = -260;
    }
  }
  //home butoton
  else if (gameState != "RR" && gameState != "MENU" && (mouseX >= 11) && (mouseX <= 72) && (mouseY >= 11) && (mouseY <= 43)) {
    if (gameState == "SHAPE TAP") {
      //if game is Shape Tap, it removes button before going to menu.
      shapeTap.removeButtonST();
      gameState = "MENU";
      songShapeTap.stop();
      shapeTapPlaySong = true;
      setTimeout(playMenuSong, 1000);
      backSound.setVolume(musicVolume);
      backSound.play();
    } else if (gameState == "KEEP UPS") {
      gameState = "MENU";
      loop();
      runKU = false;
      yKU = 100;
      pointsKU = 0;
      speed = currentSpeed;
      songKeepUps.stop();
      setTimeout(playMenuSong, 1000);
      backSound.setVolume(musicVolume);
      backSound.play();
      keepUpsPlaySong = true;
    } else if (gameState == "LETTER TRACE" || gameState == "PICTURE MATCH") {
      gameState = "MENU";
      songLetterTrace.stop();
      backSound.setVolume(musicVolume);
      backSound.play();
      setTimeout(playMenuSong, 1000);
      letterTracePlaySong = true;
      inkLevel = inkLevelSettings;
      amountPressed = 0;
      xmousePointsArray = [];
      ymousePointsArray = [];
      letterIndex = 0;
    } else if (gameState == "SETTINGS") {
      gameState = "MENU";
      slider.hide();
      sliderRan = false;
      allowChangeState = true;
    }
  } else if (gameState == "LETTER TRACE" && letterToDraw[letterIndex] != 'z' && mouseX >= 307 && mouseX <= 380 && mouseY >= 482 && mouseY <= 521) {
    letterIndex++;
    inkLevel = inkLevelSettings;
    amountPressed = 0;
    xmousePointsArray = [];
    ymousePointsArray = [];
  } else if (gameState == "LETTER TRACE" && letterToDraw[letterIndex] != 'a' && mouseX >= 19 && mouseX <= 92 && mouseY >= 482 && mouseY <= 521) {
    letterIndex--;
    inkLevel = inkLevelSettings;
    amountPressed = 0;
    xmousePointsArray = [];
    ymousePointsArray = [];
  } else if (gameState == "KEEP UPS" && mouseX >= 112 && mouseX <= 301 && mouseY >= 202 && mouseY <= 312) {
    runKU = true;
    loop();
  }

  //user selects 'dificulty' of Shape Tap
  else if (gameState == "SETTINGS") {
    if (mouseX >= 60 && mouseX <= 130 && mouseY >= 130 && mouseY <= 170) {
      timeGiven = 5;
      time = 5;
    } else if (mouseX >= 165 && mouseX <= 235 && mouseY >= 130 && mouseY <= 170) {
      timeGiven = 3;
      time = 3;
    } else if (mouseX >= 268 && mouseX <= 342 && mouseY >= 130 && mouseY <= 170) {
      timeGiven = 1;
      time = 1;
    } else if (mouseX >= 60 && mouseX <= 130 && mouseY >= 220 && mouseY <= 260) {
      speedAddition = 1 / 10;
    } else if (mouseX >= 165 && mouseX <= 235 && mouseY >= 220 && mouseY <= 260) {
      speedAddition = 3 / 10;
    } else if (mouseX >= 268 && mouseX <= 342 && mouseY >= 220 && mouseY <= 260) {
      speedAddition = 5 / 10;
    } else if (mouseX >= 60 && mouseX <= 130 && mouseY >= 310 && mouseY <= 350) {
      radius = 100;
    } else if (mouseX >= 165 && mouseX <= 235 && mouseY >= 310 && mouseY <= 350) {
      radius = 70;
    } else if (mouseX >= 268 && mouseX <= 342 && mouseY >= 310 && mouseY <= 350) {
      radius = 50;
    } else if (mouseX >= 60 && mouseX <= 130 && mouseY >= 390 && mouseY <= 430) {
      livesGiven = 5;
    } else if (mouseX >= 165 && mouseX <= 235 && mouseY >= 390 && mouseY <= 430) {
      livesGiven = 3;
    } else if (mouseX >= 268 && mouseX <= 342 && mouseY >= 390 && mouseY <= 430) {
      livesGiven = 1;
    } else if (mouseX >= 60 && mouseX <= 130 && mouseY >= 480 && mouseY <= 520) {
      inkLevelSettings = 500;
    } else if (mouseX >= 165 && mouseX <= 235 && mouseY >= 480 && mouseY <= 520) {
      inkLevelSettings = 400;
    } else if (mouseX >= 268 && mouseX <= 342 && mouseY >= 480 && mouseY <= 520) {
      inkLevelSettings = 300;
    }

  }
}