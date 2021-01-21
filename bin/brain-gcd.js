#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Find the greatest common divisor of given numbers.');
const getRandomInt = (min, max) => {
  const mi = Math.ceil(min);
  const ma = Math.floor(max);
  return Math.floor(Math.random() * (ma - mi)) + mi;
};

const doGcd = () => {
  let i = 0;
  while (i < 3) {
    const randomInt1 = getRandomInt(1, 26); // целое случайное число от //1 до 9;
    const randomInt2 = getRandomInt(1, 26); // целое случайное число от //1 до 14;
    console.log(`Question: ${randomInt1} ${randomInt2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const getCorrectAnswer = (one, two) => {
      const minNum = (one < two) ? one : two;
      const maxNum = (one > two) ? one : two;
      let j = minNum;
      for (; j > 0; j -= 1) {
        if (maxNum % j === 0 && minNum % j === 0) {
          return j;
        }
      }
      return j;
    };
    const correctAnswer = getCorrectAnswer(randomInt1, randomInt2);
    // eslint-disable-next-line no-eval
    if (eval(userAnswer) === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}//!`);
};

doGcd();
