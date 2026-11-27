// main screen buttons and add them to main
function mainScreen() {
    const main = document.querySelector("main");
    const startButton = document.createElement("button");
    startButton.textContent = "Start Game";
    main.appendChild(startButton);

    const settingsButton = document.createElement("button");
    settingsButton.textContent = "Settings";
    main.appendChild(settingsButton);
}

function initNavigation() {
    const buttonPlay = document.getElementById("btnplay");
    if (buttonPlay) {
        buttonPlay.addEventListener("click", () => navigateTo("/play"));
        document
            .getElementById("btnhowtoplay")
            .addEventListener("click", () => navigateTo("/howtoplay"));
        document
            .getElementById("btnleaderboard")
            .addEventListener("click", () => navigateTo("/leaderboard"));
        document
            .getElementById("btnlogin")
            .addEventListener("click", () => navigateTo("/login"));
    }
}

//clear footer, main and header
function clearScreen() {
    const main = document.querySelector("main");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    main.innerHTML = "";
    header.innerHTML = "";
    footer.innerHTML = "";
}

function navigateTo(route) {
    if (route === "/play") {
        window.location.href = "../play";
    } else if (route === "/howtoplay") {
        window.location.href = "../howtoplay";
    } else if (route === "/leaderboard") {
        window.location.href = "../leaderboard";
    } else if (route === "/login") {
        window.location.href = "../login";
    }
}
initNavigation();
