const choices = ['rock', 'paper', 'scissors']

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
        return `You lose! ${computerSelection} beats ${playerSelection}`
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
}