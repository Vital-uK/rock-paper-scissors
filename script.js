const quotesArr = [];
quotesArr[0] = "The time when there is no one there to feel sorry for you or to cheer for you is when a player is made.";
quotesArr[1] = "– Tim Duncan";
quotesArr[2] = "Excellence is not a singular act but a habit. You are what you do repeatedly.";
quotesArr[3] = "– Shaquille O’Neal";
quotesArr[4] = "There are no shortcuts—everything is reps, reps, reps.";
quotesArr[5] = "– Arnold Schwarzenegger";
quotesArr[6] = "Luck? Sure. But only after long practice and only with the ability to think under pressure.";
quotesArr[7] = "– Babe Zaharias"
quotesArr[8] = "I start early and I stay late, day after day, year after year. It took me 17 years and 114 days to become an overnight success.";
quotesArr[9] = "– Lionel Messi";
quotesArr[10]= "Float like a butterfly, sting like a bee. The hands can’t hit what the eyes can’t see.";
quotesArr[11]= "– Muhammad Ali";
quotesArr[12]= "I always tell kids, you have two eyes and one mouth. Keep two open and one closed. You never learn anything if you’re the one talking.";
quotesArr[13]= "– Gordie Howe";
quotesArr[14]= "My purpose is to go over there and to see if I can keep bringing sports. I’m hoping it opens doors for us.";
quotesArr[15]= "– Dennis Rodman";
quotesArr[16]= "Worrying gets you nowhere. if you turn up worrying about how you’re going to perform, you’ve already lost. Train hard, turn up, run your best and the rest will take care of itself.";
quotesArr[17]= "– Usain Bolt";

let playerScore = 0;
let computerScore = 0;
let playerCh = "";
let gameInProgress = false;

console.log(`Let start the game`);

const roundResultCapture = document.querySelector('#round-result');
const compChoiceImg = document.querySelector('.compChoiceImg');
const playerChoiceImgs = document.querySelectorAll('.playerChoiceImg');
for (let playerChoiceImg of playerChoiceImgs) {
    playerChoiceImg.addEventListener('click', () => {
        playerChoiceImg.style.filter = "grayscale(0)";
        console.log(`You choose ${playerChoiceImg.id}`);
        
        if (!gameInProgress) {
            playRound(playerChoiceImg.id, computerPlay());
            
        } else {
            playerCh = playerChoiceImg.id;
        }
        setTimeout(() => playerChoiceImg.style.filter = "", 1000);
    });
}

function computerPlay() {
    let computerChoice

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            computerChoice = "Paper";
            compChoiceImg.setAttribute('src',"img/paper.jpg");
            compChoiceImg.style.filter = "grayscale(0)";
            
            break;
        case 1:
            computerChoice = "Rock";
            compChoiceImg.setAttribute('src',"img/rock.jpg");
            compChoiceImg.style.filter = "grayscale(0)";
            
            break;
        case 2:
            computerChoice = "Scissors";
            compChoiceImg.setAttribute('src',"img/scissors.jpg");
            compChoiceImg.style.filter = "grayscale(0)";
            
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
        case "SCISSORS":
            playerChoice = "Scissors";
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
        roundResultCapture.textContent = "Draw!";
        roundResultCapture.style.color = "chocolate";
        return "Draw"
    } else {
        switch (playerSelection) {
            case "Paper":
                if (computerSelection === "Rock") {
                    console.log("You win! Paper beats Rock.");
                    roundResultCapture.textContent = "You win! Paper beats Rock.";
                    roundResultCapture.style.color = "green";
                    /*playerScore++;*/
                    return "PlayerWin";
                } else {
                    console.log("You lose! Scissors beats Paper.");
                    roundResultCapture.textContent = "You lose! Scissors beats Paper.";
                    roundResultCapture.style.color = "red";
                    /*computerScore++;*/
                    return "ComputerWin";
                }
                break;
            case "Rock":
                if (computerSelection === "Scissors") {
                    console.log("You win! Rock beats Scissors");
                    roundResultCapture.textContent = "You win! Rock beats Scissors";
                    roundResultCapture.style.color = "green";
                    /*playerScore++;*/
                    return "PlayerWin";
                } else {
                    console.log("You lose! Paper beats Rock.");
                    roundResultCapture.textContent = "You lose! Paper beats Rock."
                    roundResultCapture.style.color = "red";
                    /*computerScore++;*/
                    return "ComputerWin";
                }
                break;
            case "Scissors":
                if (computerSelection === "Paper") {
                    console.log("You win! Scissors beats Paper");
                    roundResultCapture.textContent = "You win! Scissors beats Paper";
                    roundResultCapture.style.color = "green";
                    /*playerScore++;*/
                    return "PlayerWin";
                } else {
                    console.log("You lose! Rock beats Paper.");
                    roundResultCapture.textContent = "You lose! Rock beats Paper.";
                    roundResultCapture.style.color = "red";
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

async function game(rounds = 5) {
    if (rounds > 0) {
        let i = 0;
        playerScore = 0;
        computerScore = 0;
        
        while (i < rounds) {

            switch (playRound(playerPlay(), computerPlay())) {
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
        return (playerScore === computerScore) ? "Final result is Draw!" :
            (playerScore > computerScore) ? "You've won The Game!" :
                "You've lost The Game!";

    } else console.log("Parameter should be positive integer number!");
}