import { getRandomNumber } from '../index.js';

const description = 'What is the result of the expression?';

const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  const randomSign = Math.floor(Math.random() * signs.length);
  return signs[randomSign];
};

const getAnswersAndQuestions = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = getRandomNumber(1, 10);
    const randomNum2 = getRandomNumber(1, 16);
    const sign = getRandomSign();
    const question = `${randomNum1} ${sign} ${randomNum2}`;
    let correctAnswer;
    if (sign === '+') {
      correctAnswer = randomNum1 + randomNum2;
    } else if (sign === '*') {
      correctAnswer = (randomNum1 * randomNum2);
    } else {
      correctAnswer = (randomNum1 - randomNum2);
    }
    result[i] = [question, correctAnswer.toString()];
  }
  return result;
};

const answersAndQuestions = getAnswersAndQuestions();
export default { description, answersAndQuestions };
