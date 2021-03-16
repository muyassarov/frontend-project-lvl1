import runGame from '../index.js';
import { generateRandomInt } from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const generateRound = () => {
  const question = generateRandomInt(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(generateRound, gameDescription);
