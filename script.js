document.addEventListener("DOMContentLoaded", () => {

  // ONE SINGLE GIANT GAME LIST — ALL GAMES NOW WORK IN IFRAME
  const gameList = [
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
    { name: "Popcat", url: "https://popcat.click/" },
    // Other small-list games merged here too:
    { name: "Cookie Clicker", url: "https://orteil.dashnet.org/cookieclicker/" },
    { name: "Fruit Ninja", url: "https://scratch.mit.edu/projects/10128407/embed" }
  ];

  const gamesContainer = document.getElementById("games");
  const searchBar = document.getElementById("searchBar");
  const gameFrame = document.getElementById("gameframe");
  const frameWrapper = document.getElementById("frameWrapper");
  const fullscreenBtn = document.getElementById("fullscreenBtn");

  // Display all games as iframe-ready launcher cards
  function loadGames(list) {
    gamesContainer.innerHTML = "";
    list.forEach(game => {
      const div = document.createElement("div");
      div.className = "game-card";
      div.innerHTML = `
        <h2>${game.name}</h2>
        <a href="#">Play</a>
      `;
      div.querySelector("a").addEventListener("click", () => {
        frameWrapper.style.display = "block";
        fullscreenBtn.style.display = "inline-block";
        gameFrame.src = game.url;
        window.scrollTo(0, document.body.scrollHeight);
      });
      gamesContainer.appendChild(div);
    });
  }

  // Search bar filters the single list
  searchBar.addEventListener("input", () => {
    const value = searchBar.value.toLowerCase();
    const filtered = gameList.filter(g => g.name.toLowerCase().includes(value));
    loadGames(filtered);
  });

  // Load full list on startup
  loadGames(gameList);
fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    frameWrapper.requestFullscreen().then(() => {
      frameWrapper.style.width = "100vw";
      frameWrapper.style.height = "100vh";
    });
    fullscreenBtn.textContent = "Exit Fullscreen";
  } else {
    document.exitFullscreen().then(() => {
      frameWrapper.style.width = "100%";
      frameWrapper.style.height = "600px";
    });
    fullscreenBtn.textContent = "Fullscreen";
  }
});

document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    fullscreenBtn.textContent = "Fullscreen";
  }
});

  


































