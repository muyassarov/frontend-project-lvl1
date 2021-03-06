#!/usr/bin/env node

import runGame from '../src/cli.js';

const NUMBER_OF_ROUNDS = 3;
const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const createRounds = () => {
  const rounds = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const number = Math.floor(Math.random() * 101);
    const answer = isEven(number) ? 'yes' : 'no';
    rounds.push([number, answer]);
  }
  return rounds;
};

runGame(createRounds(), GAME_DESCRIPTION);
