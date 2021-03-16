import { generateRandomInt } from '../utils.js';
import runGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const generateRound = () => {
  const question = generateRandomInt(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(generateRound, gameDescription);
