import { getRandomNumber } from '../index.js';

export const description = 'What number is missing in the progression?';

const getProgression = (firstElement, step) => {
  const progression = [firstElement];
  for (let j = 1; j < 10; j += 1) {
    const nextElement = progression[j - 1] + step;
    progression.push(nextElement);
  }
  return progression;
};

const getAnswersAndQuestions = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const firstElementOfProgression = getRandomNumber(1, 11);
    const progressionStep = getRandomNumber(2, 10);
    const randomElemOfProgression = getRandomNumber(0, 10);
    const progression = getProgression(firstElementOfProgression, progressionStep);
    const correctAnswer = progression[randomElemOfProgression];
    progression[randomElemOfProgression] = '..';
    const question = progression.join(' ');
    result[i] = [question, correctAnswer.toString()];
  }
  return result;
};

export const answersAndQuestions = getAnswersAndQuestions();
