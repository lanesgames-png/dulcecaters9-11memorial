document.addEventListener("DOMContentLoaded", () => {
    const games = [
        ["Slope", "https://slopegame.io"],
        ["Run 3", "https://run3.io"],
        ["Retro Bowl", "https://retrobowl.me"],
         // ... add your other games here
    ];

    const container = document.getElementById("games");

    // Generate game cards
    games.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.innerHTML = `
            <h2>${game[0]}</h2>
            <a href="${game[1]}" target="_blank">Play</a>
        `;
        container.appendChild(card);
    });

    // Search functionality
    const searchBar = document.getElementById("searchBar");

    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();
        const cards = document.querySelectorAll(".game-card");

        cards.forEach(card => {
            const title = card.querySelector("h2").textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
const games = [
  <div class="game" data-url="https://play2048.co/">2048</div>
<div class="game" data-url="https://poki.com/en/g/slope">Slope</div>
<div class="game" data-url="https://poki.com/en/g/ovo">OvO</div>
<div class="game" data-url="https://poki.com/en/g/moto-x3m">Moto X3M</div>
<div class="game" data-url="https://poki.com/en/g/run-3">Run 3</div>
<div class="game" data-url="https://poki.com/en/g/vex-7">Vex 7</div>
<div class="game" data-url="https://poki.com/en/g/stickman-hook">Stickman Hook</div>
<div class="game" data-url="https://poki.com/en/g/drift-boss">Drift Boss</div>
<div class="game" data-url="https://tetris.com/play-tetris">Tetris</div>
<div class="game" data-url="https://snake.io/">Snake</div>
<div class="game" data-url="https://minesweeper.online/">Minesweeper</div>
<div class="game" data-url="https://wordleplay.com/">Wordle</div>
<div class="game" data-url="https://sudoku.com/">Sudoku</div>
<div class="game" data-url="https://garticphone.com/">Gartic Phone</div>
<div class="game" data-url="https://skribbl.io/">Skribbl.io</div>
<div class="game" data-url="https://1v1.lol/">1v1.lol</div>
<div class="game" data-url="https://shellshock.io/">Shell Shockers</div>
<div class="game" data-url="https://krunker.io/">Krunker</div>
<div class="game" data-url="https://diep.io/">Diep.io</div>
<div class="game" data-url="https://bonk.io/">Bonk.io</div>
];

const container = document.getElementById("games");

games.forEach(game => {
  const card = document.createElement("div");
  card.className = "game-card";
  card.innerHTML = `
    <h2>${game[0]}</h2>
    <a href="${game[1]}" target="_blank">Play</a>
  `;
  container.appendChild(card);
});
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  const cards = document.querySelectorAll(".game-card");

  cards.forEach(card => {
    const title = card.querySelector("h2").textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
// script.js
const cursor = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("errorMsg");
  const box = document.querySelector(".login-box");
  const screen = document.getElementById("login-screen");

  if (input === "MUSLIM") {
    screen.style.display = "none";
    document.getElementById("site-content").style.display = "block";
  } else {
    error.textContent = "ACCESS DENIED";
    error.classList.add("denied");
    box.classList.add("shake");
    screen.classList.add("flash");

    // Reset animations
    setTimeout(() => {
      error.classList.remove("denied");
      box.classList.remove("shake");
      screen.classList.remove("flash");
    }, 500);
  }
}



















