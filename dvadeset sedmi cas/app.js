// Postoje 4 osnovna principa objektivnog orijentisanog programiranja
// 1. Abstrakcija ()
// 2. Nasledjivanje ()
// 3. Polimarfizam ()
// 4. Enkapsulacija ()

const names = ["Demir", "Alexa", "Bob", "Darko", "dva"];

const [prvi, drugi, treci, cetvrti, peti = "jedan"] = names;
console.log(prvi);
console.log(drugi);
console.log(treci);
console.log(cetvrti);

// Defaultna vrednost (setovanje defaultne vrednosti)

console.log(peti);

// const [jedan, , tri, cetiri] = names;
// console.log(jedan);
// console.log(tri);
// console.log(cetiri);

let [a, b, c] = [1, 2, 3];

const niz = ["Demir", "Pavle", "David", "Sergej", "Avdo", "Mekic"];

const [prvo, drugo, ...drugaImena] = niz;

console.log(drugaImena);

// const person = {
//   firstName: "Ja",
//   secondName: "On",
//   eyeColor: "brown",
//   skillSet: {
//     sport: "Football",
//     game: "Minecraft",
//   },
// };
// const { firstName, secondName, eyeColor } = person;

// moraju {} zagrade jer se stvari nalaze u objektu i ime varijable mora da bude isto kao i u objektu

// console.log(firstName, secondName, eyeColor);

const osoba = {
  firstName: "Demir",
  secondName: "Hamzagic",
  eyeColor: "Green",
  skillSet: {
    programing: "C, C++",
    sport: "Basketball",
    language: "Serbian",
  },
};

const {
  firstName,
  skillSet: { programing, ...rest },
  ...otherStuff
} = osoba;
console.log(firstName, programing, rest, otherStuff);

const { first = "empty", second = "empty" } = osoba;
const obj = {
  first,
  second,
};
console.log(obj);
