const audio = new Audio("https://www.dropbox.com/scl/fi/5r0uoszsu7gvwo1vaeycn/Kevin_MacLeod_-_Canon_in_D_Major.mp3?rlkey=96dkksnmgj31eo5hms1idu18t&dl=1");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
