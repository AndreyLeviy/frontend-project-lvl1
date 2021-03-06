import { roundsCount } from '../index.js';
import getRandomNumber from '../functions.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let j = 2; j <= Math.sqrt(number); j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

const getAnswersAndQuestions = () => {
  const result = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    result.push([question, correctAnswer.toString()]);
  }
  return result;
};

export default { description, getAnswersAndQuestions };
