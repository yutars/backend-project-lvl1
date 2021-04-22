import readlineSync from 'readline-sync';

const maxCountRounds = 3;
export const engine = (obj) => {
  const paramGame = { ...obj };
  if (paramGame.count === 0) {
    paramGame.gamerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${paramGame.gamerName}!`);
    console.log(paramGame.pointGame);
    paramGame.count = maxCountRounds;
    return paramGame;
  }
  console.log(paramGame.question);
  let answer = readlineSync.question('Your answer: ');
  if (+answer === paramGame.correctAnswer) answer = +answer;
  if (answer !== paramGame.correctAnswer) {
    console.log(` '${answer}' is wrong answer ;(. Correct answer was '${paramGame.correctAnswer}'.Let's try again, ${paramGame.gamerName}!`);
    paramGame.count = 0;
    return paramGame;
  }
  console.log('Correct!');
  paramGame.count -= 1;
  if (paramGame.count === 0) console.log(`Congratulations, ${paramGame.gamerName}!`);
  return paramGame;
};
