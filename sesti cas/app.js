const openButton = document.getElementById("openButton");
const removeButton = document.getElementById("removeButton");
const sidebar = document.getElementById("sidebar");
const a = document.getElementById("a");

openButton.addEventListener("click", function () {
  sidebar.style.left = "0px";
});

removeButton.addEventListener("click", function () {
  sidebar.style.left = "-170px";
});
