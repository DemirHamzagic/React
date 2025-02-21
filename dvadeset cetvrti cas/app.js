// class Osoba {
//   constructor(ime, prezime) {
//     this.ime = ime;
//     this.prezime = prezime;
//   }
//   pozdrav() {
//     console.log("Pozdrav " + this.ime + " " + this.prezime);
//   }
// }

// const osoba = new Osoba("Dino", "Merlin");
// const osoba2 = new Osoba("Zdravko", "Colic");
// osoba.pozdrav();
// osoba2.pozdrav();

class Igrica {
  constructor(
    tip,
    kvalitet,
    popularnost,
    memorija,
    level,
    deaths,
    completed,
    money
  ) {
    this.tip = tip;
    this.kvalitet = kvalitet;
    this.popularnost = popularnost;
    this.memorija = memorija;
    this.level = level;
    this.deaths = deaths;
    this.completed = completed;
    this.money = money;
  }
  configuration() {
    console.log("Ovo je " + this.tip + " igrica");
    if (this.kvalitet == 1)
      console.log("Kvalitet je ocenjen sa " + this.kvalitet + " zvezdicom");
    else if (this.kvalitet == 5)
      console.log("Kvalitet je ocenjen sa " + this.kvalitet + " zvezdica");
    else console.log("Kvalitet je ocenjen sa " + this.kvalitet + " zvezdice");
    console.log("Broj igraca je " + this.popularnost);
    console.log("Velicina igrice je " + this.memorija + " GB");
  }
  userInfo() {
    console.log("Tvoj igrac je level " + this.level);
    console.log("Tvoj je umro " + this.deaths + " puta");
    if (this.completed == true) console.log("Tvoj igrac je zavrsio igru!");
    else console.log("Tvoj igrac nije zavrsio igru!");
    console.log("Imas " + this.money + " para");
  }
  bossesDone() {
    console.log("Presao si pocetnok bossa: " + this.tip);
    console.log("Presao si mini-bossa: " + this.kvalitet);
    console.log("Presao si 3. bossa: " + this.popularnost);
    console.log("Presao si zadnjeg bossa: " + this.memorija);
  }
}

const igrica = new Igrica("Horror", 5, "87k", 47);
const igrica2 = new Igrica("Survival", 3, "7.5k", 6);
const user = new Igrica(0, 0, 0, 0, 15, 856, true, 45103);
const bosses = new Igrica(true, true, false, false);
igrica.configuration();
igrica2.configuration();
user.userInfo();
bosses.bossesDone();
