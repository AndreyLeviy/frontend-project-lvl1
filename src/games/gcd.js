import { roundsCount } from '../index.js';
import getRandomNumber from '../functions.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (one, two) => (one !== 0 ? getGcd(two % one, one) : two);

const getAnswersAndQuestions = () => {
  const result = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomNumber(1, 26);
    const secondNumber = getRandomNumber(1, 26);
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = getGcd(firstNumber, secondNumber);
    result.push([question, correctAnswer.toString()]);
  }
  return result;
};

export default { description, getAnswersAndQuestions };
