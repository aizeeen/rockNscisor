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