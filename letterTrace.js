let tempMouseX;
let tempMouseY;
let xmousePointsArray = [];
let ymousePointsArray = [];
let inkLevel = 400;
let letterTracePlaySong = true;
let amountPressed = 0;
let letterTraceRan = false;

class letterTrace {

  drawLetters() {
    background(247, 226, 193);
    if (frameCount % 2 == 0) {
      tempMouseX = mouseX;
      tempMouseY = mouseY;
      setMouseCoords();
    }
    drawLetters();
    drawUserPoints();
    showHomeButtonLT();
    showTitleLT();
    showSwitchLettersButton();
    showNavigationButtonsLT();
    drawInkGraph();
  }

  //music
  songLettersTraceLoaded() {
    if (letterTracePlaySong == true) {
      letterTracePlaySong = false;
      songLetterTrace.setVolume(musicVolume);
      songLetterTrace.loop();
    }
  }
}

function drawInkGraph() {
  strokeWeight(2);
  textSize(16);
  fill('orange');
  text("Ink left: " + inkLevel, 45, 305);
  strokeWeight(0);
  fill(232, 129, 95);
  rect(15, 80, 55, 210);
  
  fill('black');
  rect(20, 85, 45, 200);
 
  fill(214, 206, 203);
  if (inkLevel >= 0) {
    if (inkLevelSettings == 300) {
      rect(20, 85, 45, (amountPressed) * 2/3);
    } else if (inkLevelSettings == 400) {
      rect(20, 85, 45, (amountPressed) / 2);
    } else if (inkLevelSettings == 500) {
      rect(20, 85, 45, (amountPressed) * 4/10);
    }
  }

  strokeWeight(1);
}

function setMouseCoords() {
  if (inkLevel > 0) {
    if (mouseIsPressed === true) {
      xmousePointsArray.push(tempMouseX);
      ymousePointsArray.push(tempMouseY);
      inkLevel--;
      amountPressed++;
    }
  }
}

function drawUserPoints() {
  let tempJ = 0;
  for (let i = 0; i < xmousePointsArray.length; i++) {
    rect(xmousePointsArray[i] - 5, ymousePointsArray[tempJ] - 5, 10, 10);
    tempJ++;
  }
}

function showTitleLT() {
  image(tileMap, 83, 20, 260, 56, 37, 1805, 960, 186);
}

function showNavigationButtonsLT() {
  image(tileMap, 26, 487, 63, 25, 1288, 2290, 330, 84);  
  image(tileMap, 313, 487, 60, 26, 1288, 2155, 333, 86);  
  
}

function showHomeButtonLT() {
  image(tileMap, 11, 11, 64, 34, 686, 1100, 660, 420);
  image(tileMap, 14, 14, 57, 26, 1280, 1980, 330, 130);
}

function showSwitchLettersButton() {
  image(tileMap, 13, 475, 90, 54, 686, 1100, 660, 420);
  image(tileMap, 300, 475, 90, 54, 686, 1100, 660, 420);
}

function drawLetters() {
  switch (letterToDraw[letterIndex]) {
    case 'a':
      drawA();
      break;
    case 'b':
      drawB();
      break;
    case 'c':
      drawC();
      break;
    case 'd':
      drawD();
      break;
    case 'e':
      drawE();
      break;
    case 'f':
      drawF();
      break;
    case 'g':
      drawG();
      break;
    case 'h':
      drawH();
      break;
    case 'i':
      drawI();
      break;
    case 'j':
      drawJ();
      break;
    case 'k':
      drawK();
      break;
    case 'l':
      drawL();
      break;
    case 'm':
      drawM();
      break;
    case 'n':
      drawN();
      break;
    case 'o':
      drawO();
      break;
    case 'p':
      drawP();
      break;
    case 'q':
      drawQ();
      break;
    case 'r':
      drawR();
      break;
    case 's':
      drawS();
      break;
    case 't':
      drawT();
      break;
    case 'u':
      drawU();
      break;
    case 'v':
      drawV();
      break;
    case 'w':
      drawW();
      break;
    case 'x':
      drawX();
      break;
    case 'y':
      drawY();
      break;
    case 'z':
      drawZ();
      break;
  }
}

function drawA() {
  strokeWeight(10);
  stroke('black');

  point(100, 350);
  point(300, 350);
  point(150, 250);
  point(200, 150);
  point(250, 250);
  point(200, 250);
}

function drawB() {
  strokeWeight(10);
  stroke('black');

  point(140, 350);
  point(140, 250);
  point(140, 150);
  point(215, 250);
  point(240, 350);
  point(240, 150);
  point(285, 200);
  point(285, 300);
}

function drawC() {
  strokeWeight(10);
  stroke('black');

  point(225, 165);
  point(160, 190);
  point(135, 285);
  point(135, 235);
  point(160, 320);
  point(225, 345);
}

function drawD() {
  strokeWeight(10);
  stroke('black');

  point(140, 350);
  point(140, 250);
  point(140, 150);
  point(190, 340);
  point(190, 160);
  point(240, 200);
  point(265, 250);
  point(240, 300);
}

function drawE() {
  strokeWeight(10);
  stroke('black');

  point(140, 350);
  point(140, 200);
  point(140, 150);
  point(190, 350);
  point(180, 250);
  point(190, 150);
  point(140, 300);
  point(240, 350);
  point(220, 250);
  point(240, 150);
  point(140, 250);
}

function drawF() {
  strokeWeight(10);
  stroke('black');

  point(140, 350);
  point(140, 225);
  point(140, 150);
  point(190, 225);
  point(190, 150);
  point(140, 275);
  point(240, 225);
  point(240, 150);
}

function drawG() {
  strokeWeight(10);
  stroke('black');

  point(100, 250);
  point(125, 185);
  point(200, 150);
  point(125, 315);
  point(200, 350);
  point(275, 315);
  point(275, 185);
  point(275, 285);
  point(230, 285);
  point(200, 285);
}

function drawH() {
  strokeWeight(10);
  stroke('black');

  point(140, 350);
  point(140, 250);
  point(140, 150);
  point(140, 200);
  point(140, 300);
  point(190, 250);
  point(240, 300);
  point(240, 200);
  point(240, 150);
  point(240, 250);
  point(240, 350);
}

function drawI() {
  strokeWeight(10);
  stroke('black');

  point(200, 225);
  point(200, 150);
  point(200, 350);
  point(200, 275);
  point(235, 150);
  point(160, 150);
  point(235, 350);
  point(160, 350);
}

function drawJ() {
  strokeWeight(10);
  stroke('black');

  point(130, 150);
  point(270, 150);
  point(200, 300);
  point(200, 200);
  point(200, 150);
  point(200, 250);
  point(200, 350);
  point(185, 390);
  point(150, 400);
  point(125, 375);
}

function drawK() {
  strokeWeight(10);
  stroke('black');

  point(140, 350);
  point(140, 250);
  point(140, 150);
  point(140, 200);
  point(140, 300);
  point(215, 200);
  point(265, 150);
  point(165, 250);
  point(190, 300);
  point(240, 350);
}

function drawL() {
  strokeWeight(10);
  stroke('black');

  point(140, 350);
  point(140, 250);
  point(140, 150);
  point(140, 200);
  point(140, 300);
  point(190, 350);
  point(240, 350);
  point(215, 350);
}

function drawM() {
  strokeWeight(10);
  stroke('black');

  point(100, 350);
  point(100, 250);
  point(100, 150);
  point(100, 200);
  point(100, 300);
  point(125, 200);
  point(150, 250);
  point(175, 300);
  point(200, 350);
  point(225, 300);
  point(250, 250);
  point(275, 200);
  point(300, 300);
  point(300, 250);
  point(300, 200);
  point(300, 150);
  point(300, 350);
}

function drawN() {
  strokeWeight(10);
  stroke('black');

  point(130, 350);
  point(130, 250);
  point(130, 150);
  point(130, 200);
  point(130, 300);
  point(165, 200);
  point(190, 255);
  point(215, 310);
  point(250, 350);
  point(250, 300);
  point(250, 250);
  point(250, 200);
  point(250, 150);
}

function drawO() {
  strokeWeight(10);
  stroke('black');

  point(100, 250);
  point(125, 185);
  point(200, 150);
  point(125, 315);
  point(200, 350);
  point(275, 315);
  point(275, 185);
  point(300, 250);

}

function drawP() {
  strokeWeight(10);
  stroke('black');

  point(140, 350);
  point(140, 250);
  point(140, 150);
  point(140, 200);
  point(140, 300);
  point(215, 250);
  point(240, 150);
  point(265, 200);
  point(250, 230);
  point(175, 250);
  point(190, 150);
}

function drawQ() {
  strokeWeight(10);
  stroke('black');

  point(100, 250);
  point(125, 185);
  point(200, 150);
  point(125, 315);
  point(200, 350);
  point(275, 315);
  point(275, 185);
  point(300, 250);
  point(250, 300);
  point(275, 340);
  point(300, 350);
}

function drawR() {
  strokeWeight(10);
  stroke('black');

  point(140, 350);
  point(140, 250);
  point(140, 150);
  point(140, 200);
  point(140, 300);
  point(215, 250);
  point(240, 150);
  point(265, 200);
  point(250, 230);
  point(175, 250);
  point(190, 150);
  point(240, 300);
  point(265, 350);
}

function drawS() {
  strokeWeight(10);
  stroke('black');

  point(125, 175);
  point(200, 140);
  point(125, 315);
  point(200, 350);
  point(275, 315);
  point(275, 175);
  point(200, 235);
  point(135, 210);
  point(280, 290);
}

function drawT() {
  strokeWeight(10);
  stroke('black');

  point(200, 250);
  point(200, 150);
  point(200, 350);
  point(100, 150);
  point(300, 150);
}

function drawU() {
  strokeWeight(10);
  stroke('black');

  point(200, 350);
  point(100, 170);
  point(300, 170);
  point(150, 330);
  point(250, 330);
  point(125, 290);
  point(275, 290);
  point(100, 230);
  point(300, 230);
}

function drawV() {
  strokeWeight(10);
  stroke('black');

  point(200, 400);
  point(100, 150);
  point(300, 150);
}

function drawW() {
  strokeWeight(10);
  stroke('black');

  point(200, 250);
  point(75, 200);
  point(95, 295);
  point(305, 295);

  point(150, 320);
  point(245, 320);

  point(325, 200);
  point(125, 400);
  point(275, 400);
}

function drawX() {
  strokeWeight(10);
  stroke('black');

  point(200, 250);
  point(300, 400);
  point(100, 400);
  point(300, 125);
  point(100, 125);
}

function drawY() {
  strokeWeight(10);
  stroke('black');

  point(200, 250);
  point(200, 400);
  point(100, 150);
  point(300, 150);
}

function drawZ() {
  //points for letters
  strokeWeight(10);
  stroke('black');

  point(300, 400);
  point(100, 400);
  point(200, 275);
  point(300, 150);
  point(100, 150);
  point(200, 400);
  point(200, 150);
  point(250, 215);
  point(150, 335);
}