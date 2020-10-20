import {startConfetti , stopConfetti , removeConfetti} from './confetti.js';

const playerScoreEL = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEL = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');

//1. If array contains the computerchoice , then the player won
//2. if not , then there is a tie or computer won.



const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';


// console.log(allGameIcons);
// reset all selected icons
function resetSelected(){
 allGameIcons.forEach((icon) =>{
    icon.classList.remove('selected');
 });
 stopConfetti();
 removeConfetti();
}

// Reset Score & playerchoice/computerChoice
function resetAll(){
  playerScoreNumber =  0;
  computerScoreNumber = 0;
  playerScoreEL.textContent = playerScoreNumber;
  computerScoreEL.textContent = computerScoreNumber;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent ='';
  resultText.textContent ='';
  resetSelected();
}
window.resetAll = resetAll;
// computer random choice
function computerRandomChoice(){
  const computerChoiceNumber = Math.random();

  if(computerChoiceNumber < 0.2){
    computerChoice = 'rock';
  }else if(computerChoiceNumber <=0.4){
    computerChoice = 'scissors';
  }else if(computerChoiceNumber <=0.6){
    computerChoice = 'paper';
  }else if(computerChoiceNumber <=0.8){
    computerChoice = 'lizard';
  }else {
    computerChoice = 'spock';
  }
}


// Add selected styling & computer choice
function displayComputerChoice(){
  switch(computerChoice){
      case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock';
      break;

      case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper';
      break;
    
      case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- Scissors';
      break;

      case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- lizard';
      break;

      case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Spock';
      break;
    default :
    break;
  }

}

//Check result , increase scores , update result Text
function updateScore(playerChoice){
  console.log(playerChoice, computerChoice);
  if(playerChoice === computerChoice){
    resultText.textContent = "It's a tie.";
  }else{
    const choice = choices[playerChoice]; // whatever the user clicks = choices[rock]
    console.log(choice.defeats.indexOf(computerChoice)); // if the defeat array contains the computer choice
  
    if(choice.defeats.indexOf(computerChoice) >-1){
      startConfetti();
      resultText.textContent = 'You won!';
      playerScoreNumber++;
      playerScoreEL.textContent = playerScoreNumber;
    }else{
      resultText.textContent = 'You Lost!';
      computerScoreNumber++;
      computerScoreEL.textContent = computerScoreNumber;
    }

  
  }
}



// call functions to process whose turn it is
function checkResult(playerChoice){
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}




// passing player selection value and styling icons

function select(playerChoice){
  checkResult(playerChoice);
  // add 'selected' styling & playerChoice
  switch(playerChoice){
      case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock';
      break;

      case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper';
      break;
    
      case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- Scissors';
      break;

      case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- lizard';
      break;

      case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Spock';
      break;
    default :
    break;
  }
}
// because with modules this function is not in the global scope.
window.select = select;
// on startup , set initial values
resetAll();



// code review
/**
 * A bundler like webpack uses TREE SHAKING and remove the stuff from the imported files that we don't need.
 * 
 */