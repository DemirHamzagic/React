// class Zivotinja {
//   constructor(ime) {
//     this.ime = ime;
//   }
//   info() {
//     console.log(`Ime zivotinje je ${this.ime}`);
//   }
//   zvuk() {
//     console.log(`${this.ime} pravi zvuk`);
//   }
// }

// class Pas extends Zivotinja {
//   constructor(ime, rasa) {
//     super(ime);
//     this.rasa = rasa;
//   }
//   zvuk() {
//     console.log(`${this.ime} laje`);
//   }
// }

// const nekaZivotinja = new Zivotinja("neki pas");
// nekaZivotinja.zvuk();
// const nekiPas = new Pas("Rex", "Pitbull");
// nekiPas.zvuk();

class Objekat {
  constructor(vrstaObjekta, visina, duzina) {
    this.vrstaObjekta = vrstaObjekta;
    this.visina = visina;
    this.duzina = duzina;
  }
  objectType() {
    console.log(
      `Ovo je ${this.vrstaObjekta}, visoka je ${this.visina} i duga je ${this.duzina}`
    );
  }
}

class Zgrada extends Objekat {
  constructor(vrstaObjekta, visina, duzina, boja, brojStanova, sirina) {
    super(vrstaObjekta, visina, duzina);
    this.boja = boja;
    this.brojStanova = brojStanova;
    this.sirina = sirina;
  }
  objectType() {
    console.log(
      `Ovo je ${this.vrstaObjekta}, visoka je ${this.visina}, duga je ${this.duzina}, ${this.boja} je, ima ${this.brojStanova} stanova i siroka je ${this.sirina}`
    );
  }
}

// const vrsta = new Objekat("Banka", "100m", "30m");
// vrsta.objectType();
const type = new Zgrada("Banka", "100m", "30m", "Plava", 158, "50m");
type.objectType();
