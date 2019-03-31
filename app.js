let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');


function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

getCompChoice();

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;    
    result_div.innerHTML = `You win! Player: ${userChoice} beats Computer: ${compChoice}.`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 300) ;
};

function lost(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_div.innerHTML = `You lose! Computer: ${compChoice} beats Player: ${userChoice}.`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 300) ;
}

function tie(userChoice, compChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_div.innerHTML = `It's a tie.`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')}, 300) ;
}

function game(userChoice) {
    let compChoice = getCompChoice();
    switch(userChoice + compChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, compChoice);
            break;
        case 'paperscissors':
        case 'rockpaper':
        case 'scissorsrock':
            lost(userChoice, compChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            tie(userChoice, compChoice);
            break;
    }
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