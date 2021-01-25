import readlineSync from 'readline-sync';
import {
  greeting, loseMessage, winMessage, getRandomNumber,
} from '../index.js';

const doGcd = () => {
  greeting();
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < 3) {
    const randomNum1 = getRandomNumber(1, 26); // целое случайное число от //1 до 9;
    const randomNum2 = getRandomNumber(1, 26); // целое случайное число от //1 до 14;
    console.log(`Question: ${randomNum1} ${randomNum2}`);
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
    const correctAnswer = getCorrectAnswer(randomNum1, randomNum2);
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

export default doGcd;
