import readlineSync from 'readline-sync';
import greeting from './cli.js';

const runGame = (generateRound, gameDescription) => {
  const numberOfRounds = 3;
  const playerName = greeting();
  console.log(gameDescription);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (answer !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default runGame;
