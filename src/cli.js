import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const runGame = (rounds, gameDescription) => {
  const playerName = greeting();
  console.log(gameDescription);

  for (const [question, answer] of rounds) {
    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (answer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${playerAnswer}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}`);
};

export default runGame;
