import runGame, { NUMBER_OF_ROUNDS } from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'What number is missing in the progression?';
const generateProgression = (start, step, indexToReplace, length = 10) => {
  const elements = [];
  const maxValue = step * length + start;
  let currentValue = start;
  while (currentValue < maxValue) {
    elements.push(currentValue);
    currentValue += step;
  }
  return [...elements.slice(0, indexToReplace), '..', ...elements.slice(indexToReplace + 1)].join(' ');
};

const runProgressionGame = () => {
  const rounds = [];
  const progressionLength = 10;
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const step = getRandomInt(1, 10);
    const start = getRandomInt(0, 20);
    const elementIndex = getRandomInt(0, progressionLength);
    const progression = generateProgression(start, step, elementIndex, progressionLength);
    const answer = start + step * elementIndex;
    rounds.push([progression, answer.toString()]);
  }
  runGame(rounds, gameDescription);
};

export default runProgressionGame;
