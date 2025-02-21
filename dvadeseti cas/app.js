// single threded -- sinhronovano (jedno po jedno se izvrsava)
// multy threded -- asinhrovano (vise stvari od jednom izvrsava)

console.log("a");

setTimeout(() => {
  console.log("b");
});

console.log("c");

function d() {
  console.log("d");
}
console.log("d");

// callback(hell) -- funkcija u funkciji
// Promise
// async/await

//Promise

function fetchData() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      const succses = true;
      if (succses) {
        const data = { id: 1, ime: "Korisnik" };
        resolve(data);
      } else {
        rejected("Greska");
      }
    }, 1000);
  });
}
// then/ catch/ finally
fetchData()
  .then((data) => console.log("Podaci su uspesno prikazani!"))
  .catch((error) => {
    console.log("Neuspesno prikazivanje podataka", error);
  });

function userInfo() {
  return new Promise((poslato, odbijeno) => {
    setTimeout(() => {
      const uspesno = true;
      if (uspesno) {
        const userData = {
          Username: "Player",
          AccLevel: 19,
          SkillRank: "Good",
          Expirience: "None",
        };
        poslato(userData);
      } else {
        odbijeno("Pristup odbijen!");
      }
    }, 2000);
  });
}

userInfo()
  .then((userData) => console.log(userData))
  .catch((greska) => {
    console.log("Greska!", greska);
  });
//   .finally(() => {
//     console.log("Fatalna greska!");
//   });
