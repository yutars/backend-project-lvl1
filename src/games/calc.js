import _ from 'lodash';
import run, { maxCountRounds } from '../index.js';
import getRandomNum from '../utils.js';

const calc = (first, second, op) => {
  let result = first;
  switch (op) {
    case '+':
      result += second;
      break;
    case '-':
      result -= second;
      break;
    case '*':
      result *= second;
      break;
    default:
      result += second;
  }
  return +result;
};

const description = 'What is the result of the expression?';
const generateRound = () => {
  const ops = ['*', '+', '-'];
  const firstArg = getRandomNum(-100, 100);
  const secondArg = getRandomNum(-100, 100);
  const operator = ops[getRandomNum(0, ops.length - 1)];
  const question = `${firstArg} ${operator} ${secondArg}`;
  const correctAnswer = calc(firstArg, secondArg, operator).toString();
  return [question, correctAnswer];
};
export default () => {
  const rounds = _.range(maxCountRounds).map(() => generateRound());
  run(description, rounds);
};
