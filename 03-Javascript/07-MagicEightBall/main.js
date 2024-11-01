/*In this project we will build a Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.*/

let userName = "Seriano";
// Define userName as an empty string

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

// This code checks if userName has a value and logs the appropriate greeting.
const userQuestion = "Will I have a good day today?";
// Define userQuestion

// Log the user's question
console.log(`${userName} asked: ${userQuestion}`);
//This will print the user’s name along with the question they asked.

let randomNumber = Math.floor(Math.random() * 8);
//We need to generate a random number between 0 and 7.






