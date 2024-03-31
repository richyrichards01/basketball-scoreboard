let homeScore = document.getElementById("home-score");
const homeOneBtn = document.getElementById("home-one");
const homeTwoBtn = document.getElementById("home-two");
const homeThreeBtn = document.getElementById("home-three");
const home = document.getElementById("home-review");

const away = document.getElementById("away-review");
const awayOneBtn = document.getElementById("away-one");
const awayTwoBtn = document.getElementById("away-two");
const awayThreeBtn = document.getElementById("away-three");
let awayScore = document.getElementById("away-score");

const reStartGame = document.getElementById("restart-game");
const playGame = document.getElementById("play-game");
const endGame = document.getElementById("end-game");
let hScore = 0;
let gScore = 0;

//FUNCTIONS FOR HOME
homeOneBtn.addEventListener("click", () => {
  const totalScore = (hScore += 1);
  homeScore.textContent = totalScore;
});
homeTwoBtn.addEventListener("click", () => {
  const totalScore = (hScore += 2);
  homeScore.textContent = totalScore;
});
homeThreeBtn.addEventListener("click", () => {
  const totalScore = (hScore += 3);
  homeScore.textContent = totalScore;
});

//FUNCTIONS FOR AWAY
awayOneBtn.addEventListener("click", () => {
  const leadScore = (gScore += 1);
  awayScore.textContent = leadScore;
});
awayTwoBtn.addEventListener("click", () => {
  const leadScore = (gScore += 2);
  awayScore.textContent = leadScore;
});
awayThreeBtn.addEventListener("click", () => {
  const leadScore = (gScore += 3);
  awayScore.textContent = leadScore;
});

reStartGame.addEventListener("click", () => {
  hScore = 0;
  gScore = 0;
  homeScore.textContent = 0;
  awayScore.textContent = 0;
  location.reload();
});

function homeToken() {
  return Math.floor(Math.random() * 50) + 1;
}
function awayToken() {
  return Math.floor(Math.random() * 50) + 1;
}

let homeGen = homeToken();
let awayGen = awayToken();

playGame.onclick = () => {
  homeScore.textContent = homeGen;
  awayScore.textContent = awayGen;
  hScore = homeGen;
  gScore = awayGen;
};

function generate() {
  if (hScore > gScore) {
    home.textContent = "HOME-WINS";
    away.textContent = "AWAY-LOST";
  } else if (hScore === gScore) {
    home.textContent = "HOME-DRAW";
    away.textContent = "AWAY-DRAW";
  } else {
    away.textContent = "AWAY-WINS";
    home.textContent = "HOME-LOST";
  }
}

endGame.addEventListener("click", generate);
