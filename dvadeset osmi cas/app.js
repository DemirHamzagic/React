// 1.

const sentence = "Danas radimo 4, cas u centar nit";
let recenica = "";
const samoglasnici = ["a", "e", "i", "o", "u"];
for (let i = 0; i < sentence.length; i++) {
  char = sentence[i];
  for (let j = 0; j < samoglasnici.length; j++) {
    if (char === samoglasnici[j]) {
      char = char.toUpperCase();
    }
  }
  recenica += char;
}
console.log(recenica);

// 2.

const arr = [
  [10, 23, 14],
  [40, 62, 37],
  [3, 99, 7],
];
for (let i = 0; i < arr.length; i++) {
  arr[i].forEach((element) => {
    if (element % 2 == 0) console.log(element);
  });
}

// arr.map((el) => el.map((el) => (el % 2 === 0 ? console.log(el) : undefined)));
