const audio = new Audio("https://od.lk/s/MTJfMTc3NTgzMjhf/Kevin_MacLeod_-_Canon_in_D_Major.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
