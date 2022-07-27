var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById["user-score"];
const computerScore_span = document.getElementById["computer-score"];
const result = document.getElementById["result"];
const user_choice = document.getElementById["user-choice"];
const computer_choice = document.getElementById["computer-choice"];
const rock_button = document.getElementById["rock"];
const paper_button = document.getElementById["paper"];
const scissor_button = document.getElementById["scissor"];

function getCompterChoices() {
    const choices = ['r', 'p', 's'];
    const randonNum = Math.floor(Math.random() * 3);

    return choices[randonNum];
}

function win(userChoices, computerChoices) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = "Win!";
    user_choice.innerHTML = userChoices;
    computer_choice.innerHTML = computerChoices;
    console.log(userChoices + computerChoices)
}

function lose(userChoices, computerChoices) {
    computerScore++;
}

function draw(userChoices, computerChoices) {

}

function game(userChoices) {
    const computerChoices = getCompterChoices();

    switch(userChoices + computerChoices) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoices, computerChoices);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoices, computerChoices);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoices, computerChoices);
            break;
    }
}

game("r");

/*
function main() {
    rock_button.addEventListener('click', function() {
        game("r");
    })
    
    paper_button.addEventListener('click', function() {
        game("p");
    })
    
    scissor_button.addEventListener('click', function() {
        game("s");
    })
}


main();

*/
