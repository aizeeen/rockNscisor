
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    const resultDisplay = document.getElementById('resultDisplay');
    const playerScoreDisplay = document.getElementById('playerScore');
    const computerScoreDisplay = document.getElementById('computerScore');
    const winnerMessage = document.getElementById('winnerMessage');
        
    const computerSelection = getComputerChoice();
    const result = determineWinner(playerSelection, computerSelection);
    
    
    if (result === 'Player wins!') {
        playerScore++;
    } else if (result === 'Computer wins!') {
        computerScore++;
    }

    
    resultDisplay.textContent = `Player selected: ${playerSelection} | Computer selected: ${computerSelection} | Result: ${result}`;
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    
    if (playerScore === 5) {
        winnerMessage.textContent = 'Congratulations! Player wins the game!';
        resetGame();
    } else if (computerScore === 5) {
        winnerMessage.textContent = 'Sorry! Computer wins the game!';
        resetGame();
    }
}


function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scisor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (
        (playerSelection === 'Rock' && computerSelection === 'Scisor') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scisor' && computerSelection === 'Paper')
    ) {
        return 'Player wins!';
    }
    return 'Computer wins!';
}


function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerScore').textContent = 'Player Score: 0';
    document.getElementById('computerScore').textContent = 'Computer Score: 0';
    document.getElementById('winnerMessage').textContent = '';
}


document.getElementById('Rockbtn').addEventListener('click', function() {
    playRound('Rock');
});

document.getElementById('Paperbtn').addEventListener('click', function() {
    playRound('Paper');
});

document.getElementById('Scisorbtn').addEventListener('click', function() {
    playRound('Scisor');
});
