import _ from 'lodash';
import run, { maxCountRounds } from '../index.js';
import getRandomNum from '../utils.js';

const gcd = (a, b) => ((b === 0) ? a : gcd(b, a % b));
const roundCounter = (maxCount = maxCountRounds) => _.range(maxCount);
const description = 'Find the greatest common divisor of given numbers.';
export default () => {
  const rounds = [];
  roundCounter().forEach(() => {
    const firstNumber = getRandomNum(1, 100);
    const secondNumber = getRandomNum(0, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = gcd(firstNumber, secondNumber);
    rounds.push([question, correctAnswer.toString()]);
  });
  run(description, rounds);
};
