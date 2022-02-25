const button = document.getElementsByClassName("button__btn")[0];
const randomColor = Math.floor(Math.random()*16777215).toString(16);

button.addEventListener("click", function clickedButton() {
    document.body.style.backgroundColor = "#" + randomColor;
  })