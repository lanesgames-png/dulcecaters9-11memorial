document.addEventListener("DOMContentLoaded", () => {
  const games = [
    { name: "Slope", url: "https://slopegame.io" },
    { name: "Run 3", url: "https://run3.io" },
    { name: "Retro Bowl", url: "https://retrobowl.me" },
    { name: "2048", url: "https://play2048.co/" },
    { name: "Tetris", url: "https://tetris.com/play-tetris" },
    { name: "Snake", url: "https://snake.io/" },
    { name: "Minesweeper", url: "https://minesweeper.online/" },
    { name: "Sudoku", url: "https://sudoku.com/" },
    { name: "Wordle", url: "https://wordleplay.com/" },
    { name: "Line Rider", url: "https://linerider.com/" },
    { name: "Little Alchemy", url: "https://littlealchemy.com/" },
    { name: "Little Alchemy 2", url: "https://littlealchemy2.com/" },
    { name: "Geometry Dash", url: "https://geometry-dash.io/" },
    { name: "Moto X3M", url: "https://poki.com/en/g/moto-x3m" },
    { name: "Drift Boss", url: "https://poki.com/en/g/drift-boss" },
    { name: "Drift Hunters", url: "https://drifthunters.io/" },
    { name: "Madalin Stunt Cars 2", url: "https://madalinstuntcars2.io/" },
    { name: "Madalin Stunt Cars 3", url: "https://madalinstuntcars3.io/" },
    { name: "Smash Karts", url: "https://smashkarts.io/" },
    { name: "Shell Shockers", url: "https://shellshock.io/" },
    { name: "Krunker", url: "https://krunker.io/" },
    { name: "1v1.lol", url: "https://1v1.lol/" },
    { name: "Zombs Royale", url: "https://zombsroyale.io/" },
    { name: "Minecraft Classic", url: "https://classic.minecraft.net/" },
    { name: "Idle Breakout", url: "https://idlebreakout.io/" },
    { name: "Agar.io", url: "https://agar.io/" },
    { name: "Slither.io", url: "https://slither.io/" },
    { name: "Diep.io", url: "https://diep.io/" },
    { name: "Paper.io", url: "https://paper.io/" },
    { name: "Chess", url: "https://chess.com/play" },
    { name: "Checkers", url: "https://checkers.online/" },
    { name: "Territorial.io", url: "https://territorial.io/" },
    { name: "Elastic Man", url: "https://elasticman.fun/" },
    { name: "Cat Ninja", url: "https://catninja.io/" },
    { name: "Popcat", url: "https://popcat.click/" }
  ];

  const container = document.getElementById("games");

  games.forEach((game) => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <h2>${game.name}</h2>
      <a href="${game.url}" target="_blank">Play</a>
    `;
    container.appendChild(card);
  });

  const searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    const cards = document.querySelectorAll(".game-card");
    cards.forEach((card) => {
      const title = card.querySelector("h2").textContent.toLowerCase();
      card.style.display = title.includes(query) ? "block" : "none";
    });
  });
});
document.getElementById("gameframe").src = game.url;

























