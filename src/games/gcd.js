import runGame from '../index.js';
import { generateRandomInt } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const gcd = (number1, number2) => {
  if (number2) {
    return gcd(number2, number1 % number2);
  }
  return number1;
};
const generateRound = () => {
  const number1 = generateRandomInt(0, 100);
  const number2 = generateRandomInt(0, 100);
  const question = `${number1} ${number2}`;
  const answer = gcd(number1, number2).toString();
  return [question, answer];
};

export default () => runGame(generateRound, gameDescription);
