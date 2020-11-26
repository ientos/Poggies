let vid;
let run = true;
let playRR = true;

class rr {
  show() {
    background('black');
    fill('white');
    textFont("Arial");
    textSize(13);
    text("Mr. Rick says \"Click anywhere to go back\"", 155, 20);
    if (run == true) {
      run = false;
      vid = createVideo(['assets/videos/poggiesThemeSong.mp4'], vidLoad);
      vid.volume(3/10);
      vid.size(400, 400);
      vid.position(0, 50, 'fixed');
    }
  }
}

function vidLoad() {
  fill('white');
  textFont("Arial");
  textSize(17);
  vid.loop();
}
