let button = document.querySelector("#btn");
let video = document.getElementById("main_video");

console.log('Its working!');

button.addEventListener("click", () => {
  console.log("Inside Button Function");
  if (video.paused) {
    video.play();
    btn.innerHTML = "pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
});
