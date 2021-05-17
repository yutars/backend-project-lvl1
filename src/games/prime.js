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

const generateRound = () => {
  const randomNum = getRandomNum(2, 20);
  const question = randomNum.toString();
  const answer = isNumberPrime(randomNum) ? 'yes' : 'no';
  return [question, answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  const rounds = _.range(maxCountRounds).map(() => generateRound());
  run(description, rounds);
};
