const taskForm = document.getElementById("taskForm");
const addButton = document.forms["taskForm"]["addButton"];
const addInput = document.forms["taskForm"]["addInput"];
const addedForm = document.forms["addedForm"];
const body = document.body;

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (addInput.value.length > 0) {
    dodaj(addInput.value);
    addInput.value = "";
  }
});

function dodaj(text) {
  const div = document.createElement("div");
  div.className = "taskDiv";
  const input = document.createElement("input");
  input.type = "checkbox";
  const label = document.createElement("label");
  const editInput = document.createElement("input");
  editInput.style.display = "none";
  label.innerText = text;
  label.style.display == "inline";
  const button = document.createElement("button");
  const editButton = document.createElement("button");
  editButton.className = "editButton";
  editButton.innerText = "Edit";
  button.innerText = "Delete";
  button.className = "deleteButton";
  div.appendChild(input);
  div.appendChild(editInput);
  div.appendChild(label);
  div.appendChild(button);
  div.appendChild(editButton);
  body.appendChild(div);
  button.addEventListener("click", function () {
    body.removeChild(div);
  });
  editButton.addEventListener("click", function () {
    if (label.style.display != "none") {
      label.style.display = "none";
      editInput.style.display = "inline";
    } else {
      label.innerText = editInput.value;
      label.style.display = "inline";
      editInput.style.display = "none";
      editInput.value = "";
    }
  });
}
