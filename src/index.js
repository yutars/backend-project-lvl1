import readlineSync from 'readline-sync';

export const maxCountRounds = 3;
export default (args) => {
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
  const description = args[0];
  console.log(description);
  for (let i = 0; i < args[1].length; i += 1) {
    const question = args[1][i][0];
    console.log(question);
    let answer = readlineSync.question('Your answer: ');
    const correctAnswer = args[1][i][1];
    if (+answer === correctAnswer) answer = +answer;
    if (answer !== correctAnswer) {
      console.log(` '${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.Let's try again, ${gamerName}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${gamerName}!`);
  return true;
};
