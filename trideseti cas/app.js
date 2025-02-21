const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const winnerEl = document.querySelector(".winner--header");
// Napraviti funkciju init()

// Postaviti rezultate oba igraca na 0

// Trenutni score postaviti na 0

// Izabrati random active player

// Postaviti pocetni text 0 na DOMU
// 1. score0El, score1El
// 2. current0El, current1El

// Sakriti kockicu na pocetku igrice

// Sakriti player--winner klasu na oba igraca

// Postaviti player--active klasu u odnosu na to koji je igrac aktivan
let scores, currentScore, activePlayer;

function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = Math.floor(Math.random() * 2);

  const savedData = JSON.parse(localStorage.getItem("scores"));
  console.log(localStorage.getItem("scores"));

  if (savedData) {
    scores = savedData;

    if (scores[0] >= 10 || scores[1] >= 10) {
      scores = [0, 0];
      localStorage.removeItem("scores");
    }
  } else {
    scores = [0, 0];
  }
  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");

  if (activePlayer === 0) {
    player1El.classList.remove("player--active");
    player0El.classList.add("player--active");
  } else {
    player0El.classList.remove("player--active");
    player1El.classList.add("player--active");
  }
  btnRoll.disabled = false;
  btnHold.disabled = false;
  winnerEl.textContent = ``;
}
init();

// Napraviti funkciju switchPlayer()

// currentScore postaviti na 0

// Sa klase "current--0" promeniti tekst unutar DOMA (ne vrednost), u zavisnosti koji je player aktivan

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;

  player1El.classList.toggle("player--active");
  player0El.classList.toggle("player--active");
}
switchPlayer();

// Napraviti funkciju vezanu za btnRoll

// Unutar funkcije napraviti varijablu koja poziva random broj od 1 do 6

// Ukloniti hidden klasu sa diceEl

// U zavisnosti od broja varijable od 1 do 6, prikazati kockicu sa tim brojem

// Dodati vrednost varijable na currentScore

btnRoll.addEventListener("click", function () {
  let rollNumber = Math.floor(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `images/dice-${rollNumber}.png`;
  if (rollNumber === 1) {
    switchPlayer();
  } else {
    currentScore += rollNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});
btnHold.addEventListener("click", function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  localStorage.setItem("scores", JSON.stringify(scores));
  if (scores[activePlayer] >= 10) {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");

    diceEl.classList.add("hidden");
    winnerEl.style.opacity = "1";
    winnerEl.textContent = `Player ${activePlayer + 1} WON the game!`;
    btnRoll.disabled = true;
    btnHold.disabled = true;
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener("click", function () {
  init();
});
// Napraviti funkciju koju vezemo za btnHold

// Score nekog igraca ce postati currentScore

// Promeniti igraca

// drugi nacin za disablovanje buttona nakon pobede je dodavanje deBounca
// let playing = true ////// if (playing)
