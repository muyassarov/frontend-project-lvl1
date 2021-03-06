#!/usr/bin/env node

import runGame from '../src/cli.js';

const NUMBER_OF_ROUNDS = 3;
const GAME_DESCRIPTION = 'What is the result of the expression?';

const createRounds = () => {
  const operatorsColl = ['*', '-', '+'];
  const gameRounds = [];

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const operand1 = Math.floor(Math.random() * 11);
    const operand2 = Math.floor(Math.random() * 11);
    const operator = operatorsColl[Math.floor(Math.random() * operatorsColl.length)];
    const question = `${operand1} ${operator} ${operand2}`;
    const answer = eval(question).toString();
    gameRounds.push([question, answer]);
  }

  return gameRounds;
};

const rounds = createRounds();

runGame(rounds, GAME_DESCRIPTION);