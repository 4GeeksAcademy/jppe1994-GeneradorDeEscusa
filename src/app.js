/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generadorDeEscusa() {
  
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let numAleatorioWho = getNumeroAleatorio(who);

  let action = ["ate", "peed", "crushed", "broke"];
  let numAleatorioAction = getNumeroAleatorio(action);

  let what = ["my homework", "the keys", "the car"];
  let numAleatorioWhat = getNumeroAleatorio(what);
  
  let when = ["before the class", "right on time", "when I finished", "during my lunch","while I was praying"];
  let numAleatorioWhen = getNumeroAleatorio(when);

      return ( who[numAleatorioWho] + " " + action[numAleatorioAction] + " " + what[numAleatorioWhat] + " " + when[numAleatorioWhen]
  );
}

function getNumeroAleatorio(arrayElementos) {
      return Math.floor(Math.random() * arrayElementos.length);
}

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generadorDeEscusa();
        console.log("Hello Rigo from the console!");
};
