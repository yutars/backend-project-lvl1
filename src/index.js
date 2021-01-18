import readlineSync from 'readline-sync';

export const prompt = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};

export const Question = (math) => {
  console.log(`Question: ${math}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
export const isCorrect = () => {
  console.log('Correct!');
};
export const isWrong = (lanswer, ranswer, name) => {
  console.log(` '${lanswer}' is wrong answer ;(. Correct answer was '${ranswer}'.Let's try again, ${name}!`);
};
export const Congratulation = (name) => {
  console.log(`Congratulations, ${name}!`);
};
export const maxCountRounds = () => 3;
export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;