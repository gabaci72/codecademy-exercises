console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error! Invalid choice.");
  }
};

console.log(getUserChoice("Paper")); // should print 'paper'
console.log(getUserChoice("fork")); // should print 'Error!' and `undefined`

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

//console.log(getComputerChoice()); // should print 'rock', 'paper', or 'scissors'
//console.log(getComputerChoice()); // should print 'rock', 'paper', or 'scissors'
//console.log(getComputerChoice()); // should print 'rock', 'paper', or 'scissors'

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  
  // Additional logic for 'scissors' will go here
};
