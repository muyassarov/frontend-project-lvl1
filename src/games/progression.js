import runGame, { NUMBER_OF_ROUNDS } from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const stringifyProgressionWithReplacement = (coll, index, replacement) => [...coll.slice(0, index), replacement, ...coll.slice(index + 1)].join(' ');
const generateProgression = (step, length = 10) => {
  const start = Math.floor(Math.random() * 20) + 1;
  const coll = [];
  let element;
  for (let i = 0; i < length; i += 1) {
    element = (i === 0) ? start + step : coll[coll.length - 1] + step;
    coll.push(element);
  }
  return coll;
};

const runProgressionGame = () => {
  const rounds = [];
  const progressionLength = 10;
  const replacement = '..';
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const step = Math.floor(Math.random() * 10) + 1;
    const progression = generateProgression(step, progressionLength);
    const elementIndex = Math.floor(Math.random() * progression.length);
    const answer = progression[elementIndex].toString();
    rounds.push([
      stringifyProgressionWithReplacement(progression, elementIndex, replacement),
      answer,
    ]);
  }
  runGame(rounds, gameDescription);
};

export default runProgressionGame;
