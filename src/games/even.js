import _ from 'lodash';
import run, { maxCountRounds } from '../index.js';
import getRandomNum from '../utils.js';

const isEven = (n) => (n % 2 === 0);
const roundCounter = (maxCount = maxCountRounds) => _.range(maxCount);
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => {
  const rounds = [];
  roundCounter().forEach(() => {
    const randNum = getRandomNum(1, 100);
    const question = randNum;
    const correctAnswer = isEven(randNum) ? 'yes' : 'no';
    rounds.push([question, correctAnswer]);
  });
  run(description, rounds);
};
