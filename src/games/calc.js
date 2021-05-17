import _ from 'lodash';
import run, { maxCountRounds } from '../index.js';
import getRandomNum from '../utils.js';

const calc = (first, second, op) => {
  switch (op) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    default:
      return first + second;
  }
};

const description = 'What is the result of the expression?';

const generateRound = () => {
  const ops = ['*', '+', '-'];
  const firstArg = getRandomNum(-100, 100);
  const secondArg = getRandomNum(-100, 100);
  const operator = ops[getRandomNum(0, ops.length - 1)];
  const question = `${firstArg} ${operator} ${secondArg}`;
  const answer = calc(firstArg, secondArg, operator).toString();
  return [question, answer];
};

export default () => {
  const rounds = _.range(maxCountRounds).map(() => generateRound());
  run(description, rounds);
};
