import readlineSync from 'readline-sync';
import {
  greeting, loseMessage, winMessage, getRandomNumber,
} from '../index.js';

const doProgressionGame = () => {
  greeting();
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    const firstElementOfProgression = getRandomNumber(1, 11);
    const progressionStep = getRandomNumber(2, 10);
    const randomElemOfProgression = getRandomNumber(0, 10);

    const getProgression = () => {
      const progression = [firstElementOfProgression];
      for (let j = 1; j < 10; j += 1) {
        const nextElement = progression[j - 1] + progressionStep;
        progression.push(nextElement);
      }
      return progression;
    };
    const progression = getProgression();

    const correctAnswer = progression[randomElemOfProgression];
    progression[randomElemOfProgression] = '..';
    const strForQuestion = progression.join(' ');
    console.log(`Question: ${strForQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
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

export default doProgressionGame;
