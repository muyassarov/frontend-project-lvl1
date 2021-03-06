import runGame from '../index.js';

const NUMBER_OF_ROUNDS = 3;
const gcd = (num1, num2) => {
  if (num2) {
    return gcd(num2, num1 % num2);
  }
  return num1;
};

const runGcdGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const rounds = [];

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const question = `${number1} ${number2}`;
    const answer = gcd(number1, number2).toString();
    rounds.push([question, answer]);
  }

  runGame(rounds, gameDescription);
};

export default runGcdGame;
