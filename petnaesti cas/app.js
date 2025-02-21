// callback function

// function mnozenje(broj, callback) {
//   const rezultat = broj * 2;
//   callback(rezultat);
// }
// function PrikaziRezultat(rezultat) {
//   console.log(`Rezultat je ${rezultat}`);
// }

// mnozenje(5, PrikaziRezultat);

const QuestionText = document.getElementById("questionText");
const buttons = document.querySelectorAll(".questionButton");
const submitButton = document.getElementById("submitButton");
const div = document.getElementById("buttonDiv");
const odgovori = [
  {
    pitanje: "Koji je rezultat od 1+1?",
    odgovor: [
      { text: "Jedan", isCorrect: false },
      { text: "Tri", isCorrect: false },
      { text: "Dva", isCorrect: true },
      { text: "Cetiri", isCorrect: false },
    ],
  },
  {
    pitanje: "Kojoj kompaniji pripada YouTube",
    odgovor: [
      { text: "Microsoft", isCorrect: false },
      { text: "Amazon", isCorrect: false },
      { text: "Apple", isCorrect: false },
      { text: "Google", isCorrect: true },
    ],
  },
  {
    pitanje: "Koji element je najtvrdji?",
    odgovor: [
      { text: "Kamen", isCorrect: true },
      { text: "Vatra", isCorrect: false },
      { text: "Drvo", isCorrect: false },
      { text: "Voda", isCorrect: false },
    ],
  },
  {
    pitanje: "Koja skracenica je za ,i dont care,",
    odgovor: [
      { text: "lol", isCorrect: false },
      { text: "idk", isCorrect: false },
      { text: "idc", isCorrect: true },
      { text: "lmao", isCorrect: false },
    ],
  },
];

let nesto;
let q = 0;
let score = 0;

function kvizStart() {
  showOdgovor(q, odgovori[q]);
}

function checkFunction(answer) {
  if (answer === "true") {
    score++;
    console.log("tacno");
  } else {
    console.log("netacno");
  }
}
function showOdgovor(index, text) {
  div.innerText = "";
  QuestionText.innerText = text.pitanje;
  odgovori[index].odgovor.forEach(function (text, broj) {
    const dugme = document.createElement("button");
    dugme.className = "questionButton";
    dugme.innerText = odgovori[index].odgovor[broj].text;
    let nesto = odgovori[index].odgovor[broj].isCorrect;
    dugme.setAttribute("isCorrect", nesto);
    dugme.addEventListener("click", function (e) {
      checkFunction(e.target.getAttribute("isCorrect"));
    });
    div.appendChild(dugme);
  });
}

function kvizResult() {
  div.innerText = "";
  QuestionText.innerText = `Kviz je zavrsen!  Vas score je ${score}/${odgovori.length}`;
  submitButton.style.display = "none";
}

submitButton.addEventListener("click", function () {
  q++;
  if (q < odgovori.length) {
    kvizStart();
  } else {
    kvizResult();
  }
});

kvizStart();
