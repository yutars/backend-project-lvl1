import run, { maxCountRounds } from '../index.js';
import getRandomNum from '../utils.js';

const isNumberPrime = (n) => {
  if (n > 1) {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) return 'no';
    }
    return 'yes';
  }
  return 'no';
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => {
  const rounds = [];
  for (let i = maxCountRounds; i > 0; i -= 1) {
    const randomNum = getRandomNum(2, 20);
    const question = randomNum;
    const correctAnswer = isNumberPrime(randomNum);
    rounds.push([question, correctAnswer]);
  }
  run(description, rounds);
};
