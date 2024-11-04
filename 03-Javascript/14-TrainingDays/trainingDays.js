/*I declared let days; outside of the if blocks and then assigned values based on the event type. 
#This allows to return the days variable without encountering a ReferenceError. */

// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
  let days; // 1.Declare days here
  if (event === 'Marathon') {
    days = 50; // Assign value to days
  } else if (event === 'Triathlon') {
    days = 100; // Assign value to days
  } else if (event === 'Pentathlon') {
    days = 200; // Assign value to days
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = event => {
  const name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};

const logTime = days => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 

logEvent(event);
logTime(days);
