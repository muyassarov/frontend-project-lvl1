import runGame from '../index.js';
import { generateRandomInt } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';
const generateProgression = (first, step, hideElementIndex, elementsCount) => {
  const elements = [];
  for (let i = 0; i < elementsCount; i += 1) {
    const element = (i === hideElementIndex) ? '..' : i * step + first;
    elements.push(element);
  }
  return elements.join(' ');
};

const generateRound = () => {
  const elementsCount = 10;
  const step = generateRandomInt(1, 10);
  const first = generateRandomInt(0, 20);
  const hideElementIndex = generateRandomInt(0, elementsCount);
  const question = generateProgression(first, step, hideElementIndex, elementsCount);
  const answer = (first + step * hideElementIndex).toString();
  return [question, answer];
};

export default () => runGame(generateRound, gameDescription);
