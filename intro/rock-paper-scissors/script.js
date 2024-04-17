const choices = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    const n = Math.floor(Math.random() * 3)
    return choices[n]
}