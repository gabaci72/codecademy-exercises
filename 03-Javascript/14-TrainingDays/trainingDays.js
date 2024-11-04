const name = 'Nala'; // Move name to global scope

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3); // Move random inside the function
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

const getTrainingDays = event => {
  let days; // Declare days here
  if (event === 'Marathon') {
    days = 50; // Assign value to days
  } else if (event === 'Triathlon') {
    days = 100; // Assign value to days
  } else if (event === 'Pentathlon') {
    days = 200; // Assign value to days
  }
  return days;
};

const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);

logEvent(name, event);
logTime(name, days);
