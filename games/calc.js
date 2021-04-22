import * as q from '../src/index.js';
import * as utils from '../src/utils.js';

const toCalc = (first, second, op) => {
  let result = first;
  switch (op) {
    case '+':
      result = first + second;
      break;
    case '-':
      result = first - second;
      break;
    case '*':
      result = first * second;
      break;
    default:
      result = first + second;
  }
  return +result;
};

const pointGame = 'What is the result of the expression?';
export default () => {
  const ops = ['*', '+', '-'];
  let ofirst = 0;
  let osecond = 0;
  let i = '';
  let paramGame = {};
  paramGame.pointGame = pointGame;
  paramGame.count = 0;
  paramGame = q.engine(paramGame);
  paramGame.pointGame = '';
  while (paramGame.count > 0) {
    ofirst = utils.getRandomNum(-100, 100);
    osecond = utils.getRandomNum(-100, 100);
    i = utils.getRandomNum(0, 2);
    paramGame.question = `Question: ${ofirst} ${ops[i]} ${osecond}`;
    paramGame.correctAnswer = toCalc(ofirst, osecond, ops[i]);
    paramGame = q.engine(paramGame);
  }
  return true;
};
