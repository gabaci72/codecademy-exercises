// Project: Using array methods, you will transform an array of strings into a secret message!

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

/* 2. Great! You can check your work by logging the .length of the array.

At this point, the length should be 1 less than the original length.*/
// Log the length of the array to check
console.log(secretMessage.length); // This should output: 23

/* 3.Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.*/
// Add 'to' and 'Program' to the end of the secretMessage array
secretMessage.push('to', 'Program');
console.log(secretMessage.length);

/* 4. Change the word easily to the word right by accessing the index and replacing it.*/
// Change 'easily' to 'right'
secretMessage[7] = 'right';
console.log(secretMessage.length);

/* 5.Use an array method to remove the first string of the array.*/
// Remove the first string from the secretMessage array
secretMessage.shift();
console.log(secretMessage.length);
