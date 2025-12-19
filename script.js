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
<div class="game" data-url="https://tetris.com/play-tetris">Tetris</div>
<div class="game" data-url="https://snake.io/">Snake</div>
<div class="game" data-url="https://minesweeper.online/">Minesweeper</div>
<div class="game" data-url="https://sudoku.com/">Sudoku</div>
<div class="game" data-url="https://wordleplay.com/">Wordle</div>
<div class="game" data-url="https://linerider.com/">Line Rider</div>
<div class="game" data-url="https://littlealchemy.com/">Little Alchemy</div>
<div class="game" data-url="https://littlealchemy2.com/">Little Alchemy 2</div>
<div class="game" data-url="https://geometry-dash.io/">Geometry Dash</div>

<div class="game" data-url="https://www.coolmathgames.com/0-run-3">Run 3</div>
<div class="game" data-url="https://poki.com/en/g/ovo">OvO</div>
<div class="game" data-url="https://poki.com/en/g/ovo-2">OvO 2</div>
<div class="game" data-url="https://poki.com/en/g/vex-7">Vex 7</div>
<div class="game" data-url="https://poki.com/en/g/vex-6">Vex 6</div>
<div class="game" data-url="https://poki.com/en/g/vex-5">Vex 5</div>
<div class="game" data-url="https://poki.com/en/g/fancy-pants">Fancy Pants</div>
<div class="game" data-url="https://poki.com/en/g/give-up">Give Up</div>
<div class="game" data-url="https://poki.com/en/g/give-up-2">Give Up 2</div>
<div class="game" data-url="https://poki.com/en/g/fireboy-watergirl-forest-temple">Fireboy & Watergirl</div>

<div class="game" data-url="https://poki.com/en/g/slope">Slope</div>
<div class="game" data-url="https://poki.com/en/g/slope-2">Slope 2</div>
<div class="game" data-url="https://poki.com/en/g/moto-x3m">Moto X3M</div>
<div class="game" data-url="https://poki.com/en/g/moto-x3m-winter">Moto X3M Winter</div>
<div class="game" data-url="https://poki.com/en/g/moto-x3m-pool-party">Moto X3M Pool Party</div>
<div class="game" data-url="https://poki.com/en/g/drift-boss">Drift Boss</div>
<div class="game" data-url="https://drifthunters.io/">Drift Hunters</div>
<div class="game" data-url="https://madalinstuntcars2.io/">Madalin Stunt Cars 2</div>
<div class="game" data-url="https://madalinstuntcars3.io/">Madalin Stunt Cars 3</div>
<div class="game" data-url="https://smashkarts.io/">Smash Karts</div>

<div class="game" data-url="https://shellshock.io/">Shell Shockers</div>
<div class="game" data-url="https://krunker.io/">Krunker</div>
<div class="game" data-url="https://1v1.lol/">1v1.LOL</div>
<div class="game" data-url="https://zombsroyale.io/">Zombs Royale</div>
<div class="game" data-url="https://surviv.io/">Surviv.io</div>
<div class="game" data-url="https://warbrokers.io/">War Brokers</div>
<div class="game" data-url="https://miniroyale2.io/">Mini Royale</div>
<div class="game" data-url="https://forwardassault.io/">Forward Assault Remix</div>
<div class="game" data-url="https://maskofforce.io/">Masked Forces</div>
<div class="game" data-url="https://combatreload.io/">Combat Reloaded</div>

<div class="game" data-url="https://classic.minecraft.net/">Minecraft Classic</div>
<div class="game" data-url="https://paper-minecraft.io/">Paper Minecraft</div>
<div class="game" data-url="https://buildnow.gg/">BuildNow GG</div>
<div class="game" data-url="https://voxiom.io/">Voxiom.io</div>
<div class="game" data-url="https://blockpost.io/">Blockpost</div>
<div class="game" data-url="https://dogeminer.se/">Dogeminer</div>
<div class="game" data-url="https://dogeminer2.com/">Dogeminer 2</div>
<div class="game" data-url="https://idlebreakout.io/">Idle Breakout</div>
<div class="game" data-url="https://idledice.com/">Idle Dice</div>
<div class="game" data-url="https://clickerheroes.com/">Clicker Heroes</div>

<div class="game" data-url="https://basketball-stars.io/">Basketball Stars</div>
<div class="game" data-url="https://soccer-random.io/">Soccer Random</div>
<div class="game" data-url="https://bonk.io/">Bonk.io</div>
<div class="game" data-url="https://bloonstowerdefense.io/">Bloons Tower Defense</div>
<div class="game" data-url="https://bubbleshooter.com/">Bubble Shooter</div>
<div class="game" data-url="https://pong-2.com/">Pong</div>
<div class="game" data-url="https://ball-sort-puzzle.com/">Ball Sort</div>
<div class="game" data-url="https://superhotgame.com/beta/">Superhot Demo</div>
<div class="game" data-url="https://kirka.io/">Kirka.io</div>
<div class="game" data-url="https://push-the-box.com/">Push the Box</div>

<div class="game" data-url="https://agar.io/">Agar.io</div>
<div class="game" data-url="https://slither.io/">Slither.io</div>
<div class="game" data-url="https://diep.io/">Diep.io</div>
<div class="game" data-url="https://wormax.io/">Wormax.io</div>
<div class="game" data-url="https://wormate.io/">Wormate.io</div>
<div class="game" data-url="https://paper.io/">Paper.io</div>
<div class="game" data-url="https://paper-io.com/">Paper.io 2</div>
<div class="game" data-url="https://brutal.io/">Brutal.io</div>
<div class="game" data-url="https://hole-io.com/">Hole.io Clone</div>
<div class="game" data-url="https://superhex.io/">Superhex.io</div>

<div class="game" data-url="https://chess.com/play">Chess</div>
<div class="game" data-url="https://checkers.online/">Checkers</div>
<div class="game" data-url="https://territorial.io/">Territorial.io</div>
<div class="game" data-url="https://learntofly3.com/">Learn to Fly</div>
<div class="game" data-url="https://stickwarlegacy.io/">Stick War</div>
<div class="game" data-url="https://pandemic2.net/">Pandemic 2</div>
<div class="game" data-url="https://thevisitor2.com/">The Visitor</div>
<div class="game" data-url="https://kingdomrush.io/">Kingdom Rush Demo</div>
<div class="game" data-url="https://plantsvszombies.io/">PvZ Browser Clone</div>
<div class="game" data-url="https://raftwars.io/">Raft Wars</div>

<div class="game" data-url="chrome://dino">Chrome Dino</div>
<div class="game" data-url="https://elasticman.fun/">Elastic Man</div>
<div class="game" data-url="https://falling-sand.org/">Falling Sand</div>
<div class="game" data-url="https://catninja.io/">Cat Ninja</div>
<div class="game" data-url="https://poomonkey.com/">Poo Monkey</div>
<div class="game" data-url="https://bigredbutton.com/">Big Red Button</div>
<div class="game" data-url="https://popcat.click/">Popcat</div>
<div class="game" data-url="https://fish-eat-fish.com/">Eat Fish</div>
<div class="game" data-url="https://clicker-game.com/">Cookie Clicker Clone</div>
<div class="game" data-url="https://snow-rider3d.com/">Snow Rider 3D</div>

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





















