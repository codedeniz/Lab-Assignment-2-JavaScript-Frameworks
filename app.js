import {
  welcomeMessage,
  convertMinutesToHours,
  calculateFactorial,
  generateRandomPassword,
  firstName1,
  lastName1,
  firstName2,
  lastName2
} from './utils.js';

welcomeMessage(firstName1, lastName1, firstName2, lastName2);

const hours = convertMinutesToHours(150);
console.log(`150 minutes is ${hours} hours.`);

const factorial = calculateFactorial(5);
console.log(`Factorial of 5 is ${factorial}.`);

const password = generateRandomPassword(10);
console.log(`Generated password: ${password}`);
