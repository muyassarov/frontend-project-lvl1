import runGame, { NUMBER_OF_ROUNDS } from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'What number is missing in the progression?';
const generateProgression = (start, step, length = 10) => {
  const progression = [];
  const maxValue = step * length + start;
  let currentValue = start;
  while (currentValue < maxValue) {
    currentValue += step;
    progression.push(currentValue);
  }
  return progression;
};

const runProgressionGame = () => {
  const rounds = [];
  const replacement = '..';
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const step = getRandomInt(1, 10);
    const start = getRandomInt(0, 20);
    const progression = generateProgression(start, step);
    const elementIndex = getRandomInt(0, progression.length);
    const answer = progression[elementIndex].toString();
    rounds.push([
      [...progression.slice(0, elementIndex), replacement, ...progression.slice(elementIndex + 1)].join(' '),
      answer,
    ]);
  }
  runGame(rounds, gameDescription);
};

export default runProgressionGame;
