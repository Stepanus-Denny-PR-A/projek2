var item = document.querySelectorAll(".set button");
var audio;
for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function () {
    var alat = this.innerHTML;
    suara(alat);
    keyglow(alat);
  });
  document.addEventListener("keydown", function (x) {
    var tekanHuruf = x.key;
    suara(tekanHuruf);
    keyglow(tekanHuruf);
  });
}

function keyglow(huruf) {
  var tombolAktif = document.querySelector("." + huruf);
  tombolAktif.classList.add("pressed");
  setTimeout(() => {
    tombolAktif.classList.remove("pressed");
  }, 50);
}
function suara(huruf) {
  switch (huruf) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      break;
  }
}
