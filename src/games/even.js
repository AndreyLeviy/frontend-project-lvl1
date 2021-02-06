import { getRandomNumber } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getAnswersAndQuestions = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumber(1, 100);
    const correctAnswer = (question % 2) === 0 ? 'yes' : 'no';
    result[i] = [question, correctAnswer];
  }
  return result;
};

const answersAndQuestions = getAnswersAndQuestions();
export default { description, answersAndQuestions };
