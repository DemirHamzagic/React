const paragraf = document.getElementById("paragraf");
paragraf.innerText = "Hello world";
paragraf.style.color = "red";
paragraf.style.fontSize = "50px";
console.log(paragraf);

const header = document.getElementById("header");
header.innerText = "Poglavlje";
header.style.fontFamily = "Arial";

const link1 = document.getElementById("link1");
link1.innerText = "LinkGoogla";
link1.style.fontSize = "30px";

const link2 = document.getElementById("link2");
link2.innerText = "LinkYoutuba";
link2.style.fontSize = "30px";
link2.style.textDecoration = "none";
link2.style.border = "black solid 2px";

const div = document.getElementById("Div");
div.style.width = "200px";
div.style.height = "200px";
div.style.backgroundColor = "cyan";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";

const divText1 = document.getElementById("DivText1");
const divText2 = document.getElementById("DivText2");

divText1.innerText = "Bla Bla";
divText1.style.padding = "10px";
divText2.innerText = "Nesto";
divText2.style.padding = "10px";

const lists = document.getElementsByClassName("lista");
// lists[1].style.color = "red";
for (let i = 0; i < lists.length; i++) {
  lists[i].style.color = "orange";
}
g;

const lists2 = document.getElementsByTagName("li");
lists2[3].style.color = "red";
