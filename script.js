var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

const DEFAULT_GRADIENT =
  "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0))";

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  css.textContent = body.style.background + ";";
}

function copy(text) {
  var textarea = document.createElement("textarea");
  textarea.value = text || DEFAULT_GRADIENT;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
