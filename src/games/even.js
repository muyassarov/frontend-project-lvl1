import runGame from '../index.js';

const NUMBER_OF_ROUNDS = 3;
const isEven = (number) => number % 2 === 0;

const runEvenGame = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const number = Math.floor(Math.random() * 101);
    const answer = isEven(number) ? 'yes' : 'no';
    rounds.push([number, answer]);
  }

  runGame(rounds, gameDescription);
};

export default runEvenGame;
