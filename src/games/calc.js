import runGame, { NUMBER_OF_ROUNDS } from '../index.js';

const generateNum = () => Math.floor(Math.random() * 11);
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
    const operand1 = generateNum();
    const operand2 = generateNum();
    const operator = operatorsColl[Math.floor(Math.random() * operatorsColl.length)];
    const question = `${operand1} ${operator} ${operand2}`;
    const answer = calculateExp(operand1, operand2, operator).toString();
    rounds.push([question, answer]);
  }

  runGame(rounds, gameDescription);
};
export default runCalcGame;
