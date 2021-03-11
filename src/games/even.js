import runGame, { NUMBER_OF_ROUNDS } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const runEvenGame = () => {
  const rounds = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const number = Math.floor(Math.random() * 101);
    const answer = isEven(number) ? 'yes' : 'no';
    rounds.push([number, answer]);
  }

  runGame(rounds, gameDescription);
};

export default runEvenGame;
