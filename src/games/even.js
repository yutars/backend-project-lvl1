import run, { maxCountRounds } from '../index.js';
import getRandomNum from '../utils.js';

const mod = (n) => (n % 2 === 0 ? 'yes' : 'no');

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => {
  const rounds = [];
  for (let i = maxCountRounds; i > 0; i -= 1) {
    const randNum = getRandomNum(1, 100);
    const question = randNum;
    const correctAnswer = mod(randNum);
    rounds.push([question, correctAnswer]);
  }
  run(description, rounds);
};
