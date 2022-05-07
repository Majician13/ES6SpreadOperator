import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//spread combines both arrays depending on where you put the spread.
const citrus = ["lime", "lemon", "Orange"];
const fruits = ["Apple", ...citrus, "Banana", "Coconut"];

const citrus1 = ["lime", "lemon", "Orange"];
const fruits1 = ["Apple", , "Banana", "Coconut", ...citrus1];

console.log(fruits);
console.log(fruits1);

const fullName = {
  fName: "James",
  lName: "Bond"
};

//spread "..." places fName/lName into user
const user = {
  ...fullName,
  id: 1,
  username: "jamesbond007"
};

//fullName places object and nests fName/lName into fullName into user1.
const user1 = {
  fullName,
  id: 1,
  username: "jamesbond007"
};

console.log(user);
console.log(user1);
