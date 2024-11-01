let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false; // or true, depending on the test condition
const age = 19; // Set to the runner's age

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
}
