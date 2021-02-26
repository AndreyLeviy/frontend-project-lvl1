import readlineSync from 'readline-sync';

export const roundsCount = 3;

const run = ({ description, getAnswersAndQuestions }) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  // eslint-disable-next-line no-restricted-syntax
  for (const [question, correctAnswer] of getAnswersAndQuestions()) {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer;(.Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default run;
