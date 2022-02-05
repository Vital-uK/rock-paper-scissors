let playerScore = 0;
let computerScore = 0;
console.log(`Let start the game`);

function computerPlay() {
    let computerChoice
    
    switch (Math.floor(Math.random()*3)) {
        case 0:
            computerChoice = "Paper";
            break;
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Scissor";
            break;
        default:
            console.log("Computer failed to choose");
    }

    if (computerChoice != undefined) console.log(`Computer choose ${computerChoice}`);
    return computerChoice;
}

function playerPlay() {
    let playerChoice = prompt("Make a choice", "Rock").toUpperCase();
    switch (playerChoice) {
        case "PAPER":
            playerChoice = "Paper";
            break;
        case "ROCK":
            playerChoice = "Rock";
            break;
        case "SCISSOR":
            playerChoice = "Scissor";
            break;
        default:
            console.log("You failed to choose");
            playerChoice = undefined;
    }

    if (playerChoice != undefined) console.log(`You choose ${playerChoice}`);
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Draw!");
        return "Draw"
    } else {
        switch (playerSelection) {
            case "Paper":
                if (computerSelection === "Rock") {
                    console.log("You win! Paper beats Rock.");
                    /*playerScore++;*/
                    return "PlayerWin";
                } else {
                    console.log("You lose! Scissor beats Paper.");
                    /*computerScore++;*/
                    return "ComputerWin";
                }
                break;
            case "Rock":
                if (computerSelection === "Scissor") {
                    console.log("You win! Rock beats Scissor");
                    /*playerScore++;*/
                    return "PlayerWin";
                } else {
                    console.log("You lose! Paper beats Rock.");
                    /*computerScore++;*/
                    return "ComputerWin";
                }
                break;    
            case "Scissor":
                if (computerSelection === "Paper") {
                    console.log("You win! Scissor beats Paper");
                    /*playerScore++;*/
                    return "PlayerWin";
                } else {
                    console.log("You lose! Rock beats Paper.");
                    /*computerScore++;*/
                    return "ComputerWin";   
                }
                break;
            default:
                console.log("Be careful with typing");
                return "ComputerWin";
    
        }
    }
}    

function game(rounds=5) {
if (rounds > 0) {
    let i = 0;
    playerScore = 0;
    computerScore = 0;
    
    while (i < rounds){
        switch (playRound(playerPlay(),computerPlay())) {
            case "Draw":
                break;
            case "ComputerWin":
                computerScore++;
                i++;
                console.log(`Round ${i} score: ${playerScore}-${computerScore}`);
                break;
            case "PlayerWin":
                playerScore++;
                i++;
                console.log(`Round ${i} score: ${playerScore}-${computerScore}`);
                break;
        }
    }
    return (playerScore === computerScore) ? "Draw!" :
           (playerScore > computerScore) ? "You win!" :
           "You Lose!";

} else console.log("Parameter should be positive integer number!")
}