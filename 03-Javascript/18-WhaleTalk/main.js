/* 1.Create a variable named input that is equal to any phrase you’d like. 
This variable will contain the text you want to translate into “whale talk”.*/
const input = 'Hello, how are you today?';

/* 2.Whales only speak with the vowels, “a”, “e”, “i”, “o”, and “u”. 
Using these lowercase letters, create an array named vowels. 
This array will not be updated so be sure to choose the appropriate declaration keyword.*/
const vowels = ['a', 'e', 'i', 'o', 'u'];

/* 3.Create a variable named resultArray and set it equal to an empty array: []. 
This will serve as a place to store the vowels from the input string.*/
let resultArray = [];

/* 4.Create a loop to iterate through each letter of the input variable text.
 In a later step, we will compare each letter with our vowels array.*/

// for (let i = 0; i < input.length; i++) {
//   // Code to process each letter will go here
// }

/* To check your work, log the iterator numbered position inside the for
 loop and run your code. This should count the number of characters in your input string.

Comment out this code when you’re ready to move on.*/
// for (let i = 0; i < input.length; i++) {
//   // console.log('i is ' + i);
// }

/* 6.Create a nested for loop inside of the for loop you just wrote. Make the inner loop 
iterate through the vowels array each time the outer loop runs.

This will enable you to check each letter of input against all the vowels elements during each iteration.*/
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    // Code to compare input[i] with vowels[j] will go here
  }
}


