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
    return "The game is a tie!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
};

console.log(determineWinner("rock", "scissors")); // should print 'You won!'
console.log(determineWinner("rock", "paper")); // should print 'The computer won!'
console.log(determineWinner("rock", "rock")); // should print 'The game is a tie!'

console.log(determineWinner("paper", "rock")); // should print 'You won!'
console.log(determineWinner("paper", "scissors")); // should print 'The computer won!'
console.log(determineWinner("paper", "paper")); // should print 'The game is a tie!'

console.log(determineWinner("scissors", "paper")); // should print 'You won!'
console.log(determineWinner("scissors", "rock")); // should print 'The computer won!'
console.log(determineWinner("scissors", "scissors")); // should print 'The game is a tie!'
