const gameImages = [
  "vs1fortunetree",
  "vs9chen",
  "vs20cleocatra",
  "vs20gatotgates",
  "vs20nexussr",
  "vs25tigeryear",
  "vs50safariking",
  "vs243mwarrior",
  "vs1024mahjpanda",
  "vswayschilheat",
  "vswaysfrbugs",
  "vswaysrsm",
  "vswayssamurai",
];
let gameItems = document.querySelectorAll(".game-item");

let imageCount = gameImages.length;
let usedImages = [];
function getRandomImageIndex(imageCount, usedImages) {
  let randomIndex = Math.floor(Math.random() * imageCount);
  if (usedImages.length === imageCount) {
    usedImages = [];
  }
  while (usedImages.includes(randomIndex)) {
    randomIndex = Math.floor(Math.random() * imageCount);
  }
  usedImages.push(randomIndex);
  return randomIndex;
}

window.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < gameItems.length; i++) {
    gameItems[i].style.height = gameItems[0].offsetWidth + "px";
    let randomImageIndex = getRandomImageIndex(imageCount, usedImages);
    gameItems[
      i
    ].style.backgroundImage = `url(./img/popular-game-list/${gameImages[randomImageIndex]}.webp)`;
  }
});
console.log(usedImages);
