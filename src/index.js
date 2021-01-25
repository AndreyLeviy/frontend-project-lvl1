import readlineSync from 'readline-sync';

let userName;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  userName = name;
};

/* export const getUserAnswer = () => {
const answer = readlineSync.question('Your answer: ');
userAnswer = answer;
};
*/

export const winMessage = () => console.log(`Congratulations, ${userName}!`);
export const loseMessage = () => {
  console.log(`Let's try again, ${userName}!`);
};

export const getRandomNumber = (min, max) => {
  const mi = Math.ceil(min);
  const ma = Math.floor(max);
  return Math.floor(Math.random() * (ma - mi)) + mi;
};
