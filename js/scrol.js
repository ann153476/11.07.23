const winnersTicker = document.querySelector(".winners-ticker");

const winnerName = "name*****";
const generateIDR = () => {
  return (Math.random() * (5000 - 1000) + 1000).toFixed(2);
};
const playGame = [
  "Gates of Olympus™",
  "Starlight Princess Jackpot Play",
  "Gates of Gatot Kaca",
];
const gameImg = ["vs20gatotgates", "vsprg20starpr", "vs20olympgate"];

const generateWinersInfo = () => {
  let markup = `<li id="winner-id">
            <img src="./img/jackpot-winners/${
              gameImg[Math.trunc(Math.random() * (3 - 0) + 0)]
            }.webp" alt="starpr" />
            <div class="winner-info">
              <p class="name">${winnerName}</p>
              <p>IDR <span>${generateIDR()}</span></p>
              <p>${playGame[Math.trunc(Math.random() * (3 - 0) + 0)]}</p>
            </div>
          </li>`;
  return markup;
};

function printWinersInfo() {
  let winnerArr = document.querySelectorAll("#winner-id");
  winnerArr[1].remove();
  console.log(winnerArr);
  winnersTicker.insertAdjacentHTML("beforeend", generateWinersInfo());
}

document.addEventListener("DOMContentLoaded", function () {
  setInterval(printWinersInfo, 3000);
});
