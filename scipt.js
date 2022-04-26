let playerPoints = 0;
let computerPoints = 0;

let buttons = document.querySelectorAll("button");

let displayPlayerPoints = document.getElementById("displayPlayerPoints");
let displayComputerPoints = document.getElementById("displayComputerPoints");

for(let i = 0; i < 3; i++) {
    buttons[i].addEventListener("click", addPoints);
}

function addPoints() {
    let winner = Math.floor(Math.random() * 2);
    if (winner) {
        playerPoints++;
        displayPlayerPoints.textContent = playerPoints;
        console.log("Player wins!");
    }
    else {
        computerPoints++;
        displayComputerPoints.textContent = computerPoints;
        console.log("Computer wins!");
    }
}