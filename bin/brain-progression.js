#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

const getRandomInt = (min, max) => {
  const mi = Math.ceil(min);
  const ma = Math.floor(max);
  return Math.floor(Math.random() * (ma - mi)) + mi;
};

const doProgressionGame = () => {
  let i = 0;
  while (i < 3) {
    const firstElementOfProgression = getRandomInt(1, 11);
    const progressionStep = getRandomInt(2, 10);
    const randomElemOfProgression = getRandomInt(0, 10);

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
      console.log(`Let's try again, ${name}'`);
      return;
    }
  }
  console.log(`Congratulations, ${name}//!`);
};

doProgressionGame();
