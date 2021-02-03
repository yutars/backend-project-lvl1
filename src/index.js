import readlineSync from 'readline-sync';

export const invite = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};

export const askQuestion = (math) => {
  console.log(`Question: ${math}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
export const isCorrect = () => {
  console.log('Correct!');
};
export const getPointGame = (str) => {
  console.log(str);
};
export const isWrong = (lanswer, ranswer, name) => {
  console.log(` '${lanswer}' is wrong answer ;(. Correct answer was '${ranswer}'.Let's try again, ${name}!`);
};
export const сongratulate = (name) => {
  console.log(`Congratulations, ${name}!`);
};
export const getMaxCountRounds = () => 3;

