//Selectors
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
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
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  
  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors';
  }
  if (randomNumber === 3) {
    computerChoice = 'paper';
  }
  if (randomNumber === 4) {
    computerChoice = 'lizard';
  }
  if (randomNumber === 5) {
    computerChoice = 'spock';
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
  if (computerChoice === 'rock' && userChoice === "lizard") {
    result = 'You have been crushed, Try Again!';
  }
  if (computerChoice === 'rock' && userChoice === "spock") {
    result = 'Congratulations! Computer has been vaporised';
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'Victory! Keep going for the Big Win.';
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'You Lost, but dont Give Up!';
  }
  if (computerChoice === 'paper' && userChoice === "lizard") {
    result = 'Lizard has eaten paper, You win!';
  }
  if (computerChoice === 'paper' && userChoice === "spock") {
    result = 'Spock theory has been disproved, You lose!.';
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'You Won, Show that Computer Whos Boss!';
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'Commiserations, You Lost!';
  }
  if (computerChoice === 'scissors' && userChoice === "lizard") {
    result = 'You have been decipated, try again!';
  }
  if (computerChoice === 'scissors' && userChoice === "spock") {
    result = 'Spock has smashed the scissors, You Win';
  }
  if (computerChoice === 'lizard' && userChoice === "rock") {
    result = 'Congratulations, you have crushed the lizard';
  }
  if (computerChoice === 'lizard' && userChoice === "paper") {
    result = 'You have been eaten by the lizard, better luck next time';
  }
  if (computerChoice === 'lizard' && userChoice === "scissors") {
    result = 'You have removed the head of your enemy, Flawless Victory!';
  }
  if (computerChoice === 'lizard' && userChoice === "spock") {
    result = 'Oh No, you have been Poisoned, try again!';
  }
  if (computerChoice === 'spock' && userChoice === "rock") {
    result = 'You have been vaporised, better luck next time ';
  }
  if (computerChoice === 'spock' && userChoice === "paper") {
    result = 'You have disprived Spocks theory, Well done!';
  }
  if (computerChoice === 'spock' && userChoice === "scissors") {
    result = 'You have been destroyed';
  }
  if (computerChoice === 'spock' && userChoice === "lizard") {
    result = 'You have poisoned the great Spock, You Win!';
  }
  resultDisplay.innerHTML = result;
}