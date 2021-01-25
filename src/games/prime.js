import readlineSync from 'readline-sync';
import {
  greeting, loseMessage, winMessage, getRandomNumber,
} from '../index.js';

const getCorrectAnswer = (a) => {
  for (let j = 2; j < a; j += 1) {
    if (a % j === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const doPrimeGame = () => {
  greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const randomNumber = getRandomNumber(1, 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(randomNumber);
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

export default doPrimeGame;
