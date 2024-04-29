const choices = ['rock', 'paper', 'scissors']
let roundsPlayed = 0;
let computerWins = 0;
let playerWins = 0;

const resultsDiv = document.querySelector(".results");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

function getComputerChoice(){
    const n = Math.floor(Math.random() * 3);
    return choices[n];
}

function playRound(computerSelection, playerSelection){
    if (computerSelection === playerSelection) {
        return "Tie!";
    }

    let winner = "";

    const computerSelectionIndex = choices.indexOf(computerSelection);
    const playerSelectionIndex = choices.indexOf(playerSelection);

    if (computerSelectionIndex === 0 && playerSelectionIndex === 2) {
        winner = "computer";
    } else if (playerSelectionIndex === 0 && computerSelectionIndex === 2) {
        winner = 'player';
    } else if (computerSelectionIndex >= playerSelectionIndex) {
        winner = 'computer';
    } else if (playerSelectionIndex >= computerSelectionIndex) {
        winner = 'player';
    }

    if (winner === 'computer') {
        computerWins++;
        return `Round lost! ${computerSelection} beats ${playerSelection} player: ${playerWins} | computer: ${computerWins}`;
    } else {
        playerWins++;
        return `Round won! ${playerSelection} beats ${computerSelection}! player: ${playerWins} | computer: ${computerWins}`;
    }
}

function playGame(playerChoice){
    /*const rounds = [
        console.log(playRound(getComputerChoice(), prompt('Enter move ("rock", "paper", "scissors")'))),
        console.log(playRound(getComputerChoice(), prompt('Enter move ("rock", "paper", "scissors")'))),
        console.log(playRound(getComputerChoice(), prompt('Enter move ("rock", "paper", "scissors")'))),
        console.log(playRound(getComputerChoice(), prompt('Enter move ("rock", "paper", "scissors")'))),
        console.log(playRound(getComputerChoice(), prompt('Enter move ("rock", "paper", "scissors")')))
    ]*/

    roundsPlayed++
    const computerChoice = getComputerChoice();

    console.log(`You choose ${playerChoice}, computer choose ${computerChoice}\n` + playRound(computerChoice, playerChoice));

    if (playerWins >= 5 || computerWins >= 5){
        let gameOverText = 'Game over! ';

        if (computerWins > playerWins) {
            gameOverText += 'You lose! '; 
        } else if (playerWins > computerWins) {
            gameOverText += 'You win! ';
        } else {
            gameOverText += 'Tie! ';
        }

        gameOverText += `player: ${playerWins} | computer: ${computerWins}\nRounds played: ${roundsPlayed}`;
        console.log(gameOverText);

        roundsPlayed = 0;
        playerWins = 0;
        computerWins = 0;
    }
}

rockBtn.addEventListener("click", () => {playGame("rock")})
paperBtn.addEventListener("click", () => {playGame("paper")})
scissorsBtn.addEventListener("click", () => {playGame("scissors")})