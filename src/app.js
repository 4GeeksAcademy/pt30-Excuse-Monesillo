/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello, I'm excuse generator!");
};

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
function getExcuseGen() {
  let changeWho = who[Math.floor(Math.random() * who.length)];
  let changeAction = action[Math.floor(Math.random() * action.length)];
  let changeWhat = what[Math.floor(Math.random() * what.length)];
  let changeWhen = when[Math.floor(Math.random() * when.length)];

  return changeWho + " " + changeAction + " " + changeWhat + " " + changeWhen;
}

document.getElementById("excuse").innerHTML = getExcuseGen();
