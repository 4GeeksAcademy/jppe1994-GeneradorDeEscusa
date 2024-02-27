/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generadorDeEscusa();
  console.log("Hello Rigo from the console!");
};

function generadorDeEscusa() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let numAleatorio = Math.floor(Math.random() * 4);

  let action = ["ate", "peed", "crushed", "broke"];
  let numAleatorioAction = Math.floor(Math.random() * 4);

  let what = ["my homework", "the keys", "the car"];
  let numAleatorioWhat = Math.floor(Math.random() * 3);

  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let numAleatorioWhen = Math.floor(Math.random() * 5);

  return (
    who[numAleatorio] +
    " " +
    action[numAleatorioAction] +
    " " +
    what[numAleatorioWhat] +
    " " +
    when[numAleatorioWhen]
  );
}
