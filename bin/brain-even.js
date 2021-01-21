#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const getRandomInt = (min, max) => {
  const mi = Math.ceil(min);
  const ma = Math.floor(max);
  return Math.floor(Math.random() * (ma - mi)) + mi;
};

const doGame = () => {
  let i = 0;
  while (i < 3) {
    const randomInt = getRandomInt(1, 100); // целое случайное число от 1 до 99;
    console.log(`Question: ${randomInt}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rem = randomInt % 2; // остаток от дления
    const correctAnswer = rem === 0 ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer;(.Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

doGame();
