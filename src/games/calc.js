import startQuest, { maxCountRounds } from '../index.js';
import getRandomNum from '../utils.js';

const toCalc = (first, second, op) => {
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
export default () => {
  const ops = ['*', '+', '-'];
  const qna = [];
  qna.push(description);
  qna.push([]);
  for (let j = maxCountRounds; j > 0; j -= 1) {
    const firstArg = getRandomNum(-100, 100);
    const secondArg = getRandomNum(-100, 100);
    const operator = ops[getRandomNum(0, 2)];
    const question = `Question: ${firstArg} ${operator} ${secondArg}`;
    const correctAnswer = toCalc(firstArg, secondArg, operator);
    const questionAndAnswer = 1;
    qna[questionAndAnswer].push([question, correctAnswer]);
  }
  startQuest(qna);
  return true;
};
