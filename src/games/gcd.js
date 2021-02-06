import { getRandomNumber } from '../index.js';

export const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (one, two) => {
  let j = Math.min(one, two);
  for (; j > 0; j -= 1) {
    if (one % j === 0 && two % j === 0) {
      return j;
    }
  }
  return j;
};

const getAnswersAndQuestions = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = getRandomNumber(1, 26);
    const randomNum2 = getRandomNumber(1, 26);
    const question = `${randomNum1} ${randomNum2}`;
    const correctAnswer = getGcd(randomNum1, randomNum2);
    result[i] = [question, correctAnswer.toString()];
  }
  return result;
};

const answersAndQuestions = getAnswersAndQuestions();
export default { description, answersAndQuestions };
