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
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

getCompChoice();

function game(userChoice) {
    let compChoice = getCompChoice();
    switch(userChoice + compChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            console.log('You win!',userChoice, compChoice)
            break;
        case 'ps':
        case 'rp':
        case 'sr':
            console.log('You lose.',userChoice, compChoice)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            console.log('Its a tie :P',userChoice, compChoice)
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('r')
    })

    paper_div.addEventListener('click', function() {
        game('p')
    })

    scissors_div.addEventListener('click', function() {
        game('s')
    })
}

main();