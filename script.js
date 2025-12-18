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
  ["Slope", "https://slopegame.io"],
  ["Run 3", "https://run3.io"],
  ["Retro Bowl", "https://retrobowl.me"],
  ["Cookie Clicker", "https://orteil.dashnet.org/cookieclicker/"],
  ["2048", "https://play2048.co/"],
  ["Snake", "https://playsnake.org"],
  ["Subway Surfers", "https://subwaysurfersgame.io"],
  ["Basket Random", "https://basketrandom.co"],
  ["Soccer Random", "https://soccerrandom.io"],
  ["Moto X3M", "https://motox3m.io"],
  ["Drift Boss", "https://driftboss.io"],
  ["Geometry Dash Lite", "https://geometrydash.io"],
  ["Tetris", "https://tetris.com/play-tetris"],
  ["Pacman", "https://pacman.live"],
  ["Agar.io", "https://agar.io"],
  ["Slither.io", "https://slither.io"],
  ["Shell Shockers", "https://shellshock.io"],
  ["Krunker", "https://krunker.io"],
  ["Paper.io", "https://paper-io.com"],
  ["Hole.io", "https://hole-io.com"],
  ["Smash Karts", "https://smashkarts.io"],
  ["Zombs Royale", "https://zombsroyale.io"],
  ["Fireboy & Watergirl", "https://fireboywatergirlunblocked.com"],
  ["Temple Run 2", "https://templerun2.io"],
  ["Crossy Road", "https://crossyroadgame.io"],
  ["Vex 3", "https://vex3.io"],
  ["Vex 4", "https://vex4.io"],
  ["Vex 5", "https://vex5.io"],
  ["Vex 6", "https://vex6.io"],
  ["Vex 7", "https://vex7.io"],
  ["Duck Life", "https://ducklife.io"],
  ["Stickman Hook", "https://stickmanhookgame.io"],
  ["Madalin Cars 2", "https://madalincars2.io"],
  ["Madalin Cars 3", "https://madalincars3.io"],
  ["Among Us (Browser)", "https://amongusplay.online"],
  ["FNAF", "https://fnaf.games"],
  ["Happy Wheels", "https://happywheelsgame.io"],
  ["Getaway Shootout", "https://getawayshootout.co"],
  ["Basketball Stars", "https://basketballstars.io"],
  ["BitLife", "https://bitlifeonline.io"],
  ["Cut the Rope", "https://cuttherope.net"],
  ["Bad Ice Cream", "https://badicecreamgames.com"],
  ["Bad Ice Cream 2", "https://badicecreamgames.com"],
  ["Bad Ice Cream 3", "https://badicecreamgames.com"],
  ["Doodle Jump", "https://doodlejump.fun"],
  ["Helix Jump", "https://helixjump.io"],
  ["Tiny Fishing", "https://tinyfishing.io"],
  ["Paper Minecraft", "https://paperminecraft.io"],
  ["World’s Hardest Game", "https://worldshardestgame.io"],
  ["Elastic Man", "https://elasticman.org"],
  ["We Become What We Behold", "https://ncase.me/ballot/"],
  ["Friday Night Funkin’", "https://fnfgo.com"],
  ["Rooftop Snipers", "https://rooftopsnipers.co"],
  ["1v1.lol", "https://1v1.lol"],
  ["Temple of Boom", "https://templeofboom.io"],
  ["Stick Duel", "https://stickduel.io"],
  ["Bloxorz", "https://bloxorz.io"],
  ["Snow Rider 3D", "https://snowrider3d.io"],
  ["OvO", "https://ovogame.io"],
  ["Tunnel Rush", "https://tunnelrush.io"],
  ["Monkey Mart", "https://monkeymart.io"],
  ["Stack", "https://stackgame.io"],
  ["Flappy Bird", "https://flappybird.io"],
  ["Drift Hunters", "https://drifthunters.io"],
  ["Falling Guyz", "https://fallingguyz.io"],
  ["Idle Breakout", "https://idlebreakout.io"],
  ["Basket Swooshes", "https://basketswooshes.io"],
  ["Pixel Gun Apocalypse", "https://pixelgunapocalypse.io"],
  ["Time Shooter 2", "https://timeshooter2.io"],
  ["Tunnel Runner", "https://tunnelrunner.io"],
  ["Stick Merge", "https://stickmerge.io"],
  ["Temple Raider", "https://temple-raider.com"],
  ["Slope 2", "https://slope2.io"]
 ["Polytrack.gg", "https://polytrack.gg"]
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










