function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getPlayerChoice() {
  return prompt("Enter your choice: ").toLowerCase();
}

function playRound() {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();
  if (computerChoice == playerChoice) return "draw";
  if (computerChoice == "rock" && playerChoice == "paper") return "player";
  if (computerChoice == "rock" && playerChoice == "scissor") return "computer";
  if (computerChoice == "paper" && playerChoice == "rock") return "computer";
  if (computerChoice == "paper" && playerChoice == "scissor") return "player";
  if (computerChoice == "scissor" && playerChoice == "rock") return "player";
  if (computerChoice == "scissor" && playerChoice == "paper") return "computer";
}

function startGame(){
    let computerScore = 0, playerScore = 0;
    for (let i = 0; i < 5; i++){
        let winner = playRound();
        if (winner == "computer") computerScore++;
        if (winner == "player") playerScore++;
    }
    if (computerScore > playerScore) return "Computer Wins";
    if (computerScore < playerScore) return "Player Wins";
    if (computerScore == playerScore) return "It's a tie";
}
