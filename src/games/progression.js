import runGame from '../index.js';
import { generateRandomInt } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';
const generateProgression = (first, step, hideElementIndex, length = 10) => {
  const elements = [];
  let element;
  for (let i = 0; i < length; i += 1) {
    element = i * step + first;
    if (i === hideElementIndex) {
      element = '..';
    }
    elements.push(element);
  }
  return elements.join(' ');
};

const generateRound = () => {
  const length = 10;
  const step = generateRandomInt(1, 10);
  const first = generateRandomInt(0, 20);
  const hideElementIndex = generateRandomInt(0, length);
  const question = generateProgression(first, step, hideElementIndex, length);
  const answer = (first + step * hideElementIndex).toString();
  return [question, answer];
};

export default () => runGame(generateRound, gameDescription);
