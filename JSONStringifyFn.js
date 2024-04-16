let jsonContainerElement = document.getElementById("jsonContainer");

let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
  name: "Rahul",
  age: 25,
  gender: "Male",
};
let todos = [
  {
    todo: "Attending CCBP sessions",
    todoStatus: "Completed",
  },
  {
    todo: "Completing practice sets",
    todoStatus: "Not Completed",
  },
  {
    todo: "Asking doubts",
    todoStatus: "Completed",
  },
];

let bikesStringified = JSON.stringify(bikes);
let personStringified = JSON.stringify(person);
let todosStringified = JSON.stringify(todos);

let paraElement = document.createElement("p");
paraElement.classList.add("json-content");
paraElement.id = "jsonContent";
paraElement.textContent = bikesStringified;
jsonContainerElement.appendChild(paraElement);

let paraPersonElement = document.createElement("p");
paraPersonElement.classList.add("json-content");
paraPersonElement.id = "jsonContent";
paraPersonElement.textContent = personStringified;
jsonContainerElement.appendChild(paraPersonElement);

let paraTodosElement = document.createElement("p");
paraTodosElement.classList.add("json-content");
paraTodosElement.id = "jsonContent";
paraTodosElement.textContent = todosStringified;
jsonContainerElement.appendChild(paraTodosElement);