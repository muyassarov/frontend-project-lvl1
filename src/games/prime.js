import runGame, { NUMBER_OF_ROUNDS } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const runPrimeGame = () => {
  const rounds = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    const answer = isPrime(number) ? 'yes' : 'no';
    rounds.push([number, answer]);
  }
  runGame(rounds, gameDescription);
};

export default runPrimeGame;
