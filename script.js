let button1 = document.getElementById("amarelo");
let button2 = document.getElementById("azul");
let button3 = document.getElementById("verde");
let button4 = document.getElementById("rosa");
let button5 = document.getElementById("preto");
let button6 = document.getElementById("vermelho");
let button7 = document.getElementById("laranja");

button1.addEventListener("click", () => {
  document.body.style.background = "#FFFF00";
});

button2.addEventListener("click", () => {
  document.body.style.background = "#0000FF";
});

button3.addEventListener("click", () => {
  document.body.style.background = "#00FF7F";
});

button4.addEventListener("click", () => {
  document.body.style.background = "#FF1493";
});

button5.addEventListener("click", () => {
  document.body.style.background = "#000000";
});

button6.addEventListener("click", () => {
  document.body.style.background = "#ff00ff";
});

button7.addEventListener("click", () => {
  document.body.style.background = "#FFA500";
});

$("#os-phrases > h2")
  .css("opacity", 1)
  .lettering("words")
  .children("span")
  .lettering()
  .children("span")
  .lettering();
