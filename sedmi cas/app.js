// Nodes
const parentDiv = document.createElement("div");
const div = document.createElement("div");
const div2 = document.createElement("div");
parentDiv.appendChild(div);
parentDiv.appendChild(div2);
const h1 = document.createElement("h1");
const button = document.createElement("button");
button.innerText = "X";
const a1 = document.createElement("a");
const a2 = document.createElement("a");
const a3 = document.createElement("a");
const a4 = document.createElement("a");
const openButton = document.createElement("button");
openButton.innerText = "Open Sidebar";
div2.appendChild(openButton);
div2.className = "div2";
parentDiv.className = "parentDiv";
div.className = "sidebar";
a1.href = "#";
a2.href = "#";
a3.href = "#";
a4.href = "#";

div2.addEventListener("click", function () {
  div.style.left = "0px";
  div.style.transition = "1s";
});

button.addEventListener("click", function () {
  div.style.left = "-150px";
  div.style.transition = "1s";
});

a1.innerText = "About";
a2.innerText = "Service";
a3.innerText = "Contact";
a4.innerText = "Client";
div.appendChild(button);
div.appendChild(a1);
div.appendChild(a2);
div.appendChild(a3);
div.appendChild(a4);
const body = document.body;
body.appendChild(parentDiv);
