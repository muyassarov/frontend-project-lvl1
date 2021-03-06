import runGame from '../index.js';

const NUMBER_OF_ROUNDS = 3;
const generateProgression = () => {
  const start = Math.floor(Math.random() * 20) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const progressionLength = 10;
  const coll = [];
  let element;
  for (let i = 0; i < progressionLength; i += 1) {
    element = (i === 0) ? start + step : coll[coll.length - 1] + step;
    coll.push(element);
  }
  return coll;
};

const runProgressionGame = () => {
  const gameDescription = 'What number is missing in the progression?';
  const rounds = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const progression = generateProgression();
    const elementIndex = Math.floor(Math.random() * progression.length);
    const answer = progression[elementIndex].toString();

    progression[elementIndex] = '..';
    rounds.push([
      progression.join(' '),
      answer,
    ]);
  }
  runGame(rounds, gameDescription);
};

export default runProgressionGame;
