import { getRandomNumber, amountRounds } from '../index.js';

const isEven = (num) => (num % 2) === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getAnswersAndQuestions = () => {
  const result = [];
  for (let i = 0; i < amountRounds; i += 1) {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    result.push([question, correctAnswer]);
  }
  return result;
};

export default { description, getAnswersAndQuestions };
