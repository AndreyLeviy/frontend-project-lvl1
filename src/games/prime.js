import { getRandomNumber } from '../index.js';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCorrectAnswer = (a) => {
  for (let j = 2; j < a; j += 1) {
    if (a % j === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getAnswersAndQuestions = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumber(1, 100);
    const correctAnswer = getCorrectAnswer(question);
    result[i] = [question, correctAnswer.toString()];
  }
  return result;
};

export const answersAndQuestions = getAnswersAndQuestions();
