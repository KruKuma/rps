let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result = document.getElementById("result");
const user_choice = document.getElementById("user-choice");
const computer_choice = document.getElementById("computer-choice");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissor_button = document.getElementById("scissors");

function getCompterChoices() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randonNum = Math.floor(Math.random() * 3);

    return choices[randonNum];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = "You Win!";
    user_choice.innerHTML = userChoice;
    computer_choice.innerHTML = computerChoice;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = "You Lose!";
    user_choice.innerHTML = userChoice;
    computer_choice.innerHTML = computerChoice;
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = "It's a Draw!";
    user_choice.innerHTML = userChoice;
    computer_choice.innerHTML = computerChoice;
}

function game(userChoices) {
    const computerChoices = getCompterChoices();

    switch(userChoices + computerChoices) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoices, computerChoices);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoices, computerChoices);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoices, computerChoices);
            break;
    }
}

function main() {
    rock_button.addEventListener('click', function() {
        game("Rock");
    })
    
    paper_button.addEventListener('click', function() {
        game("Paper");
    })
    
    scissor_button.addEventListener('click', function() {
        game("Scissors");
    })
}

main();


