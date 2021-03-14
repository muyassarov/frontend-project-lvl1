import runGame, { NUMBER_OF_ROUNDS } from '../index.js';
import getRandomInt from '../utils.js';

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

const runCalcGame = () => {
  const rounds = [];
  const operatorsColl = ['*', '-', '+'];

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const operand1 = getRandomInt(1, 10);
    const operand2 = getRandomInt(1, 10);
    const operator = operatorsColl[getRandomInt(0, operatorsColl.length)];
    const question = `${operand1} ${operator} ${operand2}`;
    const answer = calculateExp(operand1, operand2, operator).toString();
    rounds.push([question, answer]);
  }

  runGame(rounds, gameDescription);
};
export default runCalcGame;
