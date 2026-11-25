// main screen buttons and add them to main
function mainScreen() {
    const main = document.querySelector("main");
    main.innerHTML = "";

    const startButton = document.createElement("button");
    startButton.textContent = "Start Game";
    main.appendChild(startButton);

    const settingsButton = document.createElement("button");
    settingsButton.textContent = "Settings";
    main.appendChild(settingsButton);
}
mainScreen();
//clear footer, main and header

function clearScreen() {
    const main = document.querySelector("main");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    main.innerHTML = "";
    header.innerHTML = "";
    footer.innerHTML = "";
}
