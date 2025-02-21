// 1.

// function person(ime, prezime) {
//   return [ime, prezime];
// }

// function greska() {
//   console.log("Ime i prezime nisu validni");
// }

// function tacnost(callback1, callback2, ime, prezime) {
//   if (ime === "Demir" && prezime === "Hamzagic") {
//     return callback1(ime, prezime);
//   } else {
//     callback2();
//   }
// }

// console.log(tacnost(person, greska, "Demir", "Hamzagic"));

// 2.

let a = 5;
let b = 3;

function rezultCheck() {
  if (a > b) {
    return true;
  } else {
    return false;
  }
}

function rezultSender(calculate) {
  return calculate();
}

function tacnost(callback) {
  if (callback) {
    console.log("True");
  } else console.log("False");
}

tacnost(rezultSender(rezultCheck));
