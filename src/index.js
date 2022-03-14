const playerOneDice = [...document.querySelectorAll(".player-one-dot")];
const playerTwoDice = [...document.querySelectorAll(".player-two-dot")];
const dots = [...document.querySelectorAll(".dot")];
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

let resultDrawPlayerOne;
let resultDrawPlayerTwo;
let buttonState = false;

function drawPlayerOne() {
  let numberOfDots = Math.floor(Math.random() * playerOneDice.length);
  for (let i = 0; i < numberOfDots; i++) {
    playerOneDice[i].classList.add("hidden");
  }
  resultDrawPlayerOne = 6 - numberOfDots;
  return resultDrawPlayerOne;
}

function drawPlayerTwo() {
  let numberOfDots = Math.floor(Math.random() * playerTwoDice.length);
  for (let i = 0; i < numberOfDots; i++) {
    playerTwoDice[i].classList.add("hidden");
  }
  resultDrawPlayerTwo = 6 - numberOfDots;
  return resultDrawPlayerTwo;
}

function reset() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("hidden");
  }
  resultDrawPlayerOne = 0;
  resultDrawPlayerTwo = 0;
  h1.textContent = "Refresh me";
}

function game() {
  if (resultDrawPlayerOne === resultDrawPlayerTwo) {
    h1.textContent = "🚩 Draw 🚩";
  } else if (resultDrawPlayerOne > resultDrawPlayerTwo) {
    h1.textContent = "🚩 Player 1 won";
  } else if (resultDrawPlayerOne < resultDrawPlayerTwo) {
    h1.textContent = "Player 2 won 🚩";
  }
}

button.addEventListener("click", () => {
  if (buttonState === false) {
    drawPlayerOne();
    drawPlayerTwo();
    game();
    button.textContent = "RESET";
    buttonState = true;
  } else {
    button.textContent = "START";
    buttonState = false;
    reset();
  }
});
