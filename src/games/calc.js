import readlineSync from 'readline-sync';
import {
  greeting, loseMessage, winMessage, getRandomNumber,
} from '../index.js';

const signs = ['+', '-', '*'];
const getRandomSign = () => {
  const randomSign = Math.floor(Math.random() * signs.length);
  return signs[randomSign];
};

const doCalc = () => {
  greeting();
  console.log('What is the result of the expression?');
  let i = 0;
  while (i < 3) {
    const randomNum1 = getRandomNumber(1, 10); // целое случайное число от //1 до 9;
    const randomNum2 = getRandomNumber(1, 15); // целое случайное число от //1 до 14;
    const sign = getRandomSign(signs);
    console.log(`Question: ${randomNum1} ${sign} ${randomNum2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // eslint-disable-next-line no-eval
    const correctAnswer = eval(randomNum1 + sign + randomNum2);
    // eslint-disable-next-line no-eval
    if (eval(userAnswer) === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer;(. Correct answer was '${correctAnswer}'.`);
      loseMessage();
      return;
    }
  }
  winMessage();
};

export default doCalc;
