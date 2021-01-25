import readlineSync from 'readline-sync';
import {
  greeting, loseMessage, winMessage, getRandomNumber,
} from '../index.js';

const doGame = () => {
  greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const randomNum = getRandomNumber(1, 100); // целое случайное число от 1 до 99;
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rem = randomNum % 2; // остаток от дления
    const correctAnswer = rem === 0 ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer;(.Correct answer was '${correctAnswer}'.`);
      loseMessage();
      return;
    }
  }
  winMessage();
};

export default doGame;
