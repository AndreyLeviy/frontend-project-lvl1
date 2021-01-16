#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');
const getRandomInt = (min, max) => {
  const mi = Math.ceil(min);
  const ma = Math.floor(max);
  return Math.floor(Math.random() * (ma - mi)) + mi;
};
const signs = ['+', '-', '*'];
const getRandomSign = () => {
  const randomSign = Math.floor(Math.random() * signs.length);
  return signs[randomSign];
};
const doCalc = () => {
  let i = 0;
  while (i < 3) {
    const randomInt1 = getRandomInt(1, 10); // целое случайное число от //1 до 9;
    const randomInt2 = getRandomInt(1, 15); // целое случайное число от //1 до 14;
    const sign = getRandomSign(signs);
    console.log(`Question: ${randomInt1} ${sign} ${randomInt2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // eslint-disable-next-line no-eval
    const correctAnswer = eval(randomInt1 + sign + randomInt2);
    // eslint-disable-next-line no-eval
    if (eval(userAnswer) === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}'`);
      return;
    }
  }
  console.log(`Congratulations, ${name}//!`);
};

doCalc();
