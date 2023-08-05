const audio = new Audio("https://github.com/sayfon-and-todd/wedding-invitation/raw/main/Kevin_MacLeod_-_Canon_in_D_Major.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
