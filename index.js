console.log("HI")

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
const choice = options[Math.floor(Math.random() * options.length)];

return choice;
}
function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "It's a tie!";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
                (playerSelection == "paper" && computerSelection == "rock") ||
                (playerSelection == "scissors" && computerSelection == "paper")){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
const result = checkWinner(playerSelection, computerSelection);

if (result == "It's a tie!"){
    return "It's a tie!"
}
else if (result == "Player"){
    return `You win!" ${playerSelection} beats ${computerSelection}`;
}
else {
    return `You lose!" ${computerSelection} beats ${playerSelection}`;
}
}
const playerSelection = "rock"
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1}`);

        const playerSelection = "rock"; // or any default
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame();
    console.log("----- FINAL RESULTS -----");
    console.log(`Player: ${playerSelection} | Computer: ${computerSelection}`);

    if (playerSelection > computerSelection) {
        console.log("🎉 You are the overall winner!");
    } else if (computerSelection > playerSelection) {
        console.log("💻 The computer wins the game!");
    } else {
        console.log("It's an overall tie!");
    }
















getComputerChoice();

