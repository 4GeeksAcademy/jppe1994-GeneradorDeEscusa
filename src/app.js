/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//Genero la función que generará las frases los arrays para luego poder seleccionar cada elemento segun su posición
function generadorDeEscusa() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  //Aqui se generará el nº ramdon para que coja la posicion del array segun su ramdon es decir el valor aleatorio generado
  let numAleatorioWho = getNumeroAleatorio(who);

  let numAleatorioAction = getNumeroAleatorio(action);

  let numAleatorioWhat = getNumeroAleatorio(what);

  let numAleatorioWhen = getNumeroAleatorio(when);
  //Aqui imprimirá la frase uniendo el resultrado de cada random
  return ` ${who[numAleatorioWho]} ${action[numAleatorioAction]} ${what[numAleatorioWhat]} ${when[numAleatorioWhen]}`;
}
//Esta es la función que genera el nº ramdon que luego eligirá la posición del array
function getNumeroAleatorio(arrayElementos) {
  return Math.floor(Math.random() * arrayElementos.length);
}
//Esto enviará el generador de escusa cada vez que se recargue la web

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generadorDeEscusa();
  console.log("Hello Rigo from the console!");
};
