#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const getRandomInt = (min, max) => {
  const mi = Math.ceil(min);
  const ma = Math.floor(max);
  return Math.floor(Math.random() * (ma - mi)) + mi;
};

const getCorrectAnswer = (a) => {
  for (let j = 2; j < a; j += 1) {
    if (a % j === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const doPrimeGame = () => {
  let i = 0;
  while (i < 3) {
    const randomNumber = getRandomInt(1, 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(randomNumber);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer;(.Correct answer was '${correctAnswer}'.`);
      console.log(`Let 's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

doPrimeGame();
