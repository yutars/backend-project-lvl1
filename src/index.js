import readlineSync from 'readline-sync';

export const maxCountRounds = 3;
export default (description, rounds) => {
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
  console.log(description);
  for (let i = 0; i < rounds.length; i += 1) {
    const question = rounds[i][0];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = rounds[i][1];
    if (answer !== correctAnswer) {
      console.log(` '${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.Let's try again, ${gamerName}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${gamerName}!`);
  return true;
};
