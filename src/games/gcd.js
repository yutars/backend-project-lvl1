import _ from 'lodash';
import run, { maxCountRounds } from '../index.js';
import getRandomNum from '../utils.js';

const gcd = (a, b) => ((b === 0) ? a : gcd(b, a % b));

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const firstNumber = getRandomNum(1, 100);
  const secondNumber = getRandomNum(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = gcd(firstNumber, secondNumber).toString();
  return [question, answer];
};

export default () => {
  const rounds = _.range(maxCountRounds).map(() => generateRound());
  run(description, rounds);
};
