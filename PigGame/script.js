"use strict ";

let score0El = document.getElementById("score0");
let score1El = document.querySelector("#score1");
let player0El = document.getElementById("player0");
let player1El = document.querySelector("#player1");
let current0El = document.getElementById("current0");
let current1El = document.querySelector("#current1");
let diceEl = document.querySelector(".dice ");
let btnNew = document.querySelector(".btnNew");
let btnRoll = document.querySelector(".btnRoll");
let btnHold = document.querySelector(".btnHold");

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

btnRoll.addEventListener("click", () => {
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.classList.remove("hidden");
  diceEl.src = `Imgs/${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("playerActive");
    player1El.classList.toggle("playerActive");
  }
});
