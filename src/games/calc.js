import runGame from '../index.js';
import { generateRandomInt } from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const calculateExp = (operand1, operand2, operator) => {
  switch (operator) {
    case '-':
      return operand1 - operand2;
    case '+':
      return operand1 + operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const operatorsColl = ['*', '-', '+'];
  const operand1 = generateRandomInt(1, 10);
  const operand2 = generateRandomInt(1, 10);
  const operator = operatorsColl[generateRandomInt(0, operatorsColl.length)];
  const question = `${operand1} ${operator} ${operand2}`;
  const answer = calculateExp(operand1, operand2, operator).toString();
  return [question, answer];
};

export default () => runGame(generateRound, gameDescription);
