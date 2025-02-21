const forma = document.forms["myForm"];
const email = document.forms["myForm"]["email"];
const password = document.forms["myForm"]["password"];
const confirmPass = document.forms["myForm"]["confirmPass"];

function posaljiFormu() {
  if (email.value.length < 8) {
    alert("Email nije validan");
  }
  if (password.value.length <= 6) {
    alert("Sifra je prekratka");
  }
  if (confirmPass.value != password.value) {
    alert("Sifre se ne podudaraju");
  }
}
