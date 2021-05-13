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

const roundCounter = (maxCount = maxCountRounds) => _.range(maxCount);
const description = 'What is the result of the expression?';
export default () => {
  const ops = ['*', '+', '-'];
  const rounds = [];
  roundCounter().forEach(() => {
    const firstArg = getRandomNum(-100, 100);
    const secondArg = getRandomNum(-100, 100);
    const operator = ops[getRandomNum(0, 2)];
    const question = `${firstArg} ${operator} ${secondArg}`;
    const correctAnswer = calc(firstArg, secondArg, operator);
    rounds.push([question, correctAnswer.toString()]);
  });
  run(description, rounds);
};
