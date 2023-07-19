//
const winnersTicker = document.querySelector(".winners-ticker");

const generateIDR = () => {
  return (Math.random() * (5000 - 1000) + 1000).toFixed(2);
};
const playGame = [
  "Gates of Olympus™",
  "Wisdom of Athena™",
  "Gates of Gatot Kaca",
];
const gameImg = ["vs20gatotgates", "vsprg20starpr", "vs20olympgate"];
let idName = 5;
const generateWinersInfo = () => {
  let markup = `<li id="winner-id">
            <img src="./img/jackpot-winners/${
              gameImg[Math.trunc(Math.random() * (3 - 0) + 0)]
            }.webp" alt="starpr" />
            <div class="winner-info">
              <p class="name">name***${idName}</p>
              <p>IDR <span>${generateIDR()}</span></p>
              <p>${playGame[Math.trunc(Math.random() * (3 - 0) + 0)]}</p>
            </div>
          </li>`;
  idName++;
  return markup;
};

function printWinersInfo() {
  let winnerArr = document.querySelectorAll("#winner-id");
  winnersTicker.insertAdjacentHTML("beforeend", generateWinersInfo());
  winnerArr[0].remove();
}

// document.addEventListener("DOMContentLoaded", function () {
//   setInterval(printWinersInfo, 4000);
// });
let winnersInterval;

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    // Приховано - зупинити оновлення переможців
    clearInterval(winnersInterval);
  } else {
    // Знову відображено - почати оновлення переможців
    winnersInterval = setInterval(printWinersInfo, 4000);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Початково запустити оновлення переможців
  winnersInterval = setInterval(printWinersInfo, 4000);
});

// Решта коду не змінено
