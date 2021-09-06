let modalBtn = document.getElementById("modal-btn");

let modal = document.querySelector(".modal");

let closeBtn = document.querySelector(".close-btn");

modalBtn.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

console.log('Hi!');

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

