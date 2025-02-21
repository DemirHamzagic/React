//1. Zadatak

for (let i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
  else if (i % 5 == 0) console.log("Buzz");
  else if (i % 3 == 0) console.log("Fizz");
  else console.log(i);
}

//2. Zadatak

let upperLetter = "";
const sentence = "dobar Dan, Kako Ste?";
for (let i = 0; i < sentence.length; i++) {
  let b = sentence[i];
  if (sentence[i].toUpperCase() == b) {
    upperLetter += sentence[i];
  }
}
console.log(upperLetter);

// Drugi nacin

// let upperLetter = "";
// const sentence = "dobar Dan, Kako Ste?";
// for (let i = 0; i < sentence.length; i++) {
//   if (sentence[i] >= "A" && sentence[i] <= "Z") {
//     upperLetter += sentence[i];
//   }
// }
// console.log(upperLetter);
