#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const NUMBER_OF_ROUNDS = 3;
const isEven = (number) => number % 2 === 0;

const runGame = (rounds = NUMBER_OF_ROUNDS) => {
  const name = greeting();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < rounds; i += 1) {
    const number = Math.floor(Math.random() * 101);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}`);
};

runGame();
