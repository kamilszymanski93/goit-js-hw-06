const body = document.querySelector("body");
const colorValue = document.querySelector("span.color");
const changeButton = document.querySelector("button.change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
changeButton.addEventListener("click", handleClick);

function handleClick() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
}
