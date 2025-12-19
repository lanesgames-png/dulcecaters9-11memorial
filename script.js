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

        { name: "OvO", url: "https://poki.com/en/g/ovo" },
        { name: "OvO 2", url: "https://poki.com/en/g/ovo-2" },
        { name: "Vex 7", url: "https://poki.com/en/g/vex-7" },
        { name: "Vex 6", url: "https://poki.com/en/g/vex-6" },
        { name: "Vex 5", url: "https://poki.com/en/g/vex-5" },

        { name: "Fancy Pants", url: "https://poki.com/en/g/fancy-pants" },
        { name: "Give Up", url: "https://poki.com/en/g/give-up" },
        { name: "Give Up 2", url: "https://poki.com/en/g/give-up-2" },
        { name: "Fireboy & Watergirl", url: "https://poki.com/en/g/fireboy-watergirl-forest-temple" },

        { name: "Slope 2", url: "https://poki.com/en/g/slope-2" },
        { name: "Slope 3", url: "https://poki.com/en/g/slope-3" },

        { name: "Moto X3M", url: "https://poki.com/en/g/moto-x3m" },
        { name: "Moto X3M Winter", url: "https://poki.com/en/g/moto-x3m-winter" },
        { name: "Moto X3M Pool Party", url: "https://poki.com/en/g/moto-x3m-pool-party" },

        { name: "Drift Boss", url: "https://poki.com/en/g/drift-boss" },
        { name: "Drift Hunters", url: "https://drifthunters.io/" },

        { name: "Madalin Stunt Cars 2", url: "https://madalinstuntcars2.io/" },
        { name: "Madalin Stunt Cars 3", url: "https://madalinstuntcars3.io/" },

        { name: "Smash Karts", url: "https://smashkarts.io/" },
        { name: "Shell Shockers", url: "https://shellshock.io/" },
        { name: "Krunker", url: "https://krunker.io/" },
        { name: "1v1.lol", url: "https://1v1.lol/" },
        { name: "Zombs Royale", url: "https://zombsroyale.io/" },
        { name: "Surviv.io", url: "https://surviv.io/" },
        { name: "War Brokers", url: "https://warbrokers.io/" },
        { name: "Mini Royale", url: "https://miniroyale2.io/" },
        { name: "Forward Assault Remix", url: "https://forwardassault.io/" },
        { name: "Masked Forces", url: "https://maskofforce.io/" },
        { name: "Combat Reloaded", url: "https://combatreload.io/" },

        { name: "Minecraft Classic", url: "https://classic.minecraft.net/" },
        { name: "Paper Minecraft", url: "https://paper-minecraft.io/" },
        { name: "BuildNow GG", url: "https://buildnow.gg/" },
        { name: "Voxiom", url: "https://voxiom.io/" },
        { name: "Blockpost", url: "https://blockpost.io/" },

        { name: "Dogeminer", url: "https://dogeminer.se/" },
        { name: "Dogeminer 2", url: "https://dogeminer2.com/" },
        { name: "Idle Breakout", url: "https://idlebreakout.io/" },
        { name: "Idle Dice", url: "https://idledice.com/" },
        { name: "Clicker Heroes", url: "https://clickerheroes.com/" },
        { name: "Cookie Clicker", url: "https://orteil.dashnet.org/cookieclicker/" },

        { name: "Basketball Stars", url: "https://basketball-stars.io/" },
        { name: "Soccer Random", url: "https://soccer-random.io/" },
        { name: "Bonk.io", url: "https://bonk.io/" },
        { name: "Bloons Tower Defense", url: "https://bloonstowerdefense.io/" },
        { name: "Bubble Shooter", url: "https://bubbleshooter.com/" },
        { name: "Pong", url: "https://pong-2.com/" },
        { name: "Ball Sort", url: "https://ball-sort-puzzle.com/" },

        { name: "Superhot Demo", url: "https://superhotgame.com/beta/" },
        { name: "Kirka", url: "https://kirka.io/" },
        { name: "Push the Box", url: "https://push-the-box.com/" },

        { name: "Agar.io", url: "https://agar.io/" },
        { name: "Slither.io", url: "https://slither.io/" },
        { name: "Diep.io", url: "https://diep.io/" },
        { name: "Wormax.io", url: "https://wormax.io/" },
        { name: "Wormate.io", url: "https://wormate.io/" },
        { name: "Paper.io", url: "https://paper.io/" },
        { name: "Paper.io 2", url: "https://paper-io.com/" },
        { name: "Brutal.io", url: "https://brutal.io/" },
        { name: "Hole.io Clone", url: "https://hole-io.com/" },
        { name: "Superhex.io", url: "https://superhex.io/" },

        { name: "Chess.com", url: "https://chess.com/play" },
        { name: "Checkers Online", url: "https://checkers.online/" },
        { name: "Territorial.io", url: "https://territorial.io/" },

        { name: "Learn to Fly", url: "https://learntofly3.com/" },
        { name: "Stick War", url: "https://stickwarlegacy.io/" },
        { name: "Pandemic 2", url: "https://pandemic2.net/" },
        { name: "The Visitor", url: "https://thevisitor2.com/" },
        { name: "Kingdom Rush Demo", url: "https://kingdomrush.io/" },
        { name: "PvZ Browser Clone", url: "https://plantsvszombies.io/" },
        { name: "Raft Wars", url: "https://raftwars.io/" },

        { name: "Chrome Dino", url: "chrome://dino" },
        { name: "Elastic Man", url: "https://elasticman.fun/" },
        { name: "Falling Sand", url: "https://falling-sand.org/" },
        { name: "Cat Ninja", url: "https://catninja.io/" },
        { name: "Big Red Button", url: "https://bigredbutton.com/" },
        { name: "Popcat", url: "https://popcat.click/" },
        { name: "Eat Fish", url: "https://fish-eat-fish.com/" },
        { name: "Cookie Clicker Clone", url: "https://clicker-game.com/" },
        { name: "Snow Rider 3D", url: "https://snow-rider3d.com/" },
        { name: "Subway Surfers", url: "https://poki.com/en/g/subway-surfers" },
        { name: "Temple Run 2", url: "https://poki.com/en/g/temple-run-2" },
        { name: "Helix Jump", url: "https://poki.com/en/g/helix-jump" },
        { name: "Jetpack Joyride", url: "https://poki.com/en/g/jetpack-joyride" },
        { name: "Crossy Road", url: "https://poki.com/en/g/crossy-road" },
        { name: "Five Nights at Freddy's 1", url: "https://poki.com/en/g/five-nights-at-freddys" },
        { name: "Five Nights at Freddy's 2", url: "https://poki.com/en/g/five-nights-at-freddys-2" },
        { name: "Five Nights at Freddy's 3", url: "https://poki.com/en/g/fnaf-3" },
        { name: "Five Nights at Freddy's 4", url: "https://poki.com/en/g/fnaf-4" },
        { name: "Bad Ice Cream", url: "https://poki.com/en/g/bad-ice-cream" },
        { name: "Bad Ice Cream 2", url: "https://poki.com/en/g/bad-ice-cream-2" },
        { name: "Bad Ice Cream 3", url: "https://poki.com/en/g/bad-ice-cream-3" },
        { name: "GunSpin", url: "https://poki.com/en/g/gunspin" },
        { name: "Stickman Hook", url: "https://poki.com/en/g/stickman-hook" },
        { name: "Drive Mad", url: "https://poki.com/en/g/drive-mad" },
        { name: "Idle Ants", url: "https://poki.com/en/g/idle-ants" },
        { name: "TABS Demo", url: "https://totally-accurate-battle-simulator.free" }
    ];

    const container = document.getElementById("games");

    games.forEach(game => {
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

        cards.forEach(card => {
            const title = card.querySelector("h2").textContent.toLowerCase();
            card.style.display = title.includes(query) ? "block" : "none";
        });
    });

    const cursor = document.querySelector(".cursor-glow");
    if (cursor) {
        document.addEventListener("mousemove", e => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        });























