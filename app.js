const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');


function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    console.log(choices[random]);
    return choices[random];
}

getCompChoice();

function game(userChoice) {
    return userChoice === 'rock' ? console.log('OH YEAH') : console.log("wan wan")
}

function main() {
    rock_div.addEventListener('click', function() {
        game('rock')
    })

    paper_div.addEventListener('click', function() {
        game('paper')
    })

    scissors_div.addEventListener('click', function() {
        game('scissors')
    })
}

main();