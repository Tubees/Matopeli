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
    const buttonPlay = document.getElementById("buttonplay");
    if (buttonPlay) {
        buttonPlay.addEventListener("click", () => navigateTo("/play"));
        document
            .getElementById("buttonhowtoplay")
            .addEventListener("click", () => navigateTo("/howtoplay"));
        document
            .getElementById("buttonleaderboard")
            .addEventListener("click", () => navigateTo("/leaderboard"));
        document
            .getElementById("buttonlogin")
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
