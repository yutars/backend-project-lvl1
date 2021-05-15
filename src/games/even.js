import _ from 'lodash';
import run, { maxCountRounds } from '../index.js';
import getRandomNum from '../utils.js';

const isEven = (n) => (n % 2 === 0);
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateRound = () => {
  const randNum = getRandomNum(1, 100);
  const question = randNum;
  const correctAnswer = isEven(randNum) ? 'yes' : 'no';
  return [question, correctAnswer.toString()];
};
export default () => {
  const rounds = _.range(maxCountRounds).map(() => generateRound());
  run(description, rounds);
};
