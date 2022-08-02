let winner;
let playerScore = 0,
  computerScore = 0;
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) =>
  choice.addEventListener("click", function (e) {
    updateScores(playRound(e.target.textContent.toLowerCase(), getComputerChoice()));
    if (playerScore == 5 || computerScore == 5) declareWinner();
  })
);

// get computer input (randomizer)
function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(playerChoice, computerChoice) {
  if (computerChoice == playerChoice) return "draw";
  if (computerChoice == "rock" && playerChoice == "paper") return "player";
  if (computerChoice == "rock" && playerChoice == "scissor") return "computer";
  if (computerChoice == "paper" && playerChoice == "rock") return "computer";
  if (computerChoice == "paper" && playerChoice == "scissor") return "player";
  if (computerChoice == "scissor" && playerChoice == "rock") return "player";
  if (computerChoice == "scissor" && playerChoice == "paper") return "computer";
}

function updateScores(winner){
  if (winner == "computer") computerScore++;
  if (winner == "player") playerScore++;

  const compCounter = document.querySelector(".comp-score");
  const playerCounter = document.querySelector(".player-score");
  compCounter.textContent = `Computer Score: ${computerScore}`;
  playerCounter.textContent = `Player Score: ${playerScore}`;
}

function declareWinner(){
  if(playerScore == 5) winner = "Player Wins! <3";
  if(computerScore == 5) winner = "Computer Wins! :P";
  const result = document.querySelector(".results");
  result.textContent = winner;
}