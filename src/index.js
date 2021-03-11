import readlineSync from 'readline-sync';
import greeting from './cli.js';

export const NUMBER_OF_ROUNDS = 3;

const runGame = (rounds, gameDescription) => {
  const playerName = greeting();
  console.log(gameDescription);

  for (let i = 0; i < rounds.length; i += 1) {
    const [question, answer] = rounds[i];
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
