// 1. Nadji najmanji i najveci broj

const niz = [1, 3, 5, 10, 2, 0, 8];
let max = niz[0];
let min = niz[0];

for (let i = 1; i < niz.length; i++) {
  if (max < niz[i]) {
    max = niz[i];
  }
  if (min > niz[i]) {
    min = niz[i];
  }
}
console.log(max, min);
// 2.

function convert(a) {
  let faranhajt = (a * 9) / 5 + 32;
  return faranhajt;
}
console.log(convert(32));
