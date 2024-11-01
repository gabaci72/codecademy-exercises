/*Race DayY
Codecademy’s annual race is just around the corner! This year, we have a lot of participants. 
ou have been hired to write a program that will register runners for the race and give them instructions on race day.*/
let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false; // or true, depending on the test condition
const age = 19; // Set to the runner's age

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}
//This code checks if the runner is over 18 and registered early. If both conditions are met, it adds 1000 to their raceNumber.