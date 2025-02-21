// const pozdrav = () => {
//   console.log("halo");
// };
// pozdrav();

// halo();  ----Hoisting
// function halo() {
//   console.log("pozdrav");
// }

// Hoisting je deklarisanje (nazivanje/stvaranje) promenljivih koje jos uvek nisu definisanje. Odnosno nazivanje promenljivih u kodu pre nego sto ih nazovemo

//pass by value
// let a = 10
// let b = a
// console.log(a)
// console.log(b)

//pass by reference

// let c = [1, 2];
// let d = c; ---- 'd' i 'c' postaju povezani
// c[1] = 3; ---- promena se vrsi i na 'd' i na 'c'
// console.log(c);
// console.log(d);

const input = document.getElementById("numberInput");
const numberButton = document.getElementsByClassName("numberButton");
const operacija = document.getElementsByClassName("operacija");
const resetButton = document.getElementById("resetButton");
const jednakost = document.getElementById("jednakost");

resetButton.addEventListener("click", function () {
  input.value = "";
});

for (let i = 0; i < numberButton.length; i++) {
  numberButton[i].addEventListener("click", function () {
    input.value = input.value + numberButton[i].innerHTML;
  });
}
jednakost.addEventListener("click", function () {
  input.value = eval(input.value);
});

for (let i = 0; i < operacija.length; i++) {
  operacija[i].addEventListener("click", function () {
    if (input.value[input.value.length - 1] !== operacija[i].innerText) {
      input.value += operacija[i].innerText;
    } else {
      input.value[input.value.length - 1] = operacija[i].innerText;
    }
  });
}
