//Selectors
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const computerScore = document.getElementById('computer-score');
const playerScore = document.getElementById('player-score');
let userChoice;
let computerChoice;
let result;

//Event Listener
//possibleChoice function taken from Ania Kubow as stated in readme file
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}));

// Functions
//generateComputerChoice and getResult functions taken from Ania Kubow as stated in readme file
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  
  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors';
  }
  if (randomNumber === 3) {
    computerChoice = 'paper';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'Its a draw! Try Again';
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'You Win, Congratulations!';
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'Hard Luck, Try Again!';
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'Victory! Keep going for the Big Win.';
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'You Lost, but dont Give Up!';
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'You Won, Show that Computer Whos Boss!';
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'Commiserations, You Lost!';
  }
  resultDisplay.innerHTML = result;
}