let playerSelection;
let playerPoints = 0;
let computerPoints = 0;

function game() {
    do {
        playerSelection = prompt("Rock, paper or scissors: ");
        playerSelection.toLowerCase();
    } while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors");

    function winner() {
        return Math.floor(Math.random() * 3) + 1;
    }

    if (winner() == 1) {
        console.log("Player won the round!");
        playerPoints++;
    } else if (winner() == 2) {
        console.log("Computer won the round!");
        computerPoints++;
    } else if (winner() == 3)
        console.log("Round tie!");
}

for (let i = 0; i < 3; i++) {
    game();
}

if (playerPoints > computerPoints)
    console.log("Player Wins!!!");
else if (playerPoints < computerPoints)
    console.log("Computer Wins!!!");
else 
    console.log("Tie!!!");