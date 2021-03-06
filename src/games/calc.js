import runGame from '../index.js';

const NUMBER_OF_ROUNDS = 3;

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

const createRounds = () => {
  const operatorsColl = ['*', '-', '+'];
  const gameRounds = [];

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const operand1 = Math.floor(Math.random() * 11);
    const operand2 = Math.floor(Math.random() * 11);
    const operator = operatorsColl[Math.floor(Math.random() * operatorsColl.length)];
    const question = `${operand1} ${operator} ${operand2}`;
    const answer = calculateExp(operand1, operand2, operator).toString();
    gameRounds.push([question, answer]);
  }

  return gameRounds;
};

const runCalcGame = () => {
  const rounds = createRounds();
  const gameDescription = 'What is the result of the expression?';

  runGame(rounds, gameDescription);
};
export default runCalcGame;
