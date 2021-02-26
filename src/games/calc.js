import { roundsCount } from '../index.js';
import getRandomNumber from '../functions.js';

const description = 'What is the result of the expression?';

const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  const randomSign = Math.floor(Math.random() * signs.length);
  return signs[randomSign];
};

const getAnswersAndQuestions = () => {
  const result = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomNumber(1, 10);
    const secondNumber = getRandomNumber(1, 16);
    const sign = getRandomSign();
    const question = `${firstNumber} ${sign} ${secondNumber}`;
    let correctAnswer;
    if (sign === '+') {
      correctAnswer = firstNumber + secondNumber;
    } else if (sign === '*') {
      correctAnswer = (firstNumber * secondNumber);
    } else {
      correctAnswer = (firstNumber - secondNumber);
    }
    result.push([question, correctAnswer.toString()]);
  }
  return result;
};

export default { description, getAnswersAndQuestions };
