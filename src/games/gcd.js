import { getRandomNumber } from '../index.js';

export const description = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (one, two) => {
  const minNum = (one < two) ? one : two;
  const maxNum = (one > two) ? one : two;
  let j = minNum;
  for (; j > 0; j -= 1) {
    if (maxNum % j === 0 && minNum % j === 0) {
      return j;
    }
  }
  return j;
};

const getAnswersAndQuestions = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = getRandomNumber(1, 26); // целое случайное число от //1 до 25;
    const randomNum2 = getRandomNumber(1, 26); // целое случайное число от //1 до 25;
    const question = `${randomNum1} ${randomNum2}`;
    const correctAnswer = getCorrectAnswer(randomNum1, randomNum2);
    result[i] = [question, correctAnswer.toString()];
  }
  return result;
};

export const answersAndQuestions = getAnswersAndQuestions();

/* const doGcd = () => {
  greeting();
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < 3) {
    const randomNum1 = getRandomNumber(1, 26); // целое случайное число от //1 до 25;
    const randomNum2 = getRandomNumber(1, 26); // целое случайное число от //1 до 25;
    console.log(`Question: ${randomNum1} ${randomNum2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const getCorrectAnswer = (one, two) => {
      const minNum = (one < two) ? one : two;
      const maxNum = (one > two) ? one : two;
      let j = minNum;
      for (; j > 0; j -= 1) {
        if (maxNum % j === 0 && minNum % j === 0) {
          return j;
        }
      }
      return j;
    };
    const correctAnswer = getCorrectAnswer(randomNum1, randomNum2);
    // eslint-disable-next-line no-eval
    if (eval(userAnswer) === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer;(. Correct answer was '${correctAnswer}'.`);
      loseMessage();
      return;
    }
  }
  winMessage();
};

export default doGcd;
*/
