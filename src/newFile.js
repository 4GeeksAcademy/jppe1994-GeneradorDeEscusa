window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generadorDeEscusa();
  console.log("Hello Rigo from the console!");

  let generadorDeEscusa;
  () => {
    return "Mi gato está pesao";
  };
};
