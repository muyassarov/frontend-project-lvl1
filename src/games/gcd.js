import runGame, { NUMBER_OF_ROUNDS } from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const gcd = (num1, num2) => {
  if (num2) {
    return gcd(num2, num1 % num2);
  }
  return num1;
};

const runGcdGame = () => {
  const rounds = [];

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const number1 = getRandomInt(0, 100);
    const number2 = getRandomInt(0, 100);
    const question = `${number1} ${number2}`;
    const answer = gcd(number1, number2).toString();
    rounds.push([question, answer]);
  }

  runGame(rounds, gameDescription);
};

export default runGcdGame;
