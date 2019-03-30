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
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

getCompChoice();

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;    
    result_div.innerHTML = `You win! ${userChoice} beats ${compChoice}.`;
};

function lost(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_div.innerHTML = `You lose! ${compChoice} beats ${userChoice}.`;
}

function tie(userChoice, compChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_div.innerHTML = `It's a tie.`;
}

function game(userChoice) {
    let compChoice = getCompChoice();
    switch(userChoice + compChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(userChoice, compChoice);
            break;
        case 'PaperScissors':
        case 'RockPapeRock':
        case 'ScissorsRock':
            lost(userChoice, compChoice);
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            tie(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('Rock')
    })

    paper_div.addEventListener('click', function() {
        game('Paper')
    })

    scissors_div.addEventListener('click', function() {
        game('Scissors')
    })
}

main();