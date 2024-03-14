const list = document.querySelector("#list");
const form = document.querySelector("#form");
const input = document.querySelector("#input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  itemization();
});

const itemization = function () {
  if (input.value !== "") {
    const newItem = document.createElement("li");
    const newButton = document.createElement("button");
    newButton.innerText = "Delete";
    newItem.setAttribute("id", input.value);
    newItem.innerText = input.value;
    newItem.appendChild(newButton);
    list.appendChild(newItem);
    newButton.addEventListener("click", function (e) {
      e.preventDefault();
      list.removeChild(newItem);
    });
  }
  input.value = "";
};
