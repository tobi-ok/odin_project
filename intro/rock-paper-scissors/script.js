const choices = ['rock', 'paper', 'scissors']
let computerWins = 0
let playerWins = 0

function getComputerChoice(){
    const n = Math.floor(Math.random() * 3)
    return choices[n]
}

function playRound(computerSelection, playerSelection){
    if (computerSelection === playerSelection) {
        return "Tie!"
    }

    let winner = ""

    const computerSelectionIndex = choices.indexOf(computerSelection)
    const playerSelectionIndex = choices.indexOf(playerSelection)

    if (computerSelectionIndex === 0 && playerSelectionIndex === 2) {
        winner = "computer"
    } else if (playerSelectionIndex === 0 && computerSelectionIndex === 2) {
        winner = 'player'
    } else if (computerSelectionIndex >= playerSelectionIndex) {
        winner = 'computer'
    } else if (playerSelectionIndex >= computerSelectionIndex) {
        winner = 'player'
    }

    if (winner === 'computer') {
        computerWins++
        return `Round lost! ${computerSelection} beats ${playerSelection} player: ${playerWins} | computer: ${computerWins}`
    } else {
        playerWins++
        return `Round won! ${playerSelection} beats ${computerSelection}! player: ${playerWins} | computer: ${computerWins}`
    }
}

function playGame(){
    const rounds = [
        console.log(playRound(getComputerChoice(), prompt('Enter move ("rock", "paper", "scissors")'))),
        console.log(playRound(getComputerChoice(), prompt('Enter move ("rock", "paper", "scissors")'))),
        console.log(playRound(getComputerChoice(), prompt('Enter move ("rock", "paper", "scissors")'))),
        console.log(playRound(getComputerChoice(), prompt('Enter move ("rock", "paper", "scissors")'))),
        console.log(playRound(getComputerChoice(), prompt('Enter move ("rock", "paper", "scissors")')))
    ]
    
    let gameOverText = 'Game over! '

    if (computerWins > playerWins) {
        gameOverText += 'You lose! ' 
    } else if (playerWins > computerWins) {
        gameOverText += 'You win! '
    } else {
        gameOverText += 'Tie! '
    }

    gameOverText += `player: ${playerWins} | computer: ${computerWins}`
    console.log(gameOverText)
}

playGame()