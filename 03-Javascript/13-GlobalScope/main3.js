// Scope Pollution
//When you declare global variables, they go to the global namespace
//Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes.
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius'; // 1.Overwriting the global variable
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
