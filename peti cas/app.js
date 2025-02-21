// addEventListener
const button = document.getElementById("button");
const modal = document.getElementById("modal");
const removeButton = document.getElementById("removeButton");

button.addEventListener("click", function () {
  modal.style.display = "block";
});

removeButton.addEventListener("click", function () {
  modal.style.display = "none";
});
