import _ from 'lodash';
import run, { maxCountRounds } from '../index.js';
import getRandomNum from '../utils.js';

const isNumberPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};
const roundCounter = (maxCount = maxCountRounds) => _.range(maxCount);

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => {
  const rounds = [];
  roundCounter().forEach(() => {
    const randomNum = getRandomNum(2, 20);
    const question = randomNum;
    const correctAnswer = isNumberPrime(randomNum) ? 'yes' : 'no';
    rounds.push([question, correctAnswer]);
  });
  run(description, rounds);
};
