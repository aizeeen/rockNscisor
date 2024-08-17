function getComputerChoice(){
    const randomNumber = Math.random() 
    if (randomNumber < 0.33 ){
        return "rock";
    }else if(randomNumber < 0.66){
        return "paper";
    }else {
        return "scissors";
    }
}
    function getHumanChoice() {
        let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase().trim();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        } else {
            alert("Invalid choice. Please enter rock, paper, or scissors.");
            return getHumanChoice(); 
        }
    }
    console.log(getHumanChoice());
    let humanScore = 0 
    let computerScore = 0
    

function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toLowerCase().trim();
    computerChoice = computerChoice.toLowerCase().trim();

    
    const winningCombos = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

   
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (winningCombos[humanChoice] === computerChoice) {
        return `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`;
    } else if (winningCombos[computerChoice] === humanChoice) {
        return `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
    } else {
        return "Invalid choice. Please choose rock, paper, or scissors.";
    }
}


function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        
        let humanChoice = prompt("Enter your choice (rock, paper, or scissors):");
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        console.log(result);
        if (result.startsWith("You win!")) {
            humanScore++;
        } else if (result.startsWith("You lose!")) {
            computerScore++;
        }
    
        console.log(`Scores - You: ${humanScore}, Computer: ${computerScore}`);
    }
    
    
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game with a score of ${humanScore} to ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`Sorry, you lost the game. The final score is Computer ${computerScore} - You ${humanScore}.`);
    } else {
        console.log(`The game is a tie with a score of ${humanScore} to ${computerScore}.`);
    }
}


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

playGame();
