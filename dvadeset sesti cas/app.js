//-----------------------------------
// Manipulacija preko funkcije
//-----------------------------------

class Auto {
  constructor(brand) {
    this.brand = brand;
    this.speed = 0;
  }
  accelerate(uvecanjeBrzine) {
    this.speed += uvecanjeBrzine;
  }
}

// function driveCar(car, speed) {
//   car.accelerate(speed);
// }

// const myCar = new Auto("Audi");

// driveCar(myCar, 30);
// driveCar(myCar, 30);
// driveCar(myCar, 30);

// console.log(myCar);

//-----------------------------------
// Manipulacija preko classe
//-----------------------------------

class Driver {
  driveCar(car, speed) {
    car.accelerate(speed);
  }
}

const car = new Auto("Audi");
const me = new Driver();

me.driveCar(car, 40);
me.driveCar(car, 40);
me.driveCar(car, 40);

console.log(car);

// Enkapsulacija

class Osoba {
  #age = 25;
  constructor(ime, prezime, eyeColor) {
    this.ime = ime;
    this.prezime = prezime;
    this.eyeColor = eyeColor;
  }
  changeAge() {
    console.log(this.#age); // nacin menjanja const propertija (#age je const)
  }
}

const ja = new Osoba("Brat", "Bratic", "zelena");
console.log(ja.eyeColor);
ja.changeAge();
ja.eyeColor = "plava";

console.log(ja.eyeColor);

const arr = [1, 2, 3, 4, 5];

// function mapFunc(element, p) {
//   for (let i = 0; i < element.length; i++) {
//     console.log(element[i] * p);
//   }
// }
// function eachFunc(niz, p) {
//   niz.forEach((element) => {
//     console.log(element * p);
//   });
// }
// eachFunc(arr, 2);
// mapFunc(arr, 2);
