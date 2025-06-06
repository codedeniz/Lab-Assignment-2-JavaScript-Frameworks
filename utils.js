// utils.js
export const firstName1 = "Gokdeniz";
export const lastName1 = "Akbuga";  
export const firstName2 = "Mohammad";
export const lastName2 = "Fard";

export function welcomeMessage(firstName1, lastName1,firstName2 ,lastName2) {
  console.log(`Welcome ${firstName1} ${lastName1} and ${firstName2} ${lastName2} G@I College`);
}

export function convertMinutesToHours(minutes) {
  return minutes / 60;
}

export function calculateFactorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * calculateFactorial(n - 1);
}

export function generateRandomPassword(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; //62
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
